import React, { PropTypes } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Content from './Content.jsx';
import Sidebar from '../Sidebar.jsx';

import styles from '../../assets/styles/components/AppStore.scss';
import '../../assets/styles/components/Theme.scss';

import { 
  InstantSearch,
  SearchBox,
  RefinementList,
  Panel,
  Configure,
} from 'react-instantsearch/dom';

export default class AppStore extends React.Component {

  static propTypes = {
    appId: PropTypes.string.isRequired, // this is passed from the Rails view
    searchOnlyApiKey: PropTypes.string.isRequired,
    env: PropTypes.string.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = {
      appId: props.appId,
      searchOnlyApiKey: props.searchOnlyApiKey,
      rubyEnv: props.env
    }
  }

  render() {
    return (
      <Grid fluid={true}>
       <InstantSearch
          appId={this.state.appId}
          apiKey={this.state.searchOnlyApiKey}
          indexName={"App_" + this.state.rubyEnv}
        >
          <Row className="display-flex">
              <Sidebar title={'AppStore'} linkTitle={'Add an App'} link={'/admin'}>
                <Panel title="Genres">
                  <RefinementList attributeName="genres"/>
                </Panel>
              </Sidebar>
              <Col sm={9} md={8} sm={7} xs={12}>
                <Row className={styles.grey} >
                  <Col sm={12}>
                    <SearchBox translations={{placeholder: 'Search for your app'}} />
                  </Col>
                  <Col sm={12}>
                    <Content env={this.state.rubyEnv}/>
                  </Col>
                </Row>
              </Col>
          </Row> 

        </InstantSearch>

      </Grid>

    );
  }
}

