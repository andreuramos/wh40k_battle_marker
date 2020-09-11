import React from "react";

class CompletedMission extends React.Component
{
    render() {
        return (
            <div className="completed-mission">
                <div className="completed-mission-name">{this.props.mission.name()}</div>
                <div className="completed-mission-points">{this.props.mission.points()}</div>
            </div>
        )
    }
}

export default CompletedMission;