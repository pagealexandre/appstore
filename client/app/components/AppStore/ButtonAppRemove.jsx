import React from 'react';

import styles from '../../assets/styles/components/ButtonAppRemove.scss';

export default class ButtonAppRemove extends React.Component {

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
     <div className={styles.hitRemoveButton}>
        <a href='#' onClick={this.props.deleteFunc}>
          <span className="glyphicon glyphicon-remove"></span>
        </a>
     </div>
    );
  }  
};

ButtonAppRemove.propTypes = {  
  deleteFunc: React.PropTypes.func.isRequired,
};
