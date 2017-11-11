import React, { PropTypes } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import AppForm from '../AppForm/AppForm.jsx';
import Sidebar from '../Sidebar.jsx';

import styles from './Home.scss';

export default class Home extends React.Component {
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
        <Row className={"display-flex " + styles.grey} >
          <Sidebar title={'Add an Application'} linkTitle={'AppStore'} link={'/search'}>
          </Sidebar>
          <Col xs={6} xsOffset={1}>
              <AppForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}
