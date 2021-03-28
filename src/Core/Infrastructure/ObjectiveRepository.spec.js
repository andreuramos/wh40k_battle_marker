import { ObjectiveRepository } from "../../Core/Infrastructure/ObjectiveRepository";
import { TestObjectiveReader } from '../../Core/Infrastructure/TestObjectiveReader';

describe("Local file objective repository", () => {
    let repo

    beforeEach(() => {
        repo = new ObjectiveRepository(new TestObjectiveReader());
    })

    it("returns an array of objectives", () => {
        const objectives = repo.getAll()

        expect(Array.isArray(objectives)).toBe(true)
        expect(objectives[0].constructor.name).toBe("Objective")
    })

    it("returns all when getall", () => {
        const objectives = repo.getAll()

        expect(objectives.length).toBe(3);
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

    it("returns null when no filter by type objective matches", () => {
        const objectives = repo.getByType("exploratory")

        expect(objectives.length).toBe(0)
    })

    it("filters by mission type returns correct objective", () => {
        const objectives = repo.getByType('main');

        expect(objectives.constructor.name).toBe("Array")
        expect(objectives[0]._name).toBe("Ocupar y Mantener")
    })
})
