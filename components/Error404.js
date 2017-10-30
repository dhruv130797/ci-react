import React, { Component } from 'react';
import StickyNav from '../components/StickyNav';
import Title from '../components/Title';

class Error404 extends Component {

  render() {
    return (
      <main>
        <StickyNav />
        <div className="container">
          <div className="section">
            <div className="row">
              <h4>This is wrong</h4>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Error404;
