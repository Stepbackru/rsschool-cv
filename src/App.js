import React, { Component } from 'react';
import './style.css';
import LeftSideHeader from './components/leftSideHeader/leftSideHeader';
import AboutMe from './components/aboutMe/aboutMe';

class App extends Component {

  render() {
    return (
    <div className="cv">
      <aside className="leftSide leftSide__isActive">
        <LeftSideHeader />
        <AboutMe />
      </aside>
      <main className="main">
        {/* test */}
      </main>
    </div>
    )    
  }
}
export default App;
