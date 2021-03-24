import MissionBuilder from "../Domain/MissionBuilder";

export default class MissionRepository
{
    DEFAULT_DATA_PATH = './../../Data/missions.json';

    async getAllMissions()
    {
        let missions = []

        let data = require(this.DEFAULT_DATA_PATH)

        data.forEach(element => {
            const mission = MissionBuilder.fromJson(element)
            missions.push(mission);
        })
        return missions;
    }
}
