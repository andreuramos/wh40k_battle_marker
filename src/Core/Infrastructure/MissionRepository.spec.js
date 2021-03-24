import React from "react";
import {TestMissionRepository} from "./TestMissionRepository";
import MissionBuilder from "../Domain/MissionBuilder";

describe("LocalFileMissionRepository", () => {
    it("returns an array of Missions", async () => {
        const repo = new TestMissionRepository()

        await repo.getAllMissions().then( missions => {
            expect(missions).toEqual([MissionBuilder.fromJson(  {
                "name": "Ataque Incisivo",
                "main_objective": "occupy_and_maintain",
                "secondary_objectives": [
                    "surgical_attack"
                ],
                "battle_size": "Patrulla",
                "pack": "Guerra Eterna"
            }), MissionBuilder.fromJson(  {
                "name": "Escoltas",
                "main_objective": "occupy_and_maintain",
                "secondary_objectives": [
                    "recognition"
                ],
                "battle_size": "Patrulla",
                "pack": "Guerra Eterna"
            })])
        })
    });
});
