import React from "react";
import GetMainMissions from "../../Core/Application/GetMainMissions";

class MissionSelector extends React.Component
{
    constructor()
    {
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

    render() {
        console.log(this.state)
        if (this.state.loading) {
            return (
                <div><i className='loading-icon'></i><span>Loading missions ...</span></div>
            )
        }
        return (
            <div>
                <select type="select">
                { this.state.missions.map((el, i) => {
                    return (<option value={el.mainObjective()} key={i}>{el.name()}</option>)
                })}
                </select>
            </div>
        )
    }
}

export default MissionSelector;