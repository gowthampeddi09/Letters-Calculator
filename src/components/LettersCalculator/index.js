// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  /* countLetters = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  } */

  countLetters = event => {
    const input = event.target.value
    this.setState({count: input.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="letters-calculator-container">
          <div className="letters-count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="instruction" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              id="phrase"
              type="text"
              placeholder="Enter the phrase"
              className="input-phrase"
              onChange={this.countLetters}
            />
            <div className="no-of-letters-container">
              <p>No.of letters: {count}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
