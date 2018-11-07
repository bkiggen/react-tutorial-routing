import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const headerStyles = {
    fontFamily: 'fantasy',
    color: 'tomato',
    background: 'linear-gradient(to right, teal, purple, orange, purple, teal)',
    textAlign: 'center',
    textShadow: '0 2px 3px indigo',
    border: '4px dotted white',
    borderRadius: '1rem'
  };
  return (
    <div style={headerStyles}>
      <style jsx>{`
          div Link {
            color: hotpink !important;
          }
          `}</style>
      <h1>Help Queueueueueue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
