import React, { Component } from "react";

class Counter extends Component {
  // state = { ///delete
  //   value: this.props.counter.value,
  //   tags: []
  // };

  // constructor() { /// esto sirve para añadir el this a una function child. Con el super()
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = product => { ///delete
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and get data from the server
    }
  }
  componentWillUnmount() {
    console.log("Counter - componentWillUnmount");
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="heading margin-bottom-1rem">There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li className="heading margin-bottom-1rem" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log("props", this.props);
    console.log("counter - rendered - se llama de 2 despues del render padre");

    return (
      <div className="counter">
        {/* {this.props.children} */}
        <span className={this.getClassesTitle()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-big"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-medium btn--red margin-left-2rem"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getClassesTitle() {
    let classes = "heading margin-right-3rem heading--";
    classes += this.props.counter.value === 0 ? "warning" : "small";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/*
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getClassesTitle()}>{this.formatCount()}</span>
        <button className="btn btn-big">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li className="heading margin-bottom-1rem" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  getClassesTitle() {
    let classes = "heading margin-right-3rem heading--";
    classes += this.state.count === 0 ? "warning" : "big-2";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
*/
