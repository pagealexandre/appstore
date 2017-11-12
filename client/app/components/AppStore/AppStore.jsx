import React, { PropTypes } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Content from './Content.jsx';
import Sidebar from '../Sidebar.jsx';

import styles from './AppStore.scss';
import './Theme.scss';

import { 
  InstantSearch,
  SearchBox,
  RefinementList,
  Panel,
  Configure,
} from 'react-instantsearch/dom';

export default class AppStore extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <Grid fluid={true}>
       <InstantSearch
          appId="PYPITZ0454"
          apiKey="e12b6940425d4aa3b0ebf8fefc4ccb09"
          indexName="App_development"
        >
          <Row className="display-flex">
              <Sidebar title={'AppStore'} linkTitle={'Add an App'} link={'/admin'}>
                <Panel title="Genres">
                  <RefinementList attributeName="genres"/>
                </Panel>
              </Sidebar>
              <Col sm={9} md={8} sm={7} xs={12}>
                <Row className={styles.grey} >
                  <Col sm={12}>
                    <SearchBox translations={{placeholder: 'Search for your app'}} />
                  </Col>
                  <Col sm={12}>
                    <Content/>
                  </Col>
                </Row>
              </Col>
          </Row> 

        </InstantSearch>

      </Grid>

    );
  }
}

