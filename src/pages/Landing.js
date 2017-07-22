import React from 'react';
import avatar from '../images/avatar.jpg';
import '../styles/landing.css';

const Landing = () => {
    return (
        <section id='Landing'>
            <div className="container">
                <div className="landing">
                    <div className="landing-text text-center">
                        <h1> AmassuO</h1>
                        <h3>IDEAS WORTH CODING !!</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;