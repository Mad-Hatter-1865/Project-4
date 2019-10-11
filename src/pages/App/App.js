import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import userService from '../../utils/userService';
import {Route, Switch, Redirect} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CreatePage from '../CreatePage/CreatePage';
import IndexPage from '../IndexPage/IndexPage';
import MyGamesPage from '../MyGamesPage/MyGamesPage';
import ShowPage from '../ShowPage/ShowPage';
import EditPage from '../EditPage/EditPage';
import HomePage from '../HomePage/HomePage';

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
            <div>
              <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout} 
            />
            <HomePage />
            </div>
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
            userService.getUser() ? 
            <div>
              <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout} 
            />
            <IndexPage 
              {...props}
            />
            </div>
            :
            <Redirect to='/login'/>
            
          )} />

          <Route exact path='/mygames' render={props => (
            userService.getUser() ? 
            <div>
            <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout} 
          />
          <MyGamesPage 
            {...props}
          />
          </div>
          :
          <Redirect to='/login'/>
          )}/>

          <Route exact path='/game' render={props => (
            userService.getUser() ? 
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
            :
            <Redirect tp='/login'/>
          )}/>
          
            <Route exact path='/show/:gameid' render={props => (
              userService.getUser() ? 
              <div>
                <NavBar 
                user={this.state.user}
                handleLogout={this.handleLogout} 
                />
                <ShowPage 
                  {...props}
                  user={this.state.user}
                />
              </div>
              :
              <Redirect to='/login'/>
            )}/>

            <Route exact path='/game/:gameid/edit' render={props => (
              userService.getUser() ? 
              <div>
                <NavBar 
                user={this.state.user}
                handleLogout={this.handleLogout} 
                />
                <EditPage
                  {...props}
                  user={this.state.user}
                />
              </div>
              :
              <Redirect tp='/login'/>
            )}/>

        </Switch>
      </div>
    )
  }
}

export default App;
