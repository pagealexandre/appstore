import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

import Checkbox from './Checkbox.jsx';
import SingleInput from './SingleInput.jsx';

export default class AppForm extends React.Component {

  constructor(props, _railsContext) {
    super(props);

    this.state = {
       appName: '',
       rating: '',
       price: 0,
       genres: ['Utilities', 'Entertainment', 'Arcade', 'Puzzle', 'Games', 'Action'],
       link: '',
       image: '',
       selectedGenres: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
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

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
       appName: '',
       rating: '',
       price: 0,
       value: '',
       link: '',
       image: '',
       selectedGenres: [],
       errors: {
          name: false,
          email: true,
       },
    })
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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SingleInput inputType={'text'} title={'Name:'} name={'name'} content={this.state.appName} controlFunc={this.handleNameChange} />
        <SingleInput inputType={'text'} title={'Rating:'} name={'rating'} content={this.state.rating} controlFunc={this.handleRatingChange} />
        <SingleInput inputType={'number'} title={'Pricing:'} name={'pricing'} content={this.state.price} controlFunc={this.handlePriceChange} />
      
        <Checkbox title={'Genres: '} setName={'genres'} type={'checkbox'} controlFunc={this.handleGenreSelection} options={this.state.genres}
          selectedOptions={this.state.selectedGenres} />

        <SingleInput inputType={'text'} title={'Link:'} name={'link'} content={this.state.link} controlFunc={this.handleLinkChange} />

        <SingleInput inputType={'text'} title={'Image:'} name={'image'} content={this.state.image} controlFunc={this.handleImageChange} />

        <Button bsStyle="danger" onClick={this.handleClearForm}>Danger</Button>
        <Button bsStyle="primary" type="submit">Submit</Button>

      </form>
    );
  }
}
