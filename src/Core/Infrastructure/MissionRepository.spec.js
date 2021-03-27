import React from "react";
import {TestMissionRepository} from "./TestMissionRepository";
import LocalFileObjectiveRepository from "./LocalFileObjectiveRepository";
import Mission from "../Domain/Mission";

describe("LocalFileMissionRepository", () => {
    it("returns an array of Missions", async () => {
        const repo = new TestMissionRepository()
        const objectives_repo = new LocalFileObjectiveRepository('./testobjectives.json')

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
