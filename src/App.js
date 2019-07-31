import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list'
import Search from './components/Search'
import './App.css';

 class App extends Component {
     constructor(){
         super()
         this.state = {
            monsters: [],
            searchField: ''
         }
     }

     componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
             .then(users => this.setState({monsters: users}))
     }


     handleSearch = (input) => {
         this.setState({searchField: input})
     }

     render() {
     //destructuring
     const { monsters, searchField } =  this.state
     // User input matches the data if the input is existing in the array
     const filteredMonster = monsters.filter(monster => (
         //So our search field will not to be Case sensitive
        monster.name.toLowerCase().includes(searchField.toLowerCase())
     ))
       return (
           <div className='App'>
               <h1>Monster Rolodex</h1>
                <Search searching={(input) => this.handleSearch(input)} />
               <CardList monsters={filteredMonster}/>
           </div>

       )
   }
}

export default App
