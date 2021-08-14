import React from "react";
import Card from "./Card";
import "./Swimlane.css";

export default class Swimlane extends React.Component {
  getName(x) {
    if (x === "Backlog") return "backlog";
    else if (x === "Complete") return "complete";
    else return "inProgress";
  }
  render() {
    const cards = this.props.clients.map((client) => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    });
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div
          className="Swimlane-dragColumn"
          ref={this.props.dragulaRef}
          onDragOver={(event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
          }}
          onDrop={(event) => {
            const id = event.dataTransfer.getData("id");
            const status = event.dataTransfer.getData("status");
            const name = event.dataTransfer.getData("name");
            const description = event.dataTransfer.getData("description");
            this.props.handleDrop(
              id,
              status,
              name,
              description,
              this.props.name
            );
            // console.log(status, id, this.props.name);
          }}
        >
          {cards}
        </div>
      </div>
    );
  }
}
