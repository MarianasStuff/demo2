import React, { Component } from "react";
import Dog from "./Dog.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: [],
      cats: [],
      dogs: [
        { id: 1, name: "Indiana", treat: 1 },
        { id: 2, name: "MJ", treat: 1 },
        { id: 3, name: "Hilde", treat: 1 },
      ],
    };
    // set the base value for the state
    // generally and object with values
    // state is a box here for us to store stuff in
  }
  giveTreat = (name) => {
    // spread opperator later
    const newDogs = this.state.dogs.map((dog) => {
      console.log(dog, "before");
      if (dog.name === name) {
        dog.treat = dog.treat + 1;
      }
      console.log(dog, "after");
      return dog;
    });
    console.log("this is the new state we will be setting: ", newDogs);
    // state can not be changed inline have to use these special setters
    this.setState({ ...this.state, dogs: newDogs });
  };

  render() {
    // anythign you want to log has to be in a function
    // console.log(this.state.counter);
    return (
      <div>
        {this.state.dogs.map((dog) => (
          <Dog
            key={dog.id}
            name={dog.name}
            treat={dog.treat}
            giveTreat={this.giveTreat}
          />
        ))}
      </div>
    );
  }
}
