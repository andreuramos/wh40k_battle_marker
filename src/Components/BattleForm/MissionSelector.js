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
        const missions = await GetMainMissions.execute()
        this.setState({missions: missions, loading: false});
    }

    render() {
        if (this.state.loading) {
            return (
                <div><i className='loading-icon'></i><span>Loading missions ...</span></div>
            )
        }
        return (
            <div>
                <select type="select">
                { this.state.missions.map(el => {
                    return (<option value={el.key()}>{el.name()}</option>)
                })}
                </select>
            </div>
        )
    }
}

export default MissionSelector;