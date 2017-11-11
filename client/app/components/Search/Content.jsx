import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { 
  Pagination,
  Stats,
  SortBy,
  Hits,
  Highlight,
} from 'react-instantsearch/dom';

import Hit from './Hit.jsx';

const Content = () => (
 <div className="content">
    <div className="info">
    <Row>
      <Col sm={12}>
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
      </Row>
    </div>
    <Row>
      <Col sm={12}>
        <Hits hitComponent={Hit}/>
      </Col>
    </Row>
    <div className="pagination">
      <Pagination showLast/>
    </div>
 </div>
 );

 
export default Content; 

