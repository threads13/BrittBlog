import React from 'react';
import Picture from './picture';
import './pictures.css';


const Pictures = () => {
  return(
    <div className="pictures">
      <Picture className="picture" />
      <Picture className="picture" />
      <Picture className="picture" />
    </div>
  );
}

export default Pictures;
