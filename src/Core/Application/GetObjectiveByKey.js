import { ObjectiveRepository } from "../Infrastructure/ObjectiveRepository";
import { ObjectiveReader } from '../Infrastructure/ObjectiveReader';

class GetObjectiveByKey
{
    static async execute(key)
    {
        const repo = new ObjectiveRepository(new ObjectiveReader())
        return await repo.findByKey(key);
    }
}

export default GetObjectiveByKey;