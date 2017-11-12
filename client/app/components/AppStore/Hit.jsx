import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { Highlight } from 'react-instantsearch/dom';

import styles from '../../assets/styles/components/Hit.scss';

import ButtonAppRemove from './ButtonAppRemove.jsx';

export default class Hit extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      hit: props.hit,
      renderHit: true,
    }

    this.delete = this.delete.bind(this);
  }

  delete(event) {
    event.preventDefault();
    fetch('/api/v1/apps/' + this.state.hit.objectID, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    this.setState ({
      renderHit: false,
    });

  }

  render() {
    const render = this.state.renderHit;
    
    return (
      render ? (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className={styles.hit}>
          <div className={styles.hitHead}>
            <div className={styles.hitImage}>
              <img src={this.state.hit.image}/>
            </div>
            <div className={styles.hitName}>
              <Highlight attributeName="name" hit={this.state.hit}/>
            </div>
            <ButtonAppRemove deleteFunc={this.delete}/>
          </div>
          <div className="hit-content">
            <div className={styles.hitRating}>
              {this.state.hit.rating}/5
            </div>
            <div className={styles.hitPrice}>
              ${this.state.hit.price}
            </div>
          </div>        
        </div>
      </Col> )
      : null

    );
  }
}

