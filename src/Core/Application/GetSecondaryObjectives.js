import LocalFileObjectiveRepository from "../Infrastructure/LocalFileObjectiveRepository";

class GetSecondaryObjectives
{
    static async execute() {
        const repo = new LocalFileObjectiveRepository()
        return repo.getByType('secondary').filter((item) => {
            if (item.category() !== "main" && item.category() !== "Secundaria Sugerida") {
                return true;
            }
            return false;
        });
    }
}

export default GetSecondaryObjectives;