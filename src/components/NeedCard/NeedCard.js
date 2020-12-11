import React from 'react';
import './NeedCard.css';

const NeedCard = ({ need }) => {

    const { name, bgColor, img, color } = need;

    return (
        <div className="col-md-4">
            <div className="w-100 p-5 need-card" style={{ backgroundColor: bgColor, color: color }}>
                <div className="text-center">
                    <img src={img} className="img-fluid" alt="" /><br /><br />
                </div>
                <h3>{name}</h3><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti magnam aliquam ratione atque harum eligendi sapiente! Laborum, repellat sint.</p>
            </div>
        </div>
    );
};

export default NeedCard;