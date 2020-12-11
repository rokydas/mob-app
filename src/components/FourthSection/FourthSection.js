import React from 'react';
import pic2 from '../../images/pic2.png';
import SingleNews from '../SingleNews/SingleNews';

const FourthSection = () => {

    const allNews = [
        {
            name: 'Turning customers into partners and friends',
            date: '16 Dec 2019',
            likeNumber: 500,
            commentNumber: 300
        },
        {
            name: 'Improving usability to increase satisfaction',
            date: '16 Nov 2019',
            likeNumber: 300,
            commentNumber: 100
        },
        {
            name: 'Using data analysis insight to inform decisions',
            date: '15 Jul 2019',
            likeNumber: 600,
            commentNumber: 200
        }
    ] 

    return (
        <div style={{width: '85%', marginLeft: 'auto'}} className="mb-5">
            <div className="d-flex justify-content-start">
                <div>
                    <h5 style={{ color: '#ff6b6b' }}>Blog</h5><br/>
                    <h1>Latest news</h1><br/>
                    {
                        allNews.map(news => <SingleNews news={news} key={news.name} />)
                    }
                    <button className="custom-btn">Visit the blog</button>
                </div>
                <div>
                    <img src={pic2} style={{width: '100%'}} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FourthSection;