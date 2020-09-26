import React from "react";
import LocalFileMissionRepository from "./LocalFileMissionRepository";

describe("LocalFileMissionRepository", () => {
    it("gets all missions from file", () => {
        const repo = new LocalFileMissionRepository('./testmissions.json')

        const missions = repo.getAllMissions()

        expect(Array.isArray(missions)).toBe(true)
        expect(missions.length).toBe(2)
    });
});