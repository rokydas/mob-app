import React from 'react';
import DateShow from '../DateShow/DateShow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const SingleNews = ({ news }) => {

    const { name, date, likeNumber, commentNumber } = news;

    return (
        <div style={{ color: '#556270' }}>
            <div className="col-12">
                <div className="row">
                    <div className="col-md-3">
                        <DateShow date={date} />
                    </div>
                    <div className="col-md-9">
                        <div style={{ paddingRight: '100px' }}>
                            <h1>{name}</h1><br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim non iusto odit vero repellendus voluptate exercitationem labore est ab quisquam.</p><br />
                            <div className="mb-5">
                                <FavoriteIcon /> <span style={{ color: '#4ecdc4', paddingRight: '30px' }}><b>{likeNumber}</b></span>
                                <ChatBubbleIcon /> <span style={{ color: '#4ecdc4' }}><b>{commentNumber}</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;