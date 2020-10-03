import LocalFileObjectiveRepository from "../Infrastructure/LocalFileObjectiveRepository";

class GetObjectiveByKey
{
    static async execute(key)
    {
        const repo = new LocalFileObjectiveRepository()
        return await repo.findByKey(key);
    }
}

export default GetObjectiveByKey;