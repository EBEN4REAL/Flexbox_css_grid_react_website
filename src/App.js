import React, { Component } from 'react';
import './assets/css/main.css';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            {this.props.children}
        </Layout>
      </div>
    );
  }
}

export default App;
