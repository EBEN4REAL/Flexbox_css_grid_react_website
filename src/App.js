import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import './assets/css/main.css';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            Hello
        </Layout>
      </div>
    );
  }
}

export default App;
