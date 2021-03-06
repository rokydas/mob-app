import React from 'react';
import './NeedCard.css';

const NeedCard = ({ need }) => {

    const { name, bgColor, img, color, tellColor } = need;
    const tell = 'Tell me more >';

    return (
        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="w-100 need-card" style={{ backgroundColor: bgColor, color: color }}>
                <div className="text-center">
                    <img src={img} className="img-fluid" alt="" /><br /><br />
                </div>
                <h3>{name}</h3><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti magnam aliquam ratione atque harum eligendi sapiente! Laborum, repellat sint.</p><br />
                <h5 style={{ color: tellColor }}><u>{tell}</u></h5>
            </div>
        </div>
    );
};

export default NeedCard;