import LocalFileObjectiveRepository from "../Infrastructure/LocalFileObjectiveRepository";

class GetSecondaryObjectives
{
    static async execute() {
        const repo = new LocalFileObjectiveRepository()
        return repo.getByType('secondary');
    }
}

export default GetSecondaryObjectives;