import Mission from "../Domain/Mission";
import { ObjectiveRepository } from "../Infrastructure/ObjectiveRepository";
import type { MissionReaderInterface } from '../Infrastructure/MissionReaderInterface';

export class MissionRepository
{
    constructor(reader: MissionReaderInterface, objectives_repository: ObjectiveRepository) {
        this.reader = reader;
        this.objectives_repo = objectives_repository;
    }

    async getAllMissions()
    {
        const data = JSON.parse(this.reader.read());

        return data.map(element => {
            return this._fromJson(element);
        });
    }

    _fromJson(element): Mission
    {
        return new Mission(
            element['name'],
            element['description'],
            this.objectives_repo.findByKey(element['main_objective']),
            this.objectives_repo.findByKey(element['secondary_objectives'][0]),
            element['pack'],
            element['battle_size']
        )
    }
}
