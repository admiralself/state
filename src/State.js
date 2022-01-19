import React, { Component } from 'react'
import myImage from "../src/img.jpg"

class State extends Component {



  constructor() {
    super()
    this.state = {
      Person: {
        fullName: "Taher Kamoun",
        bio: "I just love Football",
        imgSrc: myImage,
        profession: "Ariana"
      },
      show: false
    }
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };


  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} style={{
              width: "200px",
              height: "200px"
            }} alt="Taher"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>View Profile</button>

      </>
    )
  }
}

export default State
