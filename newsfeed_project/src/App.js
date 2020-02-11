import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
} from "react-router-dom";
import Header from './Components/Core/Header';
import Navigation from './Components/Core/Navigation';
import Nature from './Components/Nature/Nature';
import Health from './Components/Health/Health';
import Sport from './Components/Sport/Sport';
import Travel from './Components/Travel/Travel';
import Tech from './Components/Tech/Tech';
import Science from './Components/Science/Science';
import Education from './Components/Education/Education';
import News from './Components/News/News';
import SideDrawer from './Components/Core/SideDrawer/SideDrawer';
import Backdrop from './Components/Core/Backdrop/Backdrop';

import '../src/App.scss';


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render () {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div style={{height: '100%'}}>
      <Header drawerClickHandler={this.drawerToggleClickHandler}/>
      <Navigation />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <News />

      <Router>
        <Switch>
          <Route path="/nature" component={Nature} />
          <Route path="/health" component={Health} />
          <Route path="/sport" component={Sport} />
          <Route path="/travel" component={Travel} />
          <Route path="/tech" component={Tech} />
          <Route path="/science" component={Science} />
          <Route path="/education" component={Education} />
        </Switch> 
      </Router>
      </div>
    );
  }
}

export default App;
