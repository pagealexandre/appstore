import React, { PropTypes } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import AppForm from '../AppForm/Form.jsx';

import './Home.scss';

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
        <Row>
          <Col xs={4} className='menu'>
            <h1>Add an Application to the Store</h1>
            <a href='/search'><h1>Go to the AppStore</h1></a>
          </Col>
          <Col xs={6} xsOffset={1}>
              <AppForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}
