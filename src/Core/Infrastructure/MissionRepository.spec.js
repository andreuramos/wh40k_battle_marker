import Mission from "../Domain/Mission";
import { ObjectiveRepository } from "../../Core/Infrastructure/ObjectiveRepository";
import { MissionRepository } from '../../Core/Infrastructure/MissionRepository';
import { TestMissionReader } from '../../Core/Infrastructure/TestMissionReader';
import { TestObjectiveReader } from '../../Core/Infrastructure/TestObjectiveReader';

describe("LocalFileMissionRepository", () => {
    it("returns an array of Missions", async () => {
        const objectives_repo = new ObjectiveRepository(new TestObjectiveReader())
        const repo = new MissionRepository(
            new TestMissionReader(),
            objectives_repo
        );

        await repo.getAllMissions().then( missions => {
            expect(missions).toEqual([
                new Mission(
                    "Ataque Incisivo",
                    "Description 1",
                    objectives_repo.findByKey("occupy_and_maintain"),
                    objectives_repo.findByKey('domination'),
                    "Guerra Eterna",
                    "Patrulla"
                ),
                new Mission(
                    "Escoltas",
                    "Description 2",
                    objectives_repo.findByKey("occupy_and_maintain"),
                    objectives_repo.findByKey("recognition"),
                    "Guerra Eterna",
                    "Patrulla"
                )
            ])
        })
    });
});
