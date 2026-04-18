import SwiftUI

struct BoardView: View {
    @ObservedObject var game: ChessGame

    private let lightColor = Color(red: 0.93, green: 0.85, blue: 0.72)
    private let darkColor  = Color(red: 0.71, green: 0.53, blue: 0.39)
    private let highlightColor = Color.yellow.opacity(0.5)
    private let selectedColor  = Color.green.opacity(0.5)
    private let lastMoveColor  = Color.blue.opacity(0.25)
    private let checkColor     = Color.red.opacity(0.5)

    var body: some View {
        GeometryReader { geo in
            let size = min(geo.size.width, geo.size.height)
            let squareSize = size / 8

            ZStack {
                VStack(spacing: 0) {
                    ForEach((0..<8).reversed(), id: \.self) { rank in
                        HStack(spacing: 0) {
                            ForEach(0..<8, id: \.self) { file in
                                squareView(file: file, rank: rank, size: squareSize)
                            }
                        }
                    }
                }
                .frame(width: size, height: size)

                if let promSq = game.promotionSquare {
                    promotionOverlay(square: promSq, squareSize: squareSize, boardSize: size)
                }
            }
        }
        .aspectRatio(1, contentMode: .fit)
    }

    @ViewBuilder
    private func squareView(file: Int, rank: Int, size: CGFloat) -> some View {
        let sq = Square(file: file, rank: rank)
        let isLight = (file + rank) % 2 == 1
        let isSelected = game.selectedSquare == sq
        let isValidMove = game.validMoves.contains(sq)
        let isLastMove = game.lastMove?.from == sq || game.lastMove?.to == sq
        let isKingInCheck = isKingCheck(sq: sq)

        ZStack {
            Rectangle()
                .fill(isLight ? lightColor : darkColor)

            if isLastMove {
                Rectangle().fill(lastMoveColor)
            }
            if isKingInCheck {
                Rectangle().fill(checkColor)
            }
            if isSelected {
                Rectangle().fill(selectedColor)
            }
            if isValidMove {
                if game.piece(at: sq) != nil {
                    Circle()
                        .stroke(Color.black.opacity(0.35), lineWidth: size * 0.08)
                        .padding(size * 0.04)
                } else {
                    Circle()
                        .fill(Color.black.opacity(0.2))
                        .padding(size * 0.28)
                }
            }

            if let piece = game.piece(at: sq) {
                Text(piece.symbol)
                    .font(.system(size: size * 0.78))
                    .minimumScaleFactor(0.5)
            }

            // Rank/file labels
            if file == 0 {
                Text("\(rank + 1)")
                    .font(.system(size: size * 0.22, weight: .semibold))
                    .foregroundColor(isLight ? darkColor : lightColor)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                    .padding(2)
            }
            if rank == 0 {
                Text(String(UnicodeScalar(Unicode.Scalar("a".unicodeScalars.first!.value + UInt32(file))!)!))
                    .font(.system(size: size * 0.22, weight: .semibold))
                    .foregroundColor(isLight ? darkColor : lightColor)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottomTrailing)
                    .padding(2)
            }
        }
        .frame(width: size, height: size)
        .onTapGesture { game.handleTap(on: sq) }
    }

    private func isKingCheck(sq: Square) -> Bool {
        guard let p = game.piece(at: sq), p.type == .king else { return false }
        if case .check(let color) = game.status, color == p.color { return true }
        if case .checkmate(let color) = game.status, color == p.color { return true }
        return false
    }

    @ViewBuilder
    private func promotionOverlay(square: Square, squareSize: CGFloat, boardSize: CGFloat) -> some View {
        let color = game.piece(at: square)?.color ?? .white
        let pieces: [PieceType] = [.queen, .rook, .bishop, .knight]

        let x = CGFloat(square.file) * squareSize + squareSize / 2
        let y = boardSize - CGFloat(square.rank) * squareSize - squareSize / 2
        let goDown = square.rank >= 6

        VStack(spacing: 0) {
            ForEach(pieces, id: \.self) { type in
                let piece = ChessPiece(type: type, color: color)
                Button {
                    game.promote(to: type)
                } label: {
                    Text(piece.symbol)
                        .font(.system(size: squareSize * 0.78))
                        .frame(width: squareSize, height: squareSize)
                        .background(Color.white)
                        .overlay(Rectangle().stroke(Color.gray, lineWidth: 1))
                }
            }
        }
        .shadow(radius: 8)
        .position(x: x, y: goDown ? y + squareSize * 2 : y - squareSize * 2)
    }
}
