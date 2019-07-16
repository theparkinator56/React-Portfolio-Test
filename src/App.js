import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main } from './Main'
import { Contact } from './Contact'
import { Layout } from './layout'
import { NoMatch } from './NoMatch'


const App = () => {

  return (
    
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Github' />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>

    
  )
}


export default App;
