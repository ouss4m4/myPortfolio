import React from 'react';
import work1 from '../images/work1.png'
import work2 from '../images/work2.jpg'
import work3 from '../images/work3.jpg'
import '../styles/work.css'

const work = [
    {
        project: 'DR PERFORMANCE',
        thumbnail: work1,
        link: 'dr-performance.herokuapp.com',
        desc: 'Dr Performance, a single page portfolio to boost sales'
    },
    {
        project: 'SnapShot',
        thumbnail: work2,
        link: 'mern-app.herokuapp.com',
        desc: 'SnapShot ! a single page app to show your pictures, with authentification'
    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog '
    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog '

    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog '

    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog '

    }
]
const Work = () => {
    return (
        <section id='Work'>
            <div className='container'>
                <div className="workLead">
                    <h1 className="info">Here is some of my work !</h1>
                </div>
                <div className="workGrid">
                    {work.map((p, i) =>
                        <div key={i} className="workSingle">
                            <a href={`http://${p.link}`} target='_blank' rel='noopener noreferrer' >
                                <div className="workImg">
                                    <img src={p.thumbnail} alt="" />
                                </div>
                            </a>
                            <div className="desc">
                                <p>{p.desc}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
    );
};

export default Work;