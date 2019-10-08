import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import userService from '../../utils/userService';
import {Route, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CreatePage from '../CreatePage/CreatePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout} 
            />
          }/>

          <Route exact path='/signup' render={({ history }) => 
              <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path='/login' render={({history}) => 
              <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
          }/>

          <Route exact path='/index' render={props => (
            <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout} 
            />
          )} />

          <Route exact path='/mygames' render={props => (
            <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout} 
            />
          )}/>

          <Route exact path='/game' render={props => (
            <div>
              <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout} 
            />
              <CreatePage 
              {...props}
              user={this.state.user}
            />
            </div>
          )}/>
          
        </Switch>
      </div>
    )
  }
}

export default App;
