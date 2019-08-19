import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags found</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // constructor(){
  //   super();
  //   this.handleIncrement=this.handleIncrement.bind(this);
  // }
  handleIncrement = count => {
    //this.state.count++;
    console.log(count);
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={()=>this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a tag"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
