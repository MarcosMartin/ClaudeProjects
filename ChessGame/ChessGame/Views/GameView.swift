import SwiftUI

struct GameView: View {
    @StateObject private var game = ChessGame()
    @State private var showNewGameAlert = false

    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                statusBar
                    .padding(.horizontal)
                    .padding(.top, 12)

                Spacer(minLength: 8)

                BoardView(game: game)
                    .padding(.horizontal, 4)

                Spacer(minLength: 8)

                capturedPiecesView
                    .padding(.horizontal)
                    .padding(.bottom, 12)
            }
            .background(Color(UIColor.systemBackground))
            .navigationTitle("Chess")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("New Game") { showNewGameAlert = true }
                }
            }
            .alert("New Game", isPresented: $showNewGameAlert) {
                Button("Cancel", role: .cancel) { }
                Button("Start New Game", role: .destructive) { game.setupBoard() }
            } message: {
                Text("Are you sure you want to start a new game?")
            }
        }
        .navigationViewStyle(.stack)
    }

    private var statusBar: some View {
        HStack {
            Circle()
                .fill(turnIndicatorColor)
                .frame(width: 14, height: 14)
                .overlay(Circle().stroke(Color.primary.opacity(0.3), lineWidth: 1))

            Text(statusText)
                .font(.headline)
                .foregroundColor(statusColor)

            Spacer()
        }
        .padding(.vertical, 8)
        .padding(.horizontal, 12)
        .background(
            RoundedRectangle(cornerRadius: 10)
                .fill(Color(UIColor.secondarySystemBackground))
        )
    }

    private var statusText: String {
        switch game.status {
        case .playing:
            return "\(game.currentTurn == .white ? "White" : "Black") to move"
        case .check(let color):
            return "\(color == .white ? "White" : "Black") is in check!"
        case .checkmate(let loser):
            return "\(loser == .white ? "Black" : "White") wins by checkmate!"
        case .stalemate:
            return "Stalemate — draw!"
        case .draw:
            return "Draw!"
        }
    }

    private var statusColor: Color {
        switch game.status {
        case .check:     return .orange
        case .checkmate: return .red
        case .stalemate, .draw: return .secondary
        default:         return .primary
        }
    }

    private var turnIndicatorColor: Color {
        game.currentTurn == .white ? .white : .black
    }

    private var capturedPiecesView: some View {
        VStack(alignment: .leading, spacing: 4) {
            capturedRow(color: .black, label: "Black captured")
            capturedRow(color: .white, label: "White captured")
        }
    }

    private func capturedRow(color: PieceColor, label: String) -> some View {
        let captured = capturedPieces(by: color)
        return HStack {
            Text(label + ":")
                .font(.caption)
                .foregroundColor(.secondary)
                .frame(width: 110, alignment: .leading)
            Text(captured.isEmpty ? "—" : captured)
                .font(.system(size: 18))
            Spacer()
        }
    }

    private func capturedPieces(by capturer: PieceColor) -> String {
        let startPieces: [(PieceType, Int)] = [
            (.queen, 1), (.rook, 2), (.bishop, 2), (.knight, 2), (.pawn, 8)
        ]
        let capturedColor = capturer.opposite

        var remaining: [PieceType: Int] = [:]
        for rank in 0..<8 {
            for file in 0..<8 {
                if let p = game.board[rank][file], p.color == capturedColor {
                    remaining[p.type, default: 0] += 1
                }
            }
        }

        var result = ""
        for (type, startCount) in startPieces {
            let onBoard = remaining[type, default: 0]
            let captured = startCount - onBoard
            if captured > 0 {
                let piece = ChessPiece(type: type, color: capturedColor)
                result += String(repeating: piece.symbol, count: captured)
            }
        }
        return result
    }
}

struct GameView_Previews: PreviewProvider {
    static var previews: some View {
        GameView()
    }
}
