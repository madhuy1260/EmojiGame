// Write your code here.
import './index.css'

const NavBar = props => {
  const {scored, topScore} = props
  return (
    <nav className="navItem">
      <div className="leftPart">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logoName">Emoji Game</h1>
      </div>
      <div className="rightPart">
        <p className="scorePart">Score: {scored} </p>
        <p className="scorePart">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
