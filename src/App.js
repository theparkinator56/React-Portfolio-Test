import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/MainPage/Main';
import { Contact } from './components/Contact';
import { Layout } from './components/layout';
import { NoMatch } from './components/NoMatch';
import { Projects } from './components/projects';


const App = () => {

  return (
    
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/Github' />
            <Route exact path='/Projects' component={Projects}/>
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>

    
  )
};


export default App;
