import { ObjectiveRepository } from "../Infrastructure/ObjectiveRepository";
import { ObjectiveReader } from '../Infrastructure/ObjectiveReader';

class GetSecondaryObjectives
{
    static async execute() {
        const repo = new ObjectiveRepository(new ObjectiveReader());
        return repo.getByType('secondary').filter((item) => {
            if (item.category() !== "main" && item.category() !== "Secundaria Sugerida") {
                return true;
            }
            return false;
        });
    }
}

export default GetSecondaryObjectives;