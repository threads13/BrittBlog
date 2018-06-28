import React from 'react';
import Picture from './picture';


const Pictures = () => {
  return(
    <div style={{textAlign: 'center'}} className="pictures">
      <Picture className="picture" />
      <Picture className="picture" />
      <Picture className="picture" />
    </div>
  );
}

export default Pictures;
