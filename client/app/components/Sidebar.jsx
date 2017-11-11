import React from 'react';

import { 
  RefinementList,
  Panel,
} from 'react-instantsearch/dom';

import { Col } from 'react-bootstrap';

import styles from './Sidebar.scss';

const Sidebar = (props) => (
	<Col sm={3} md={4} sm={5} xsHidden className={styles.side}>
	  <div className={styles.sidebar}>
	  	<h1>{props.title}</h1>
	  	{props.children}
	  	<a className={styles.link} href={props.link}><h1>{props.linkTitle}</h1></a>
	  </div>
	</Col>
);

export default Sidebar;

