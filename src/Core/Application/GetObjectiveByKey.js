import { Factory } from '../Infrastructure/Factory';

class GetObjectiveByKey
{
    static async execute(key)
    {
        const repo = Factory.newMissionRepository();
        return await repo.findByKey(key);
    }
}

export default GetObjectiveByKey;