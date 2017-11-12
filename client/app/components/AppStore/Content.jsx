import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { 
  Pagination,
  Stats,
  SortBy,
  Hits,
  Highlight,
} from 'react-instantsearch/dom';

import styles from '../../assets/styles/components/Content.scss';

import Hit from './Hit.jsx';

const Content = (props) => (
 <div className={styles.content}>
    <Row>
      <div className="info">
        <Col sm={12} className={styles.stats}>
          <Stats/>
          <SortBy
            defaultRefinement={"App_" + props.env}
            items={[
                {value: 'App_' + props.env, label: 'Most relevant'},
                {value: 'App_price_asc_' + props.env, label: 'Lowest Price'},
                {value: 'App_price_desc_' + props.env, label: 'Highest Price'}
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

