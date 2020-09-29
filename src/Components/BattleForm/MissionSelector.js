import React from "react";
import GetMainMissions from "../../Core/Application/GetMainMissions";
import Select from "../Common/Select";
import Button from "../Common/Button";

class MissionSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            missions: [],
            selectedMission: null
        }
    }

    async componentDidMount() {
        this.setState({loading: true});
        GetMainMissions.execute().then(missions => {
            this.setState({missions: missions, loading: false});
        })
    }

    selectMission = (mission) => {
        console.log("mission")
        console.log(mission)
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
                text: e.name()
            };
        })
        mission_options.unshift({
            value: null,
            text: "Select a mission"
        })

        return (
            <div>
                <Select name="mission" onChange={this.selectMission} options={mission_options}></Select>
                <Button text="Start Battle" onClick={this.submitForm}></Button>
            </div>
        )
    }
}

export default MissionSelector;