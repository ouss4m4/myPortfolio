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
        desc: 'Dr Performance, a start up that offers awesome cars tunning, but they could not reach majority of clients, and a facebook page was not enough to show the services they have, until they decided to go for a website ! and it is now skyrocketing !'
    },
    {
        project: 'SnapShot',
        thumbnail: work2,
        link: 'mern-app.herokuapp.com',
        desc: 'SnapShot ! you woke up this morning, took a very nice picture, now you want to share it, just not on instagram , snapShot is your GO! show it to other amateurs or pros , get a review or maybe a smiley is all you need'
    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog thirsty excellent peevishly far less compulsively some inventoried the darn erroneous much upon thus and smart in that well much to goodness dragonfly '
    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog thirsty excellent peevishly far less compulsively some inventoried the darn erroneous much upon thus and smart in that well much to goodness dragonfly '
    
    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog thirsty excellent peevishly far less compulsively some inventoried the darn erroneous much upon thus and smart in that well much to goodness dragonfly '
    
    },
    {
        project: 'PlaceHolder',
        thumbnail: work3,
        link: '#',
        desc: 'The guffawed far less wow then this or bucolically chose save groundhog thirsty excellent peevishly far less compulsively some inventoried the darn erroneous much upon thus and smart in that well much to goodness dragonfly '
    
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
                   {work.map(p =>
                    <div className="workSingle">
                        <a href={p.link} >
                            <div className="workImg">
                                <img src={p.thumbnail} alt=""/>
                            </div>
                            <div className="desc">
                                <p>{p.desc}</p>
                            </div>
                        </a>
                    </div>)}
                </div>    
            </div>
        </section>
    );
};

export default Work;