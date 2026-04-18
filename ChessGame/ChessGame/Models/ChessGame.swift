import Foundation
import Combine

enum GameStatus {
    case playing
    case check(PieceColor)
    case checkmate(PieceColor)  // loser
    case stalemate
    case draw
}

class ChessGame: ObservableObject {
    @Published var board: [[ChessPiece?]] = Array(repeating: Array(repeating: nil, count: 8), count: 8)
    @Published var currentTurn: PieceColor = .white
    @Published var selectedSquare: Square? = nil
    @Published var validMoves: [Square] = []
    @Published var status: GameStatus = .playing
    @Published var promotionSquare: Square? = nil
    @Published var lastMove: Move? = nil

    private var enPassantTarget: Square? = nil

    init() {
        setupBoard()
    }

    func setupBoard() {
        board = Array(repeating: Array(repeating: nil, count: 8), count: 8)

        let backRank: [PieceType] = [.rook, .knight, .bishop, .queen, .king, .bishop, .knight, .rook]

        for (file, type) in backRank.enumerated() {
            board[0][file] = ChessPiece(type: type, color: .white)
            board[7][file] = ChessPiece(type: type, color: .black)
        }
        for file in 0..<8 {
            board[1][file] = ChessPiece(type: .pawn, color: .white)
            board[6][file] = ChessPiece(type: .pawn, color: .black)
        }

        currentTurn = .white
        selectedSquare = nil
        validMoves = []
        enPassantTarget = nil
        lastMove = nil
        status = .playing
    }

    func piece(at square: Square) -> ChessPiece? {
        guard square.isValid else { return nil }
        return board[square.rank][square.file]
    }

    func handleTap(on square: Square) {
        guard case .playing = status else { return }
        guard promotionSquare == nil else { return }

        if let selected = selectedSquare {
            if validMoves.contains(square) {
                executeMove(Move(from: selected, to: square))
            } else if let p = piece(at: square), p.color == currentTurn {
                selectedSquare = square
                validMoves = legalMoves(from: square)
            } else {
                selectedSquare = nil
                validMoves = []
            }
        } else {
            if let p = piece(at: square), p.color == currentTurn {
                selectedSquare = square
                validMoves = legalMoves(from: square)
            }
        }
    }

    func promote(to type: PieceType) {
        guard let sq = promotionSquare else { return }
        board[sq.rank][sq.file]?.type = type
        promotionSquare = nil
        finalizeTurn()
    }

    // MARK: - Move Execution

    private func executeMove(_ move: Move) {
        var m = move
        var piece = board[move.from.rank][move.from.file]!

        // Detect castling
        if piece.type == .king && abs(move.to.file - move.from.file) == 2 {
            m.isCastling = true
        }

        // Detect en passant
        if piece.type == .pawn && move.to == enPassantTarget {
            m.isEnPassant = true
        }

        // Move piece
        piece.hasMoved = true
        board[move.to.rank][move.to.file] = piece
        board[move.from.rank][move.from.file] = nil

        // En passant capture
        if m.isEnPassant {
            let captureRank = move.from.rank
            board[captureRank][move.to.file] = nil
        }

        // Castling: move rook
        if m.isCastling {
            let kingside = move.to.file > move.from.file
            let rookFromFile = kingside ? 7 : 0
            let rookToFile = kingside ? 5 : 3
            board[move.from.rank][rookToFile] = board[move.from.rank][rookFromFile]
            board[move.from.rank][rookToFile]?.hasMoved = true
            board[move.from.rank][rookFromFile] = nil
        }

        // Update en passant target
        if piece.type == .pawn && abs(move.to.rank - move.from.rank) == 2 {
            enPassantTarget = Square(file: move.to.file, rank: (move.from.rank + move.to.rank) / 2)
        } else {
            enPassantTarget = nil
        }

        lastMove = m
        selectedSquare = nil
        validMoves = []

        // Pawn promotion
        let promotionRank = piece.color == .white ? 7 : 0
        if piece.type == .pawn && move.to.rank == promotionRank {
            promotionSquare = move.to
            return
        }

        finalizeTurn()
    }

    private func finalizeTurn() {
        currentTurn = currentTurn.opposite
        updateGameStatus()
    }

    // MARK: - Game Status

    private func updateGameStatus() {
        let inCheck = isInCheck(color: currentTurn)
        let hasLegal = hasAnyLegalMove(color: currentTurn)

        if !hasLegal {
            status = inCheck ? .checkmate(currentTurn) : .stalemate
        } else {
            status = inCheck ? .check(currentTurn) : .playing
        }
    }

    // MARK: - Move Generation

    func legalMoves(from square: Square) -> [Square] {
        guard let piece = piece(at: square) else { return [] }
        return pseudoLegalMoves(from: square, piece: piece)
            .filter { to in !wouldBeInCheck(from: square, to: to, color: piece.color) }
    }

    private func pseudoLegalMoves(from square: Square, piece: ChessPiece) -> [Square] {
        switch piece.type {
        case .pawn:   return pawnMoves(from: square, color: piece.color)
        case .knight: return knightMoves(from: square, color: piece.color)
        case .bishop: return slidingMoves(from: square, color: piece.color, dirs: [(1,1),(1,-1),(-1,1),(-1,-1)])
        case .rook:   return slidingMoves(from: square, color: piece.color, dirs: [(1,0),(-1,0),(0,1),(0,-1)])
        case .queen:  return slidingMoves(from: square, color: piece.color, dirs: [(1,1),(1,-1),(-1,1),(-1,-1),(1,0),(-1,0),(0,1),(0,-1)])
        case .king:   return kingMoves(from: square, color: piece.color)
        }
    }

    private func slidingMoves(from sq: Square, color: PieceColor, dirs: [(Int,Int)]) -> [Square] {
        var moves: [Square] = []
        for (df, dr) in dirs {
            var cur = sq.offset(file: df, rank: dr)
            while cur.isValid {
                if let p = piece(at: cur) {
                    if p.color != color { moves.append(cur) }
                    break
                }
                moves.append(cur)
                cur = cur.offset(file: df, rank: dr)
            }
        }
        return moves
    }

    private func knightMoves(from sq: Square, color: PieceColor) -> [Square] {
        [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(1,-2),(-1,2),(-1,-2)]
            .map { sq.offset(file: $0.0, rank: $0.1) }
            .filter { $0.isValid && piece(at: $0)?.color != color }
    }

    private func pawnMoves(from sq: Square, color: PieceColor) -> [Square] {
        var moves: [Square] = []
        let dir = color == .white ? 1 : -1
        let startRank = color == .white ? 1 : 6

        let oneAhead = sq.offset(file: 0, rank: dir)
        if oneAhead.isValid && piece(at: oneAhead) == nil {
            moves.append(oneAhead)
            let twoAhead = sq.offset(file: 0, rank: dir * 2)
            if sq.rank == startRank && piece(at: twoAhead) == nil {
                moves.append(twoAhead)
            }
        }

        for df in [-1, 1] {
            let capture = sq.offset(file: df, rank: dir)
            if capture.isValid {
                if let p = piece(at: capture), p.color != color {
                    moves.append(capture)
                }
                if capture == enPassantTarget {
                    moves.append(capture)
                }
            }
        }
        return moves
    }

    private func kingMoves(from sq: Square, color: PieceColor) -> [Square] {
        var moves: [Square] = []
        for df in -1...1 {
            for dr in -1...1 {
                guard df != 0 || dr != 0 else { continue }
                let dest = sq.offset(file: df, rank: dr)
                if dest.isValid && piece(at: dest)?.color != color {
                    moves.append(dest)
                }
            }
        }

        // Castling
        guard let king = piece(at: sq), !king.hasMoved, !isInCheck(color: color) else { return moves }

        let rank = sq.rank
        // Kingside
        let kRook = Square(file: 7, rank: rank)
        if let rook = piece(at: kRook), rook.type == .rook, !rook.hasMoved,
           piece(at: Square(file: 5, rank: rank)) == nil,
           piece(at: Square(file: 6, rank: rank)) == nil,
           !isSquareAttacked(Square(file: 5, rank: rank), by: color.opposite),
           !isSquareAttacked(Square(file: 6, rank: rank), by: color.opposite) {
            moves.append(Square(file: 6, rank: rank))
        }
        // Queenside
        let qRook = Square(file: 0, rank: rank)
        if let rook = piece(at: qRook), rook.type == .rook, !rook.hasMoved,
           piece(at: Square(file: 1, rank: rank)) == nil,
           piece(at: Square(file: 2, rank: rank)) == nil,
           piece(at: Square(file: 3, rank: rank)) == nil,
           !isSquareAttacked(Square(file: 3, rank: rank), by: color.opposite),
           !isSquareAttacked(Square(file: 2, rank: rank), by: color.opposite) {
            moves.append(Square(file: 2, rank: rank))
        }
        return moves
    }

    // MARK: - Check Detection

    func isInCheck(color: PieceColor) -> Bool {
        guard let kingSquare = findKing(color: color) else { return false }
        return isSquareAttacked(kingSquare, by: color.opposite)
    }

    private func findKing(color: PieceColor) -> Square? {
        for rank in 0..<8 {
            for file in 0..<8 {
                let sq = Square(file: file, rank: rank)
                if let p = piece(at: sq), p.type == .king, p.color == color {
                    return sq
                }
            }
        }
        return nil
    }

    private func isSquareAttacked(_ square: Square, by attackerColor: PieceColor) -> Bool {
        for rank in 0..<8 {
            for file in 0..<8 {
                let from = Square(file: file, rank: rank)
                guard let p = piece(at: from), p.color == attackerColor else { continue }
                let attacks = pseudoLegalMoves(from: from, piece: p)
                if attacks.contains(square) { return true }
            }
        }
        return false
    }

    private func wouldBeInCheck(from: Square, to: Square, color: PieceColor) -> Bool {
        var testBoard = board
        testBoard[to.rank][to.file] = testBoard[from.rank][from.file]
        testBoard[from.rank][from.file] = nil

        // En passant capture removal
        if let p = testBoard[to.rank][to.file], p.type == .pawn, to == enPassantTarget {
            testBoard[from.rank][to.file] = nil
        }

        var kingSquare: Square? = nil
        for rank in 0..<8 {
            for file in 0..<8 {
                let sq = Square(file: file, rank: rank)
                if testBoard[rank][file]?.type == .king && testBoard[rank][file]?.color == color {
                    kingSquare = sq
                }
            }
        }
        guard let ks = kingSquare else { return false }

        // Check if any opponent piece attacks the king on the test board
        for rank in 0..<8 {
            for file in 0..<8 {
                let atk = Square(file: file, rank: rank)
                guard let p = testBoard[rank][file], p.color != color else { continue }
                let attacks = pseudoMovesOnBoard(testBoard, from: atk, piece: p)
                if attacks.contains(ks) { return true }
            }
        }
        return false
    }

    private func pseudoMovesOnBoard(_ b: [[ChessPiece?]], from sq: Square, piece: ChessPiece) -> [Square] {
        func pieceAt(_ s: Square) -> ChessPiece? {
            guard s.isValid else { return nil }
            return b[s.rank][s.file]
        }

        switch piece.type {
        case .knight:
            return [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(1,-2),(-1,2),(-1,-2)]
                .map { sq.offset(file: $0.0, rank: $0.1) }
                .filter { $0.isValid && pieceAt($0)?.color != piece.color }

        case .bishop:
            return slidingOnBoard(b, from: sq, color: piece.color, dirs: [(1,1),(1,-1),(-1,1),(-1,-1)])
        case .rook:
            return slidingOnBoard(b, from: sq, color: piece.color, dirs: [(1,0),(-1,0),(0,1),(0,-1)])
        case .queen:
            return slidingOnBoard(b, from: sq, color: piece.color, dirs: [(1,1),(1,-1),(-1,1),(-1,-1),(1,0),(-1,0),(0,1),(0,-1)])

        case .king:
            var moves: [Square] = []
            for df in -1...1 {
                for dr in -1...1 {
                    guard df != 0 || dr != 0 else { continue }
                    let dest = sq.offset(file: df, rank: dr)
                    if dest.isValid && pieceAt(dest)?.color != piece.color { moves.append(dest) }
                }
            }
            return moves

        case .pawn:
            let dir = piece.color == .white ? 1 : -1
            var moves: [Square] = []
            for df in [-1, 1] {
                let capture = sq.offset(file: df, rank: dir)
                if capture.isValid, let p = pieceAt(capture), p.color != piece.color {
                    moves.append(capture)
                }
            }
            return moves
        }
    }

    private func slidingOnBoard(_ b: [[ChessPiece?]], from sq: Square, color: PieceColor, dirs: [(Int,Int)]) -> [Square] {
        var moves: [Square] = []
        for (df, dr) in dirs {
            var cur = sq.offset(file: df, rank: dr)
            while cur.isValid {
                if let p = b[cur.rank][cur.file] {
                    if p.color != color { moves.append(cur) }
                    break
                }
                moves.append(cur)
                cur = cur.offset(file: df, rank: dr)
            }
        }
        return moves
    }

    private func hasAnyLegalMove(color: PieceColor) -> Bool {
        for rank in 0..<8 {
            for file in 0..<8 {
                let sq = Square(file: file, rank: rank)
                guard let p = piece(at: sq), p.color == color else { continue }
                if !legalMoves(from: sq).isEmpty { return true }
            }
        }
        return false
    }
}
