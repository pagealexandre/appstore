import React from 'react';
import styles from '../assets/styles/components/AppForm.scss';

const Checkbox = (props) => (  
  <div>
    <label className={styles.title}>{props.title}</label>
    <div className={styles.checkBoxGroup}>
      {props.options.map(opt => {
        return (
          <label key={opt} className="capitalize">
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={ props.selectedOptions.indexOf(opt) > -1 }
              type='checkbox' /> {opt}
          </label>
        );
      })}
    </div>
  </div>
);

Checkbox.propTypes = {  
  title: React.PropTypes.string.isRequired,
  setName: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOptions: React.PropTypes.array,
  controlFunc: React.PropTypes.func.isRequired,
};

export default Checkbox; 