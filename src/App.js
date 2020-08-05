import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: null,
  }

  async getAPIResult(){
      const fetchedData = await fetchData();
      const output = fetchedData.data.reduce((result, value) => { 
        result[value.userId] = result[value.userId] || []; 
        result[value.userId].push({ title: value.title, isCompleted: value.completed });
        return result; 
      }, {});
      console.log(typeof(output));
      console.log(output);
        this.setState({
          data: output,
        });
  }

  render() {

    return (
      <div>
          <button onClick={() => this.getAPIResult()}>Click Me</button>
          {/* { 
            this.state.data !== null && (this.state.data).map( (user,key) => {
                return <li id={key}>{user}</li>
            })
          } */}
          {/* <Cards resultArray = {this.state.data}/> */}
          { this.state.data !== null && Object.keys(this.state.data).map( (key,value) => {
              return <Cards id={key} resultArray = {this.state.data[key]} userID = {key} /> 
          })}
      </div>
    );
  }

};

export default App;
