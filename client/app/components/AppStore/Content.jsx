import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { 
  Pagination,
  Stats,
  SortBy,
  Hits,
  Highlight,
} from 'react-instantsearch/dom';

import styles from './Content.scss';

import Hit from './Hit.jsx';

const Content = () => (
 <div className="content">
    <Row>
      <div className="info">
        <Col sm={12} className={styles.stats}>
          <Stats/>
          <SortBy
            defaultRefinement="App_development"
            items={[
                {value: 'App_development', label: 'Most relevant'},
                {value: 'App_development_price_asc', label: 'Lowest Price'},
                {value: 'App_development_price_desc', label: 'Highest Price'}
            ]}
          />
        </Col>
      </div>
    </Row>
    <Row>
      <Col xs={12} className={styles.marge}>
        <Hits hitComponent={Hit}/>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <div className="pagination">
          <Pagination showLast/>
        </div>
      </Col>
    </Row>

 </div>
 );

 
export default Content; 

