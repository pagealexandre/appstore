import React from 'react';
import styles from '../assets/styles/components/AppForm.scss';

const SingleInput = (props) => (  
  <div className="form-group">
    <label className={styles.formLabel}>{props.title}</label>
    <input
      onBlur={props.onBlurFunc}
      className="form-input"
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc} />
  </div>
);

SingleInput.propTypes = {  
  inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
  title: React.PropTypes.string.isRequired,
  controlFunc: React.PropTypes.func.isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  onBlurFunc: React.PropTypes.func.isRequired,
};

export default SingleInput;  
