import React, { PropTypes } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import styles from './search.scss';

import { 
  InstantSearch,
  Configure,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
  RefinementList,
} from 'react-instantsearch/dom';

import './style.scss';


const Hit = ({hit}) =>
  <div className="hit">
    <div className="hit-image">
      <img src={hit.image}/>
    </div>
    <div className="hit-content">
      <div className="hit-price">
        ${hit.price}
      </div>
    </div>
    <div className="hit-content">
      <div className="hit-rating">
        {hit.rating}/5
      </div>
    </div>    
    <div className="hit-name">
      <Highlight attributeName="name" hit={hit}/>
    </div>
  </div>


const Sidebar = () => 
  <div className="sidebar">
    <h5>Genres</h5>
    <RefinementList attributeName="genres" withSearchBox/>
  </div>

const Content = () =>
 <div className="content">
    <div className="info">
      <Stats/>
      <SortBy
        defaultRefinement="App_development"
        items={[
            {value: 'App_development', label: 'Most relevant'},
            {value: 'App_development_price_asc', label: 'Lowest Price'},
            {value: 'App_development_price_desc', label: 'Highest Price'}
        ]}
      />
    </div>
    <Hits hitComponent={Hit}/>
    <div className="pagination">
      <Pagination showLast/>
    </div>
 </div>

export default class Search extends React.Component {
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
       <InstantSearch
          appId="PYPITZ0454"
          apiKey="e12b6940425d4aa3b0ebf8fefc4ccb09"
          indexName="App_development"
        >
          <Row className={styles.rowEqHeight}>
              <Col sm={4} xsHidden className={styles.custo + ' ' + styles.full1}>
                App Store
                <Sidebar/>
              </Col>
              <Col sm={8} xs={12} className={styles.custo2}>
                <Row>
                  <Col sm={12} className={styles.custo3 + ' ' + styles.full3}>
                    <SearchBox translations={{placeholder: 'Search for your app'}} />
                  </Col>
                  <Col sm={12} className={styles.custo4 + ' ' + styles.full2} >
                    <Content/>
                  </Col>
                </Row>
              </Col>
          </Row>

        <Configure hitsPerPage={5} />
        </InstantSearch>

      </Grid>


    );
  }
}

