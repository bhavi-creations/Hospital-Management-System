import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 



function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
 
      </Switch>
    </Suspense>
  </Router>
  );
}
 

export default App;
// src/App.js


 