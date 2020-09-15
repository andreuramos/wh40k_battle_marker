import React from "react";
import Button from "../../Common/Button";
import Modal from "../../Common/Modal";
import "./MissionBoard.css";
import MissionForm from "./MissionForm";
import CompletedMissionList from "./CompletedMissionList";

class MissionBoard extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player,
            showMissionModal: false,
            completedMissions: [],
            onMissionCompleted: this.props.onMissionCompleted
        }

    }

    openMissionModal = () => {
        this.setState({
            showMissionModal: true
        })
    }

    closeMissionModal = () => {
        this.setState({
            showMissionModal: false
        })
    }

    onMissionSubmit = (mission) => {
        this.setState({showMissionModal: false})
        if (this.props.onAddMission) {
            this.props.onAddMission(mission)
        }
    }

    render() {
        return (
            <div className="mission-board">
                <div className="mission-board-header">
                    <Button onClick={this.openMissionModal} text="Complete Mission" type="secondary-button"/>
                </div>
                <div className="mission-board-body">
                    <CompletedMissionList missions={this.state.player.completedMissions()} />
                </div>

                <Modal show={this.state.showMissionModal} title="Add a completed mission" onClose={this.closeMissionModal}>
                    <MissionForm
                        onSubmit={this.onMissionSubmit}
                        round={this.props.round}
                    />
                </Modal>
            </div>
        )
    }
}

export default MissionBoard;