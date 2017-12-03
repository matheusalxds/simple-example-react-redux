import React,  { PureComponent } from 'react'; //eslint-disable-line
import { connect } from 'react-redux';  //eslint-disable-line
import { bindActionCreators } from 'redux'; //eslint-disable-line
import { changeValue } from './fieldActions';

class Field extends PureComponent {
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
          onChange={this.props.changeValue}
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

function mapToDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapToDispatchToProps)(Field);
