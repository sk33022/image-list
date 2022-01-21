import './App.css';
import axios from 'axios';
import SearchInput from './Components/SearchInput';
import { ImageList } from './Components/ImageList';
import React, { Component } from 'react';

export default class App extends Component {
  state = { images: []}
   onSearchSubmit  = async (entry) =>  {
    // console.log(entry)
   const response = await axios.get(`https://pixabay.com/api/?key=25343307-9486792e9b27e053caa765de0&q=${entry}&image_type=photo`)
  // console.log(response.data.hits)
  // console.log(this)
  this.setState({images: response.data.hits })
  }
  render() {
    return   <div className="ui container"  style={{marginTop: '30px'}}>
    <SearchInput onSearchSubmit={this.onSearchSubmit} />
    <ImageList images={this.state.images} />
  {/* <p>we have {this.state.images.length}</p> */}
   </div>;
  }
}




