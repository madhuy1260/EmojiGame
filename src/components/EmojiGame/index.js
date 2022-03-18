/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameProgress: false, scored: 0, topScore: 0,clickedEmojis:[]}

  getEmojiCardDisplay = () => {
    const {emojisList} = this.props

    return (
      <ul className="ulContainer">
        {emojisList.map(each => (
          <EmojiCard
            emojiDetails={each}
            key={each.id}
            EmojiClickCountScore={this.EmojiClickCountScore}
          />
        ))}
      </ul>
    )
  }

  EmojiClickCountScore = id =>{
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    if (clickedEmojis.include(id)) {
        
    }
  }

  playAgainClick = () => {
    this.setState({isGameProgress: true})
  }

  getWinLoseCardDisplay = () => {
    const {scored} = this.state

    return (
      <div>
        <WinOrLoseCard score={scored} playAgainClick={this.playAgainClick} />
      </div>
    )
  }

  render() {
    const {isGameProgress, scored, topScore} = this.state
    return (
      <div className="bg">
        <NavBar
          scored={scored}
          topScore={topScore}
          isGameProgress={isGameProgress}
        />
        <div className="bottomPart">
          {isGameProgress
            ? this.getEmojiCardDisplay()
            : this.getWinLoseCardDisplay()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
