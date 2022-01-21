import React, { Component } from 'react';

export default class SearchInput extends Component {
    // onInputChange(event) {
    //    console.log( event.target.value)
    // }
    state = { entry: ''}

    onFormSubmit = (event) => {  //arrow function automatically bind
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
     }
  render() {
    return <div className='ui segment'>
       <form action='' onSubmit={this.onFormSubmit} className='ui form'>
           <div className='field'>
               <div className='ui massive icon inpuy'>
               
               <input 
               type='text' 
               placeholder='Search..'
                // onChange={this.onInputChange} //onChange..onClick..etc event
                // onChange={(event) =>console.log( event.target.value) }
                onChange={(event) =>this.setState({entry : event.target.value}) }
                value={this.state.entry}
                />
               <i className='search icon'></i>
               </div>
           </div>
       </form>
    </div>;
  }
}
