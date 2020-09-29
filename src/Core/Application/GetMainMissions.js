import LocalFileMissionRepository from "../Infrastructure/LocalFileMissionRepository";

class GetMainMissions
{
    static async execute()
    {
        const repo = new LocalFileMissionRepository();
        return await repo.getAllMissions().then( missions => {
            return missions
        });
    }
}

export default GetMainMissions;