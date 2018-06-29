import React from 'react';
import LastestPost from './lastestPost';
import Series from './series';
import NewInShop from './newInShop';

const Body = () => {
  return(
    <div className="body">
      <LastestPost />
      <Series />
      <NewInShop />
    </div>
  );
}

export default Body;
