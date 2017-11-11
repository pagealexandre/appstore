import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

import Checkbox from './Checkbox.jsx';
import SingleInput from './SingleInput.jsx';

import styles from './AppForm.scss';

export default class AppForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
       appName: '',
       rating: '',
       price: '',
       genres: ['Utilities', 'Entertainment', 'Arcade', 'Puzzle', 'Games', 'Action'],
       selectedGenres: ['Utilities'],
       link: '',
       image: '',
       touched: {
        appName: false,
        rating: false,
        selectedGenres: false,
        price: false,
        link: false,
        image: false,
       },
       errorMessage: {
        appName: "Name's length must be inferior to 36 characters",
        rating: "Rating must be bewteen 0 and 5",
        price: 'price must be superior to 0',
        link: 'You must provide a valid url',
        selectedGenres: 'You must at least select one object',
        image: 'You must provide a valid url containing an image',
       }

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ appName: event.target.value });
  }

  handleLinkChange(event) {
    this.setState({ link: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ image: event.target.value });
  }

  handleGenreSelection(event) {
    const newSelection = event.target.value;
    let   newSelectionArray;

    if(this.state.selectedGenres.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedGenres.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.selectedGenres, newSelection];
    }

    this.setState({ selectedGenres: newSelectionArray, touched: { selectedGenres: true } });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  validate() {
  
    var Urlregex = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
    var imageRegex = RegExp(/^(https?:\/\/.*\.(?:png|jpg))$/)

    return {
      appName: this.state.appName.length === 0 || this.state.appName.length > 36,
      rating: this.state.rating < 0 || this.state.rating > 5 || this.state.rating === '',
      price: this.state.price < 0 || this.state.price === '',
      selectedGenres: this.state.selectedGenres.length === 0,
      link: !this.state.link.match(Urlregex),
      image: !this.state.image.match(imageRegex),
    };
}

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/v1/apps', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: this.state.appName,
          price: this.state.price,
          rating: this.state.rating,
          link: this.state.link,
          image: this.state.image,
          genres: '{' + this.state.selectedGenres.toString() + '}',
      })
    }).then(function(response){
      console.log(response);
    })

  }

  render() {
    const errors = this.validate()
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      console.log(this.state.touched['selectedGenres']);
      return hasError ? shouldShow : false;

    };

    const displayError = (error) => {
      return (
        <div className="alert alert-warning">
          <strong>Warning!</strong> {error}
        </div>
      );
    };

    return (
      <form className={styles.appForm} onSubmit={this.handleSubmit}>
        <SingleInput inputType={'text'} title={'Name:'} content={this.state.appName}  controlFunc={this.handleNameChange} 
        onBlurFunc={this.handleBlur('appName')}/> 
        { shouldMarkError('appName') ? displayError(this.state.errorMessage.appName) : ''}

        <SingleInput inputType={'number'} title={'Rating:'} content={this.state.rating} controlFunc={this.handleRatingChange}
         onBlurFunc={this.handleBlur('rating')} />
        { shouldMarkError('rating') ? displayError(this.state.errorMessage.rating) : ''}


        <SingleInput inputType={'number'} title={'Pricing:'} content={this.state.price} controlFunc={this.handlePriceChange}
         onBlurFunc={this.handleBlur('price')}/> 
        { shouldMarkError('price') ? displayError(this.state.errorMessage.price) : ''}
      
        <Checkbox title={'Genres: '} setName={errors.selectedGenres ? styles.error : ''}  type={'checkbox'} 
        controlFunc={this.handleGenreSelection} options={this.state.genres}
        selectedOptions={this.state.selectedGenres} /><br />

        { shouldMarkError('selectedGenres') ? displayError(this.state.errorMessage.selectedGenres) : ''}

        <SingleInput inputType={'text'} title={'Link:'} content={this.state.link} controlFunc={this.handleLinkChange}
         onBlurFunc={this.handleBlur('link')} />
        { shouldMarkError('link') ? displayError(this.state.errorMessage.link) : ''}

        <SingleInput inputType={'text'} title={'Image:'} content={this.state.image} controlFunc={this.handleImageChange}
         onBlurFunc={this.handleBlur('image')}/>
        { shouldMarkError('link') ? displayError(this.state.errorMessage.image) : ''}

        <Button bsStyle="primary" disabled={isDisabled} type="submit">Submit</Button>

      </form>
    );
  }
}
