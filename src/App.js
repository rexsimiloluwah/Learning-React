import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import ArtistDetails from './components/ArtistComponent'
import './App.css';
import {artists} from './data/artists'



class App extends Component {

  // Declaring the constructor for the state 
  constructor(props){
    super(props);

    this.state = {
      artists: artists
    }
  }

  render() {
    
    return (
    <div>
      <Navbar dark color = "primary">
        <div clasName = "container">
          <NavbarBrand href = "/">Music Hub</NavbarBrand>
        </div>

      </Navbar>

      <ArtistDetails  artists = {this.state.artists} />
    </div>
  );

    }
}

export default App;
