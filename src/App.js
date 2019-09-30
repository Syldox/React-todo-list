import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {Route, Switch, Redirect} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
// import { register } from './serviceWorker';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import NotFound from "./components/notFound";


function App() {
  return (
   <React.Fragment>
      <NavBar/>
      <main className="container">
          <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/tasks" component={Tasks}/>
          <Route path="/not-found" component={NotFound}/>
          {/* <Route path="/" component={Home}/>  */}
          <Redirect from="/" exact to="tasks "/>
          <Redirect to="not-found"/>
        </Switch>
      </main>
   </React.Fragment>
     
  );
}

export default App;
 