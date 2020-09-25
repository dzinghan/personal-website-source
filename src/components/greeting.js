import React from 'react';
import '../App.css';

class Greeting extends React.Component {
    render() {
        return (
            <div className="greeting">
                <div id="hello">
                    Hi, I'm Jing Han!
                </div>
                <p>Welcome to my page!</p>

            </div>
        )
    }
}

export default Greeting;