import Mission from "./Mission";
import LocalFileObjectiveRepository from "../Infrastructure/LocalFileObjectiveRepository";

class MissionBuilder
{
    static fromJson(element): Mission
    {
        const objectives_repo = new LocalFileObjectiveRepository()

        console.log("main objective")
        const obj = objectives_repo.findByKey(element['main_objective'])
        console.log(obj)
        console.log(obj.description())

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