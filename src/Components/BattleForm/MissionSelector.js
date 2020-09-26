import React from "react";

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