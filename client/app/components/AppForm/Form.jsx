import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

import Checkbox from './Checkbox.jsx';
import SingleInput from './SingleInput.jsx';

import { error } from './Form.scss';

function validate(appName, rating, price, selectedGenres, link, image) {
  // true means invalid, so our conditions got reversed
  var Urlregex = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
  var imageRegex = RegExp(/^(https?:\/\/.*\.(?:png|jpg))$/)

  return {
    appName: appName.length === 0,
    rating: rating < 0 || rating > 5 || rating === '',
    price: price < 0 || price === '',
    selectedGenres: selectedGenres.length === 0,
    link: !link.match(Urlregex),
    image: !image.match(imageRegex),
  };
}

export default class AppForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    // Testing purpose
    // this.state = {
    //    appName: 'Candy Crush',
    //    rating: 1.99,
    //    price: 4.5,
    //    genres: ['Utilities', 'Entertainment', 'Arcade', 'Puzzle', 'Games', 'Action'],
    //    selectedGenres: ['Arcade'],
    //    link: 'http://kent.ac.uk',
    //    image: 'http://kent.ac.uk/image.jpg',
    // };
    this.state = {
       appName: '',
       rating: '',
       price: '',
       genres: ['Utilities', 'Entertainment', 'Arcade', 'Puzzle', 'Games', 'Action'],
       selectedGenres: ['Arcade'],
       link: '',
       image: '',
       touched: {
        appName: false,
        rating: false,
        price: false,
        link: false,
        image: false,
       },
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

    this.setState({ selectedGenres: newSelectionArray });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
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
    const errors = validate(this.state.appName, this.state.rating,
                            this.state.price, this.state.selectedGenres,
                            this.state.link, this.state.image);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <SingleInput inputType={'text'} title={'Name:'} name={shouldMarkError('appName') ? error : ''}  content={this.state.appName} 
        controlFunc={this.handleNameChange} onBlurFunc={this.handleBlur('appName')}/>

        <SingleInput inputType={'number'} title={'Rating:'} name={shouldMarkError('rating') ? error : ''} content={this.state.rating}
         controlFunc={this.handleRatingChange} onBlurFunc={this.handleBlur('rating')} />


        <SingleInput inputType={'number'} title={'Pricing:'} name={shouldMarkError('price') ? error : ''} content={this.state.price}
         controlFunc={this.handlePriceChange} onBlurFunc={this.handleBlur('price')}/>
      
        <Checkbox title={'Genres: '} setName={errors.selectedGenres ? 'error' : ''}  type={'checkbox'} 
        controlFunc={this.handleGenreSelection} onBlurFunc={this.handleBlur('appName')} options={this.state.genres} 
        selectedOptions={this.state.selectedGenres} />

        <SingleInput inputType={'text'} title={'Link:'} name={shouldMarkError('link') ? error : ''} content={this.state.link}
         controlFunc={this.handleLinkChange} onBlurFunc={this.handleBlur('link')} />

        <SingleInput inputType={'text'} title={'Image:'} name={shouldMarkError('image') ? error : ''} content={this.state.image}
         controlFunc={this.handleImageChange} onBlurFunc={this.handleBlur('image')}/>

        <Button bsStyle="primary" disabled={isDisabled} type="submit">Submit</Button>

      </form>
    );
  }
}
