import LocalFileMissionRepository from "../Infrastructure/LocalFileMissionRepository";

class GetMainMissions
{
    execute()
    {
        const repo = new LocalFileMissionRepository('./../Data/missions.json');
        return repo.getAllMissions();
    }
}

export default GetMainMissions;