import React from "react";
import { Component } from "react";
import "./App.css";
import CharacterCard from "./CharacterCard";

class App extends Component {

  state = {
    loading: true,
   data: {
      info: {},
      results: []
    },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
  
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
      const data = await response.json();
      //console.log(data)
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(
            this.state.data.results, 
            data.results
          )
        },
        nextPage: this.state.nextPage + 1
      });
      
    } catch (error) {
      this.setState({ 
        loading: false, 
});
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome <span>Rick and Morty</span> characters:</h1>
        <div className="App">
          <ul className="row">
            {this.state.data.results.map((character, index) => (
              <li className="col-6 col-md-3" key={index}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>

          {this.state.loading && (
            <p>Loading...</p>
          )}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.fetchCharacters()}> See more caracters</button>
          )}
        </div>
      </div>
    );
  }
}
export default App;




// import { Component } from 'react';
// import './App.css';

// class App extends Component{

//   state={
//     person:null   
//   }

//   async componentDidMount(){
//     const url= "https://rickandmortyapi.com/api/character";
//     const response= await fetch(url);
//     const data= await response.json();
//     this.setState({person: data.results[0]})
//     console.log(data.results)
//   }
//   render(){
//     return(
//       <div>

//         {!this.state.person ? <p>Loading...</p> :      
//         <div className='App'>
//           <p>Name: {this.state.person.name} </p>
//           <p>Gender: {this.state.person.gender}</p>
//           <img src={this.state.person.image} alt= "foto" width="150px"/> 
//         </div>
//         }
      

//       </div>
//     )
//   }
// }

// export default App;


