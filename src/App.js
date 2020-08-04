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
      console.log(fetchedData.data);
        this.setState({
          data: fetchedData.data,
        });
  }

  render() {

    return (
      <div>
        <button onClick={() => this.getAPIResult()}>Click Me</button>
        { 
          this.state.data !== null && (this.state.data).map( (user,key) => {
            return <Cards id={key} resultArray = {user} />
          })
        }
        {/* { 
          this.state.data !== null && (this.state.data).map( (user,key) => {
              return <li id={key}>{user.title}</li>
          })
        } */}
      </div>
    );
  }

};

export default App;
