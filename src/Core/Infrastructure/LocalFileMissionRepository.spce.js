import React from "react";
import LocalFileMissionRepository from "./LocalFileMissionRepository";

describe("LocalFileMissionRepository", () => {
    it("gets all missions from file", () => {
        cosnt repo = new LocalFileMissionRepository();

        const missions = repo.getAllMissions();
        expect(missions.count().toBe(2))
    })
});