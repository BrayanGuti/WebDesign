import "./componentes/ChessBoard.js"
import "./componentes/ChessCells.js"
import "./componentes/ChessPieces.js"




const chessBoard = document.querySelector("chess-board");

// Llamar a una función putPiece en chessBoard
// chessBoard.putPiece();


chessBoard.renderPieces("wk", "a1")
chessBoard.renderPieces("bp", "a3")
chessBoard.renderPieces("bq", "h1")
// chessBoard.renderPieces("wn", "d4")

// chessBoard.renderPieces("bp", "h2")
// chessBoard.renderPieces("wp", "g1")