import React from "react";
import CompletedMission from "./CompletedMission";
import "./CompletedMissionList.css";

class CompletedMissionList extends React.Component
{
    render() {
        return (
            <div className="mission-list">
                {this.props.missions.map((mission, i) => {
                    return (<CompletedMission mission={mission} key={i} />)
                })}
            </div>
        )
    }
}

export default CompletedMissionList;