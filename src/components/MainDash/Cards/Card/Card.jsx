import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        'No World'
      ) : (
        <CompactCard params={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ params, setExpanded }) {
  const Png = params.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: params.color.background,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${params.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

export default Card;
