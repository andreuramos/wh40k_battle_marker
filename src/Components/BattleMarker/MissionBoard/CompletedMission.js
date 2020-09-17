import React from "react";
import "./CompletedMission.css";

class CompletedMission extends React.Component
{
    render() {
        return (
            <div className={this.props.rowId % 2 ? "completed-mission pair-row" : "completed-mission"}>
                <div className="completed-mission-round">{this.props.mission.round()}</div>
                <div className="completed-mission-name">{this.props.mission.name()}</div>
                <div className="completed-mission-points">{this.props.mission.points()}</div>
            </div>
        )
    }
}

export default CompletedMission;