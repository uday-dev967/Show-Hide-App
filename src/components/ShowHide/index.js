import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstVisible: false, isLastVisible: false}

  renderFirst = () => {
    this.setState(prevState => ({isFirstVisible: !prevState.isFirstVisible}))
  }

  renderLast = () => {
    this.setState(prevState => ({isLastVisible: !prevState.isLastVisible}))
  }

  render() {
    const {isFirstVisible, isLastVisible} = this.state
    let elementFirstName
    let elementLastName
    if (isFirstVisible) {
      elementFirstName = (
        <div className="namebox">
          <p>Joe</p>
        </div>
      )
    }
    if (isLastVisible) {
      elementLastName = (
        <div className="namebox">
          <p>Jonas</p>
        </div>
      )
    }
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="card">
            <button className="button" onClick={this.renderFirst}>
              Show/Hide Firstname
            </button>
            {elementFirstName}
          </div>
          <div className="card">
            <button className="button" onClick={this.renderLast}>
              Show/Hide Lastname
            </button>
            {elementLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
