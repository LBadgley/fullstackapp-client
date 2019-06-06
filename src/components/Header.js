import React from 'react';
import { connect } from 'react-redux';

export function Header() {
  return (
    <>
      <h1>Photomaton Photo Service</h1>
    </>
  );
}

export default connect(
  null,
)(Header);
