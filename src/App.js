import React from 'react';
import './App.css';

import NotiBar from './components/noti-bar';
import NewOrders from './components/new-orders';
import Orders from './components/order-list';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NotiBar/>
      <NewOrders/>
      <Orders/>
    </div>
  );
}

export default App;
