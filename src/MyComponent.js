import React, { Component } from 'react';

class MyComponent extends Component {
  constructor() {
    super();
    this.msg = "This is my Componet";
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.msg}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default MyComponent;
