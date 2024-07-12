import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { FormProvider } from './FormProvider';
import PropertyListing from './components/PropertyListing'
import Save from './components/Save'
import FormPreview from './components/preview';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = () => {
  return (

    //Combining everything in FormProvider so that the form data is acessed by every component.
    <FormProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Homepage /></Route>
          <Route path="/Homepage"><Homepage /></Route>
          <Route path="/PropertyListing"><PropertyListing /></Route>
          <Route path="/Save"><Save /></Route>
          <Route path="/Preview"><FormPreview /></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </FormProvider>
  );
}

export default App;
