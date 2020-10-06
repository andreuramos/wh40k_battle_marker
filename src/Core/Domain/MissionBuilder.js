import Mission from "./Mission";
import LocalFileObjectiveRepository from "../Infrastructure/LocalFileObjectiveRepository";

class MissionBuilder
{
    static fromJson(element): Mission
    {
        const objectives_repo = new LocalFileObjectiveRepository()

        return new Mission(
            element['name'],
            element['description'],
            objectives_repo.findByKey(element['main_objective']),
            objectives_repo.findByKey(element['secondary_objectives'][0]),
            element['pack'],
            element['battle_size']
        )
    }
}

export default MissionBuilder;