import Foundation

enum PieceType: String, Codable {
    case king, queen, rook, bishop, knight, pawn
}

enum PieceColor: String, Codable {
    case white, black

    var opposite: PieceColor { self == .white ? .black : .white }
}

struct ChessPiece: Equatable, Codable {
    var type: PieceType
    let color: PieceColor
    var hasMoved: Bool = false

    var symbol: String {
        switch (type, color) {
        case (.king, .white):   return "♔"
        case (.queen, .white):  return "♕"
        case (.rook, .white):   return "♖"
        case (.bishop, .white): return "♗"
        case (.knight, .white): return "♘"
        case (.pawn, .white):   return "♙"
        case (.king, .black):   return "♚"
        case (.queen, .black):  return "♛"
        case (.rook, .black):   return "♜"
        case (.bishop, .black): return "♝"
        case (.knight, .black): return "♞"
        case (.pawn, .black):   return "♟"
        }
    }
}

struct Square: Equatable, Hashable, Codable {
    let file: Int  // 0-7 (a-h)
    let rank: Int  // 0-7 (1-8)

    var isValid: Bool { (0...7).contains(file) && (0...7).contains(rank) }

    func offset(file df: Int, rank dr: Int) -> Square {
        Square(file: file + df, rank: rank + dr)
    }
}

struct Move: Equatable {
    let from: Square
    let to: Square
    var promotion: PieceType? = nil
    var isCastling: Bool = false
    var isEnPassant: Bool = false
}
