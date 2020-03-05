import React from 'react';
import { Route } from 'react-router-dom';
import Index from "./Pages/Index";
import Train from "./Pages/Train";
import Depot from "./Pages/Depot";
import Railway from "./Pages/Railway";
import Photo from "./Pages/Photo";
import Model from "./Pages/Model";
import Cookies from 'js-cookie';
import TrainPixHeader from "./Elements/TrainPixElements/TrainPixHeader";
import Author from "./Pages/Author";
import Text from "./Elements/Text";
import Builder from "./Pages/Builder";

function App() {
  return (
      <div className={(Cookies.get("dark")==="true")?"dark":""}>
          <TrainPixHeader/>
          <Route path="/" component={Index} exact/>
          <Route path='/train/:id' component={Train}/>
          <Route path='/depot/:id' component={Depot}/>
          <Route path='/photo/:id' component={Photo}/>
          <Route path='/railway/:id' component={Railway}/>
          <Route path='/model/:id' component={Model}/>
          <Route path='/author/:id' component={Author}/>
          <Route path='/builder/:id' component={Builder}/>
          <div className="line-grey">
              <Text type="Inline" value="Site by hevav. 2020"/>
          </div>
      </div>
  );
}

export default App;
