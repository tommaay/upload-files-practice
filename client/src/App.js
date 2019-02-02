import React, { Component } from 'react';

import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Upload Image Project</h1>
            <form>
               <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" name="title" required />

                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" name="price" required />

                  <label htmlFor="label">Label</label>
                  <input type="text" id="label" name="label" required />

                  <label htmlFor="image">Upload image: </label>
                  <input
                     type="file"
                     id="image"
                     name="image"
                     accept="image/*"
                     required
                  />
               </div>

               <button>Upload</button>
            </form>
         </div>
      );
   }
}

export default App;
