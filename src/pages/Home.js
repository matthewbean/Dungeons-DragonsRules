import React, { Component } from 'react';
import Search from '../modules/Search';
import Results from '../modules/Results';
const axios = require('axios');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      type: null,
      loading: false,
    };
  }

  search = async (search, type) => {
    search = search.toLowerCase();
    try {
      let res = await axios.get(`http://www.dnd5eapi.co${search}`);
      //fetch new results and set loading to false
      this.setState({
        ...this.state,
        result: res.data,
        loading: false,
        type: type,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
      this.setState({
        ...this.state,
        type: 'not-found',
        result: null,
      });
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  render() {
    return (
      <div>
        <Search search={this.search} setType={this.setType} />
        <div className='main'>
          {this.state.type && (
            <Results
              search={this.search}
              result={this.state.result}
              type={this.state.type}
            />
          )}
        </div>
      </div>
    );
  }
}
