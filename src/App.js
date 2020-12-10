// IMPORT REACT 
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// IMPORT CSS 
import './App.css';

// IMPORT PAGES 
import ContactPage from './Pages/ContactPage';
import PorfolioPage from './Pages/PortfolioPage';
import Home from './Pages/Home';

// IMPORT COMPONENTS 
import Skills from './componets/skills';
import About from './componets/about';
import Footer from './componets/footer';
import NavBar from './componets/navBar';

class App extends Component {
render() {
  return (
    <Router>
      <div className="App">

        <NavBar /> 

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/portfolio" component={PorfolioPage}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/about" component={About}/>
        </Switch>

        <Footer />

      </div>
    </Router>
    );
  }
}

export default App;
