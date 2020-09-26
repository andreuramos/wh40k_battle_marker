import LocalFileObjectiveRepository from "./LocalFileObjectiveRepository";

describe("Local file objective repository", () => {
    let repo

    beforeEach(() => {
        repo = new LocalFileObjectiveRepository('./testobjectives.json');
    })

    it("returns an array of objectives", () => {
        const objectives = repo.getAll()

        expect(Array.isArray(objectives)).toBe(true)
        expect(objectives[0].constructor.name).toBe("Objective")
    })

    it("returns all when getall", () => {
        const objectives = repo.getAll()

        expect(objectives.length).toBe(2);
    })

    it("searches by key", () => {
        const objective = repo.findByKey('domination');

        expect(objective.constructor.name).toBe("Objective")
        expect(objective._name).toBe("Dominación")
    })

    it("throws exception when no objective is found by key", () => {
        expect(() => {
            repo.findByKey('something-that-does-not-exist')
        }).toThrow("Objective not found");
    })

    it("filters by mission type", () => {
        const objective = repo.getByType('main');

        expect(objective.constructor.name).toBe("Objective")
        expect(objective._name).toBe("Ocupar y Mantener")
    })
})