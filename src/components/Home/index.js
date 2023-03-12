import {Component} from 'react'
import './index.css'

export default class Home extends Component {
  state = {isLogin: true}

  onClick = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const UserStatus = isLogin ? 'Please Login' : 'Welcome User'
    const LoginOrLogOut = isLogin ? 'Login' : 'Logout'

    return (
      <div className="container">
        <h1>{UserStatus}</h1>
        <button type="button" onClick={this.Onclick}>
          {LoginOrLogOut}
        </button>
      </div>
    )
  }
}
