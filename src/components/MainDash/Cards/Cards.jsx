import React from 'react';
import './Cards.css';
import { cardsData } from '../../../Data/Data';
import Card from './Card/Card';

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              serries={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
