import Mission from "../Domain/Mission";

class LocalFileMissionRepository
{
    data_file_path: string;
    cached_missions: string;

    constructor(data_path)
    {
        this.data_file_path = data_path;
        this.cached_missions = [];
    }

    getAllMissions()
    {
        let missions = []
        const data = require(this.data_file_path);
        data.forEach(element => {
            const mission = new Mission(
                element['name'],
                element['main_objective'],
                element['suggested_scondary_objective'],
                element['pack'],
                element['battle_size']
            );
            missions.push(mission);
        })

        return missions;
    }
}

export default LocalFileMissionRepository;