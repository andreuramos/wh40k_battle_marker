import MissionBuilder from "../Domain/MissionBuilder";

class LocalFileMissionRepository
{
    data_file_path: string;
    cached_missions: string;

    constructor(data_path)
    {
        this.data_file_path = data_path;
        this.cached_missions = [];
    }

    async getAllMissions()
    {
        let missions = []

        let data;
        if (this.data_file_path) {
            data = require(this.data_file_path)
        } else {
            data = require('./../../Data/missions.json')
        }

        data.forEach(element => {
            const mission = MissionBuilder.fromJson(element)
            missions.push(mission);
        })
        return missions;
    }
}

export default LocalFileMissionRepository;