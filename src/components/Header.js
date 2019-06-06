import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <>
      
    </>
  );
}

Header.propTypes = {
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
};

// export default connect(
//   null,
//   mapDispatchToProps
// )(Header);
