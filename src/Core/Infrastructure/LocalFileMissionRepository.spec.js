import React from "react";
import LocalFileMissionRepository from "./LocalFileMissionRepository";

describe("LocalFileMissionRepository", () => {
    it("returns an array of Missions", () => {
        const repo = new LocalFileMissionRepository('./testmissions.json')

        repo.getAllMissions().then( missions => {
            expect(Array.isArray(missions)).toBe(true)
            expect(missions[0].constructor.name).toBe("Mission");
        })
    });

    it("gets all the missions", () => {
        const repo = new LocalFileMissionRepository('./testmissions.json')

        repo.getAllMissions().then(missions => {
            expect(missions.length).toBe(2)
        })
    })
});