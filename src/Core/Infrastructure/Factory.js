import { MissionRepository } from '../Infrastructure/MissionRepository';
import { MissionReader } from '../Infrastructure/MisionReader';
import { ObjectiveReader } from '../Infrastructure/ObjectiveReader';
import { ObjectiveRepository } from '../Infrastructure/ObjectiveRepository';

export class Factory {
    static newMissionRepository(): MissionRepository
    {
        return new MissionRepository(new MissionReader(), Factory.newObjectiveRepository());
    }

    static newObjectiveRepository(): ObjectiveRepository
    {
        return new ObjectiveRepository(new ObjectiveReader());
    }
}