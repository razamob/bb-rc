import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import data from './bb-rc'

// const [eachOutput, setEachOutput] = useState(data)
// const state = {
//   }

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: data,
      searchfield: ''
    }
  }

  onSearchChange = event =>{
    //console.log(this.state.data)
    //console.log(event.target.value);
    this.setState({searchfield: event.target.value})
    console.log(event.target.value);
  }

render(){
  const filteredData = this.state.data.map(events => {
    return events.filter(oneEvent => {
     // console.log(oneEvent.title.toLowerCase())
       return oneEvent.title.toLowerCase().includes(this.state.searchfield)
    })
  })
  // this.setState({data: filteredData})
  console.log(filteredData);

  return ( 
    <div>
    <SearchBar searchChange={this.onSearchChange}/>
    <Result data={filteredData} />
    </div>
  );
}
}

export default App;