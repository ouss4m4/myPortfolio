import React from 'react';
import '../styles/contact.css'

const socialMedia = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/bz.oussama'

    },
    {
        name: 'github',
        link: 'https://github.com/ouss4m4'
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/0uss4m4'
    },
    {
        name: 'google-plus',
        link: 'https://plus.google.com/+OussamaAmassuo'
    }
]
const Contact = () => {
    return (
        <section id='Contact' >
            <div className="socialWrap">
                <h1 id='contactLead' >I am available for hire. Let's talk </h1>
                <h3 id='email'><i className='fa fa-envelope'></i> Bz.oussama@gmail.com</h3>
                <div className='socialItems'>
                    {socialMedia.map((s,i) => <a key={i} href={s.link}><i className={`fa fa-${s.name}`} ></i> </a> )}
                </div>
            </div>
        </section>
    );
};

export default Contact;