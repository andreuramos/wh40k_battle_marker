import Mission from "../Domain/Mission";
import LocalFileObjectiveRepository from "./LocalFileObjectiveRepository";

export default class MissionRepository
{
    DEFAULT_DATA_PATH = './../../Data/missions.json';

    constructor() {
        this.objectives_repo = new LocalFileObjectiveRepository()
    }

    async getAllMissions()
    {
        let missions = []
        let data
        if (this.DEFAULT_DATA_PATH == './../../Data/missions.json') {
            data = require('./../../Data/missions.json')
        } else {
            data = require(this.DEFAULT_DATA_PATH)
        }

        data.forEach(element => {
            const mission = this._fromJson(element)
            missions.push(mission);
        })
        return missions;
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
