React Notes Day 2

- State
  - data attached to a component - knows about itself per instance
  - instance is a unique occurance of some component
  - class based components have to use a constructor function to declare state
- Prop Review
  - a container (object) that holds data passed from parent to child
- Sneaky Trick to change a parent value in a child aka a function

  - react data flows down hill, parents give children data, but children can't give parents data
  - giving the child a function that does some behavior that gives parent info

- event handling
  - start with "onClick"
