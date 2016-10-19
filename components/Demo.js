import React from 'react';
import {Link} from 'react-router';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <h3>Too Real!</h3>
        <Link to='/vince'>Norfside Long Beach</Link>
        <Link to='/staples'>Lift Me Up</Link>
      </div>
    );
  }
};

