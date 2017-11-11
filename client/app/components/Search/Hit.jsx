import React from 'react';

import { Row, Col } from 'react-bootstrap';

import styles from './search.scss';

import { 
  Highlight
} from 'react-instantsearch/dom';

const Hit = ({hit}) => (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className={styles.hit}>
          <div className="hit-head">
            <div className="hit-image">
              <img src={hit.image}/>
            </div>
            <div className="hit-name">
              <Highlight attributeName="name" hit={hit}/>
            </div>
            </div>
          <div className="hit-content">
            <div className="hit-rating">
              {hit.rating}/5
            </div>
            <div className="hit-price">
              ${hit.price}
            </div>
          </div>        
        </div>
      </Col>
);

export default Hit; 
