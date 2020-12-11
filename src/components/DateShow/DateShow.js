import React from 'react';
import './DateShow.css';

const DateShow = ({date}) => {
    return (
        <div className="mt-3">
            <span className="date-show">{date}</span>
        </div>
    );
};

export default DateShow;