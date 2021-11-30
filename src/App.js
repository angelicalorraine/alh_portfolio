import './App.css';
import Body from './components/Body';
import About from './components/About';
import Project from './components/Project';
import Resume from "./components/Resume";
import Top from './components/Top';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Top />
       
        <Switch>
          <Route exact path='/alh_portfolio' component={Body} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/resume' component={Resume} />

          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
        {/* <Body /> */}
        <Footer />
      </>
    </Router>
    // <Container fluid className="App">

    //   <Body />
    //   <Footer />
    // </Container>

  );
}

export default App;
