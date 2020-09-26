import LocalFileMissionRepository from "../Infrastructure/LocalFileMissionRepository";

class GetMainMissions
{
    static async execute()
    {
        const repo = new LocalFileMissionRepository('./../Data/missions.json');
        return repo.getAllMissions();
    }
}

export default GetMainMissions;