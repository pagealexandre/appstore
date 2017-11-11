import React, { PropTypes } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Content from './Content.jsx';
import Sidebar from './Sidebar.jsx';

import styles from './search.scss';

import { 
  InstantSearch,
  Configure,
  SearchBox,
  RefinementList,
} from 'react-instantsearch/dom';

export default class Search extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */ 
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { title: this.props.title };
  }

  render() {
    return (
      <Grid fluid={true}>
       <InstantSearch
          appId="PYPITZ0454"
          apiKey="e12b6940425d4aa3b0ebf8fefc4ccb09"
          indexName="App_development"
        >
          <Row className={styles.rowEqHeight}>
              <Col sm={3} md={4} sm={5} xsHidden className={styles.custo + ' ' + styles.full1}>
                <Sidebar/>
              </Col>
              <Col sm={9} md={8} sm={7} xs={12} className={styles.custo2}>
                <Row>
                  <Col sm={12} className={styles.custo3 + ' ' + styles.full3}>
                    <SearchBox translations={{placeholder: 'Search for your app'}} />
                  </Col>
                  <Col sm={12} className={styles.custo4 + ' ' + styles.full2} >
                    <Content/>
                  </Col>
                </Row>
              </Col>
          </Row>

        <Configure hitsPerPage={5} />
        </InstantSearch>

      </Grid>


    );
  }
}

