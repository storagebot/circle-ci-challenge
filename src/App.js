import React, { Component } from 'react';
import './App.css';

class Label extends React.Component {
  render() {
    return (
      <div className='label'>The current number is: {this.props.updValue}.</div>
    )
  }
}

class Button extends React.Component {
  handleClick() {
    this.props.passClick();
  }

  render() {
    return (
      <button className='button' onClick={() => this.handleClick()}>Increment</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
      <Label updValue={this.state.count} />
      <Button passClick={() => this.increment()} />
      </div>
    )
  }
}

export default App;
export { Label, Button };
