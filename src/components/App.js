import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const items = [
  {
    id: 1,
    todo: 'Do nothing',
    status: false,
  },
  {
    id: 2,
    todo: 'Nothing',
    status: false,
  },
];

class App extends Component {
  state = { MODE: '', items, query: '' };

  onModeChange = (mode) => {
    this.setState({ MODE: mode });
  };

  onSearch = (query) => {
    this.setState({ query });
  };

  addToList(data) {
    const id = this.state.items.length + 1;
    const newData = { ...data, id };
    const newItem = [...this.state.items, newData];
    this.setState({ items: newItem });
  }

  onSubmitTodo = (data) => {
    const item = { todo: data, status: false };
    this.addToList(item);
  };

  onClickTodo = (id) => {
    const i = this.state.items.findIndex((item) => item.id === id);
    const items = [...this.state.items];
    const item = { ...items[i] };
    item.status = !item.status;
    items[i] = item;
    this.setState({ items });
  };

  realData = () => {
    if (this.state.query !== '') {
      const data = [...this.state.items];
      return data.filter((item) => {
        const str = item.todo.toLocaleLowerCase();
        return str.indexOf(this.state.query.trim().toLocaleLowerCase()) !== -1;
      });
    }
    return this.state.items;
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='card todolist'>
            <Header
              MODE={this.state.MODE}
              query={this.state.query}
              onSubmitTodo={this.onSubmitTodo}
              onSearch={this.onSearch}
            />
            <Body items={this.realData()} onClickTodo={this.onClickTodo} />
            <Footer onModeChange={this.onModeChange} MODE={this.state.MODE} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
