import { MissionRepository } from '../Infrastructure/MissionRepository';
import { TestObjectiveReader } from '../Infrastructure/TestObjectiveReader';
import { TestMissionReader } from '../Infrastructure/TestMissionReader';
import { ObjectiveRepository } from '../Infrastructure/ObjectiveRepository';

export class TestFactory {
    static newMissionRepository(): MissionRepository
    {
        return new MissionRepository(new TestMissionReader(), TestFactory.newObjectiveRepository());
    }

    static newObjectiveRepository(): ObjectiveRepository
    {
        return new ObjectiveRepository(new TestObjectiveReader());
    }
}