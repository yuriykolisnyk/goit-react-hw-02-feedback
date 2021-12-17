import React from 'react';

class Feedback extends React.Component {
  handleIncrement() {
    console.log('click add');
  }

  render() {
    return (
      <div>
        <span>0</span>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Add 1
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('click delete');
            }}
          >
            Delete 1
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
