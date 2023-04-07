import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="head-container">
      <ul className="head-container">
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="head-cls"
            />
          </Link>
        </li>
        <li>
          <div className="content">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/jobs">
              <p>Jobs</p>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/login">
            <button className="btn-style" type="button" onClick={onClickLogout}>
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
