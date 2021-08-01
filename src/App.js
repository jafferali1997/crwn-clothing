import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(Props) {
    super(Props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render(){
    return <div>
      <Header currentUser={this.state.currentUser} /> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>;
  }
  
}

export default App;
