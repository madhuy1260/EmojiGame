// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, EmojiClickCountScore} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    EmojiClickCountScore(id)
  }

  return (
    <li className="listItem">
      <button
        className="button"
        type="button"
        testid="button"
        onClick={onClickEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
