import React, { Component } from 'react';

import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Upload Image Project</h1>
            <form>
               <div className="form-group">
                  <label htmlFor="image">Upload image: </label>
                  <input type="file" id="image" name="image" accept="image/*" />
               </div>
            </form>
         </div>
      );
   }
}

export default App;
