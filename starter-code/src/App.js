import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  state = {
    fiveContacts: contacts.slice(0, 5)
    //randomContact: contacts[Math.floor(Math.random()*contacts.length)]
  }

  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    // console.log(this.state.randomContact)
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th><img src={eachContact.pictureUrl} alt={eachContact.name}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
          <th><button onClick={() => this.deleteContact(index)}>Delete</button></th>
        </tr>
      )
    })
  }
  //adds a random actor to the initial array
  addActor = () => {
    let randomActor = Math.floor(Math.random()*contacts.length) // finds a random contact
    let randomActorArray = [...this.state.fiveContacts]; // cloned initial array
    randomActorArray.push(contacts[randomActor]); // adds random actor to cloned array
    console.log(randomActorArray);
    this.setState({
      fiveContacts:randomActorArray // replaces fiveContacts array with randomActorArray
    })
  }

  sortAlphabetically = () => {
    const newArray = [...this.state.fiveContacts];
    newArray.sort((a,b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
    console.log(newArray);
    this.setState({
      fiveContacts: newArray
    })
  }

  sortNumerically = () => {
    const popArray = [...this.state.fiveContacts];
    popArray.sort((a,b) => {
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
    });
    console.log(popArray);
    this.setState({
      fiveContacts: popArray
    })
  }

  deleteContact = (i) => {
    let newArray = [...this.state.fiveContacts];
    newArray.splice(i,1);
    this.setState({
      fiveContacts: newArray
    })
  }


  
  render() {
    return (
      <div className="App">
        <h1>Table</h1>
        <button onClick={() => this.addActor()}>Add Random Actor</button>
        <button onClick={() => this.sortAlphabetically()}>Sort Alphabetically</button>
        <button onClick={() => this.sortNumerically()}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.showFiveContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;