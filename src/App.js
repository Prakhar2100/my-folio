import React , {Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch , Route} from 'react-router-dom';
import Profile from './components/ProfileComponent';
import Education from './components/EducationComponent';
import Experience from './components/ExperienceComponent';
import Skills from './components/SkillsComponent';
import Project from './components/ProjectComponent';

class App extends Component {

  render(){
    return (
        <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Main} />
            <Switch>
                <Route path="/profile" component={Profile} />
                <Route exact path="/Education" component={Education} />
                <Route path="/experience" component={Experience} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/project" component={Project} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
