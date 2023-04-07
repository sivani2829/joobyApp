import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Home from './Home'
import Jobs from './Jobs'
import LoginForm from './LoginForm'
import ProtectedRoute from './ProtectedRoute'
import JobItemDetails from './JobItemDetails'

import NotFound from './NotFound'
// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
