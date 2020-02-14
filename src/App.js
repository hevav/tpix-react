import React from 'react';
import { Route } from 'react-router-dom';
import Index from "./Pages/Index";
import Train from "./Pages/Train";
import Depot from "./Pages/Depot";
import Railway from "./Pages/Railway";
import Photo from "./Pages/Photo";
import Model from "./Pages/Model";

function App() {
  return (
      <div>
          <Route path="/" component={Index} exact/>
          <Route path='/train/:number' component={Train}/>
          <Route path='/depot/:number' component={Depot}/>
          <Route path='/photo/:number' component={Photo}/>
          <Route path='/railway/:number' component={Railway}/>
          <Route path='/model/:number' component={Model}/>
      </div>
  );
}

export default App;
