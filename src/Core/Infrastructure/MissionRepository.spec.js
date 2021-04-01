import Mission from "../Domain/Mission";
import { TestFactory } from '../Infrastructure/TestFactory';

describe("LocalFileMissionRepository", () => {
    it("returns an array of Missions", async () => {
        const objectives_repo = TestFactory.newObjectiveRepository();
        const repo = TestFactory.newMissionRepository();

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
