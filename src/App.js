import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
