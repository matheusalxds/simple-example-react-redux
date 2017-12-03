import React,  { Component } from 'react'; //eslint-disable-line
import { connect } from 'react-redux';  //eslint-disable-line

class Field extends Component {

  render() {
    return (
      <div>
        <div>
          <label> {this.props.label} </label>
        </div>
        <div>
          <label> {this.props.value} </label>
        </div>
        <input
          onChange={this.handleChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value,
  };
}

export default connect(mapStateToProps)(Field);
