import MissionRepository from "./MissionRepository";
import LocalFileObjectiveRepository from "./LocalFileObjectiveRepository";

export class TestMissionRepository extends MissionRepository
{
    DEFAULT_DATA_PATH = './testmissions.json'

    constructor()
    {
        super()
        this.objectives_repo = new LocalFileObjectiveRepository('./testobjectives.json')
    }
}
