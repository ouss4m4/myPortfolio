import React from 'react';
import Paper from 'material-ui/Paper';
import avatar from '../images/avatar.jpg';
import '../styles/about.css'

const AboutMe = () => {
    return (
        <section id='About'>
            <div className="container">
                <Paper zDepth={4} style={{minHeight: '90vh'}}>
                    <div>
                        <div className="avatar-wrap">
                            <img src={avatar} className="img-circle" alt="avatar" width='220px' height='220px' />
                        </div>
                        <div className="blurb">
                            <p>Hi.my name is Ouss. i am a web developer, i build awesome websites, just like the one you want, be it a PRODUCT you need to boost sales, an IDEA that needs to see the light, a CAUSE to fight for, or even a portfolio to get you started. the internet has it all, and with my help you are one step closer to success</p>
                        </div>
                        <div className="blurbLink">
                            <p ><i className='fa fa-arrow-down'></i> Check for yourself !</p> <p>or contact me so we can talk ! <i className='fa fa-arrow-down'></i></p>
                        </div>
                    </div>
                </Paper>
            </div>
        </section >
    );
};

export default AboutMe;
