import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  state = {
    fiveContacts: contacts.slice(0, 5),
    randomContact: contacts[Math.floor(Math.random()*contacts.length)]
  }

  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    console.log(this.state.randomContact)
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th><img src={eachContact.pictureUrl} alt={eachContact.name}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
        </tr>
      )
  })
  }


  // addRandom = (i) => {
  //   console.log('delete ', i)
  //   let addRandom = [...this.state.randomContact]
  //   newAnimalList.splice(i,1)
  //   this.setState({
  //     animals:newAnimalList
  //   })

  // }
  
  render() {
    return (
      <div className="App">
        <h1>Table</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
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