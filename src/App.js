import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Greeting from './components/greeting';
import Description from './components/description';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
        return (
            <div className="App">
                <Navbar />

                <Greeting />

                <Description />

                <Projects />

                <Contact />
            </div>
        );
}

export default App;
