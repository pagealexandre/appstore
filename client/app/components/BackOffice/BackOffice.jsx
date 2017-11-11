import React, { PropTypes } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import AppForm from '../AppForm/AppForm.jsx';
import Sidebar from '../Sidebar.jsx';

import styles from './BackOffice.scss';

export default class BackOffice extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row className={"display-flex " + styles.grey} >
          <Sidebar title={'Add an Application'} linkTitle={'AppStore'} link={'/'}></Sidebar>
          <Col xs={6} xsOffset={1}>
              <AppForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}
