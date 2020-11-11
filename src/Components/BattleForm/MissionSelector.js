import React from "react";
import GetMainMissions from "../../Core/Application/GetMainMissions";
import Select from "../Common/Select";
import Button from "../Common/Button";
import './MissionSelector.css';

class MissionSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            missions: [],
            selectedMission: null,
            error: null
        }
    }

    async componentDidMount() {
        this.setState({loading: true});
        GetMainMissions.execute().then(missions => {
            this.setState({missions: missions, loading: false});
        })
    }

    selectMission = (selected_mission_name) => {
        const selected_mission = this.state.missions.find(mission =>  mission.name() === selected_mission_name)
        this.setState({selectedMission: selected_mission, error: null});
    }

    submitForm = () => {
        if (!this.state.selectedMission) {
            this.setState({error: "Debes seleccionar una misión"})
        }

        if (
            this.props.onSubmit &&
            this.state.error === null &&
            this.state.selectedMission !== null
        ) {
            const data = {
                mission: this.state.selectedMission
            };
            this.props.onSubmit(data)
        }
    }

    render() {

        if (this.state.loading) {
            return (
                <div><i className='loading-icon'></i><span>Loading missions ...</span></div>
            )
        }

        let mission_options = this.state.missions.map(e => {
            return {
                value: e.name(),
                text: e.name(),
                optiongroup: e.battleSize()
            };
        })

        return (
            <div>

                <span>Select a mission</span>
                <Select
                    name="mission"
                    onChange={this.selectMission}
                    options={mission_options}
                    group={true}
                    defaultText="Select a Mission"
                />
                {this.state.selectedMission ? <div className="mission-details">
                    <div className='mission-details-row'>
                        <span className='mission-details-title'>Battle Size</span>
                        <span className='mission-details-data'>{this.state.selectedMission.battleSize()}</span>
                    </div>
                    <div className='mission-details-row'>
                        <div className='mission-details-data'
                            dangerouslySetInnerHTML={{__html: this.state.selectedMission.description()}}
                        />
                    </div>
                </div>:null}
                { this.state.error ?
                    <span className='error-message'>{this.state.error}</span> : null
                }


                <div className="navigation-buttons">
                { this.props.onBack ?
                    <Button
                        style={{"width": "30%"}}
                        type='none'
                        id='back-button'
                        onClick={this.props.onBack}
                        text="Back"
                    /> : null
                }
                <Button
                    text="Next"
                    onClick={this.submitForm}
                    id="submit_mission"
                    style={{'width': this.props.onBack ? '70%':'100%'}}
                />
                </div>
            </div>
        )
    }
}

export default MissionSelector;
