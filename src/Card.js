import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    console.log("re init card", this.props.status);
    let className = ["Card"];
    if (this.props.status === "backlog") {
      className.push("Card-grey");
    } else if (this.props.status === "in-progress") {
      className.push("Card-blue");
    } else if (this.props.status === "complete") {
      className.push("Card-green");
    }
    return (
      <div
        draggable="true"
        className={className.join(" ")}
        data-id={this.props.id}
        data-status={this.props.status}
        onDragStart={(event) => {
          event.dataTransfer.setData("id", this.props.id);
          event.dataTransfer.setData("status", this.props.status);
          event.dataTransfer.setData("name", this.props.name);
          event.dataTransfer.setData("desciption", this.props.desciption);
          event.dataTransfer.effectAllowed = "move";
        }}
      >
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}
