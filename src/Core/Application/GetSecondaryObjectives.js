import { Factory } from '../Infrastructure/Factory';

class GetSecondaryObjectives
{
    static async execute() {
        const repo = Factory.newObjectiveRepository();
        return repo.getByType('secondary').filter((item) => {
            if (item.category() !== "main" && item.category() !== "Secundaria Sugerida") {
                return true;
            }
            return false;
        });
    }
}

export default GetSecondaryObjectives;