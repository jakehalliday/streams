import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate/StreamCreate.component';
import StreamEdit from './Streams/StreamEdit/StreamEdit.component';
import StreamDelete from './Streams/StreamDelete/StreamDelete.component';
import StreamList from './Streams/StreamList/StreamList.component';
import StreamShow from './Streams/StreamShow/StreamShow.component';
import Header from './Header/Header.component';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/:id' exact component={StreamShow} />
          <Route path='/' exact component={StreamList} />

          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
