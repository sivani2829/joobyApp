import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', showsubmit: false}

  onChangeUserInput = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  failure = msg => {
    this.setState({
      showsubmit: true,
      errorMsg: msg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.failure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showsubmit, username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      ;<Redirect to="/" />
    }
    return (
      <div className="main-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-cls"
          />
          <label htmlFor="name">USERNAME</label>
          <br />
          <input
            type="text"
            id="name"
            value={username}
            placeholder="username"
            onChange={this.onChangeUserInput}
          />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={this.onChangePassword}
          />
          <br />
          <button type="submit" className="login-button">
            Login
          </button>
          {showsubmit && <p className="err-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
