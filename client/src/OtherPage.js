import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Some other page &nbsp; &nbsp;
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
