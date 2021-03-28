import { MissionRepository } from "../Infrastructure/MissionRepository";
import { MissionReader } from '../Infrastructure/MisionReader';
import { ObjectiveReader } from '../Infrastructure/ObjectiveReader';
import { ObjectiveRepository } from '../Infrastructure/ObjectiveRepository';

class GetMainMissions
{
    static async execute()
    {
        const repo = new MissionRepository(new MissionReader(), new ObjectiveRepository(new ObjectiveReader()));
        return await repo.getAllMissions().then( missions => {
            return missions
        });
    }
}

export default GetMainMissions;
