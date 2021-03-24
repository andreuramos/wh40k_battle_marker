import MissionRepository from "../Infrastructure/MissionRepository";

class GetMainMissions
{
    static async execute()
    {
        const repo = new MissionRepository();
        return await repo.getAllMissions().then( missions => {
            return missions
        });
    }
}

export default GetMainMissions;
