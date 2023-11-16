import React from 'react';
import SearchBar from './SearchBar';

const Nav = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <SearchBar onSearch={(characterID) => window.alert(characterID)}
      />
    </div>
  );
};

export default Nav;
