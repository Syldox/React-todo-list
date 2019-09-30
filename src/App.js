import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Route, Switch} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { register } from './serviceWorker';
import NavBar from './components/NavBar';
// import Home from './components/Home';


function App() {
  return (
    <div className="container">
      <NavBar/>
      <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/tasks" component={Tasks}/>
      {/* <Route path="/" component={Home}/>  */}
      </Switch>
    </div>
  );
}

export default App;
 