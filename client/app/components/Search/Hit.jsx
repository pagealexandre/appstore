import React from 'react';

import { Row, Col } from 'react-bootstrap';

import styles from './Hit.scss';

import { 
  Highlight
} from 'react-instantsearch/dom';

const Hit = ({hit}) => (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className={styles.hit}>
          <div className={styles.hitHead}>
            <div className={styles.hitImage}>
              <img src={hit.image}/>
            </div>
            <div className={styles.hitName}>
              <Highlight attributeName="name" hit={hit}/>
            </div>
            </div>
          <div className="hit-content">
            <div className={styles.hitRating}>
              {hit.rating}/5
            </div>
            <div className={styles.hitPrice}>
              ${hit.price}
            </div>
          </div>        
        </div>
      </Col>
);

export default Hit; 
