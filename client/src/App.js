import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
   state = {
      title: '',
      price: null,
      label: '',
      image: '',
      selectedFile: null,
   };

   changeHandler = e => {
      e.preventDefault();
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   fileHandler = e => {
      this.setState({ selectedFile: e.target.files[0] });
   };

   uploadImg = e => {
      e.preventDefault();

      const fd = new FormData();
      fd.append('image', this.state.selectedFile);

      axios
         .post('https://use-my-tech-stuff.herokuapp.com/api/items/upload', fd)
         .then(res => {
            console.log('res', res);
            this.setState({ image: res.data.image });
         })
         .catch(err => console.log(err));
   };

   render() {
      return (
         <div className="App">
            <h1>Upload Image Project</h1>
            <form method="/POST" encType="multipart/form-data">
               <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                     type="text"
                     id="title"
                     name="title"
                     onChange={this.changeHandler}
                     required
                  />

                  <label htmlFor="price">Price</label>
                  <input
                     type="number"
                     id="price"
                     name="price"
                     onChange={this.changeHandler}
                     required
                  />

                  <label htmlFor="label">Label</label>
                  <input
                     type="text"
                     id="label"
                     name="label"
                     onChange={this.changeHandler}
                     required
                  />

                  <label htmlFor="image">Upload image: </label>
                  <input
                     onChange={this.fileHandler}
                     type="file"
                     id="image"
                     name="image"
                     accept="image/*"
                     required
                  />
                  <button onClick={this.uploadImg}>Upload</button>
               </div>

               <button>Submit</button>
            </form>
         </div>
      );
   }
}

export default App;
