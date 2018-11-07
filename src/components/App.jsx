import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  const appStyles = {
    background: 'linear-gradient(to right, skyblue, yellow, lime, maroon, springgreen, royalblue, maroon, hotpink, skyblue)',
    height: '100%',
    padding: '3rem'
  };
  return(
    <div style={appStyles}>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <Body
        image="http://www.nicolefouche.com/wp-content/uploads/2015/03/sadness-3-1217902-1599x2132-e1480431311979-979x1024.jpg"
        caption="May the sainted child bless your struggles, for they shall be neverending..."/>
    </div>
  );
}

export default App;
