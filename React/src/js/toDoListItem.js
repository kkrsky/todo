import React, { Component } from "react";
import "../css/toDoListItem.css";

class ToDoListItem extends Component {
  render() {
    const { title, description, ...props } = this.props;
    console.log(this.props);
    //console.log(props);

    return (
      <div className="ToDoListItem" {...props}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListItem;
