import { Factory } from '../Infrastructure/Factory';

class GetMainMissions
{
    static async execute()
    {
        const repo = Factory.newMissionRepository();
        return await repo.getAllMissions().then( missions => {
            return missions
        });
    }
}

export default GetMainMissions;
