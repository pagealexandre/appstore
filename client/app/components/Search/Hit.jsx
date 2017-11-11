import React from 'react';

import { 
  Highlight
} from 'react-instantsearch/dom';

const Hit = ({hit}) => (
  <div className="hit">
    <div className="hit-image">
      <img src={hit.image}/>
    </div>
    <div className="hit-content">
      <div className="hit-price">
        ${hit.price}
      </div>
    </div>
    <div className="hit-content">
      <div className="hit-rating">
        {hit.rating}/5
      </div>
    </div>    
    <div className="hit-name">
      <Highlight attributeName="name" hit={hit}/>
    </div>
  </div>
);

export default Hit; 
