import React from 'react';
import '../App.css';
import Resume from "../Resume.pdf";

class Description extends React.Component {
    render() {
        return (
            <section>
                <div className="sections">
                    <div className="title" id="about">
                        About Me
                    </div>
                    <div className="text">
                        <p>
                        I am a first-year undergraduate student in Mathematics and Computer Science at McGill University.
                        Driven by my passion for technology and entrepreneurship, I founded a tutoring organization four years ago.
                        As a female pursuing a career in STEM, I also mentor youth under my organization with a desire to
                        inspire and empower the next generation to discover a passion for STEM, a world of endless opportunities.
                        I love to share my experience and advice not only through mentoring but also through organizing
                        conferences and workshops.
                        For the past four years, I have tutored a wide range of students in math, including preparing them for math competitions.
                        </p>
                        <p>
                        I am a data science and technology enthusiast. I am currently working on some fun personal projects in
                        machine learning and programming in general.
                        Curious about the world around me, I am always looking to learn something new. Apart from that, I love
                        to cook, travel, and meet like-minded people. I am on the lookout for opportunities to challenge
                            myself and make the world a better place!
                        Feel free to look around my page, view my <a href={Resume} target="blank">
                             resume</a>
                            , or contact me below! :)
                        </p>
                    </div>

                </div>
            </section>
        )
    }
}

export default Description;