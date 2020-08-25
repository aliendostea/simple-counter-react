import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    console.log("Counters - rendered - se llama de 2 - despues del render padre");

    return (
      <div className="container">        
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4 className="heading heading--medium margin-top-6rem">
              {/* Counter #{counter.id} */}
            </h4>
          </Counter>
        ))}
        <button className="btn btn-medium btn--green" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
