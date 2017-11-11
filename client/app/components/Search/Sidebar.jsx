import React from 'react';

import { 
  RefinementList,
  Panel,
} from 'react-instantsearch/dom';

import styles from './search.scss';

const Sidebar = () => (
  <div className={styles.sidebar}>
  	<h1>AppStore</h1>
    <Panel title="Genres">
    	<RefinementList attributeName="genres"/>
    </Panel>
  </div>
);

export default Sidebar;
