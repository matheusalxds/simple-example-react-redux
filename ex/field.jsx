import React,  { Component } from 'react'; //eslint-disable-line

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <div>
          <label> {this.props.label} </label>
        </div>
        <div>
          <label> {this.state.value} </label>
        </div>
        <input
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
