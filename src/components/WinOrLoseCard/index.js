// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {scored, playAgainClick} = props
  const imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const imgText = 'win'
  return (
    <div className="resultPage">
      <div className="result">
        <h1 className="winLose">You Won</h1>
        <p className="score">
          Best Score
          <br /> <span className="finalScore">{scored}/12</span>
        </p>
        <button className="playAgain" type="button" onClick={playAgainClick}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt={imgText} className="resultImage" />
    </div>
  )
}
export default WinOrLoseCard
