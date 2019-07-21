import React from 'react';

class Example extends React.Component {
  state = {
    counter: 0,
  };

  handlePlus = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  handleMinus = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>Class Component</h2>
        <h3>
          Current Counter
          {counter}
        </h3>

        <button type="button" onClick={this.handlePlus}>
          Tambah (+)
        </button>
        <button type="button" onClick={this.handleMinus}>
          Kurang (-)
        </button>
      </div>
    );
  }
}

export default Example;
