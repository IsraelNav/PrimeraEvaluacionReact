import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/hompage/homepage.component";
import Characters from "./pages/characters/characters.component";

// Component
import Header from "./components/header/header.component";

// Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: "",
    };
  }

  unsubscribeFromAuth = null;

  // Ciclos de vida
  // ciclo de vida: montado
  componentDidMount() {
  }

  
  // ciclo de vida: desmontado
  componentWillUnmount() {
  }

  render() {
    return (
 
      <div >
         <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/characters" component={Characters} /> 
        </Switch>
 

      </div>
 
    );
  }
}

export default App;
