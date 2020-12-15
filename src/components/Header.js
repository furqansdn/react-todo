import React, { Component } from 'react';

import InputAdd from './InputAdd';
import InputSearch from './InputSearch';
class Header extends Component {
  renderInput() {
    switch (this.props.MODE) {
      case 'search':
        return (
          <InputSearch
            onSearch={this.props.onSearch}
            query={this.props.query}
          />
        );
      case 'add':
        return <InputAdd onSubmitTodo={this.props.onSubmitTodo} />;
      default:
        return <div>No Input</div>;
    }
  }
  render() {
    return (
      <div className='card-header text-center'>
        <h1>Todo List App</h1>
        {this.renderInput()}
      </div>
    );
  }
}

export default Header;
