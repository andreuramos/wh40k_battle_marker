import BattleBuilder from "./BattleBuilder";
import Mission from "./Mission";
import Objective from "./Objective";

describe('BattleBuilder', () => {

    const objective = new Objective("TestMain","test-main", "desc", "main", "main")
    const secondary = new Objective("TestSecondary", "test-sec", "desc", "secondary", "main")
    const mission = new Mission("Test", "test test", objective, secondary, "test", "any")
    const secondary_objectives = [
        new Objective("Secondary1", "sec1", "desc", "secondary", "cat1"),
        new Objective("Secondary2", "sec2", "desc", "secondary", "cat2"),
        new Objective("Secondary3", "sec3", "desc", "secondary", "cat3")
    ]
    const form_data = {
        player1: "Andreu",
        player2: "Pedro",
        startingPlayer: "Andreu",
        mission: mission,
        player1_objectives: secondary_objectives,
        player2_objectives: secondary_objectives
    }

    it('creates the battle with the player\'s names', () => {
        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().name()).toBe("Andreu")
        expect(battle.player2().name()).toBe("Pedro")
    })

    it('sets starting player as player 1', () => {
        let data = { ...form_data}
        data.startingPlayer = "Pedro"

        const battle = BattleBuilder.fromForm(data)

        expect(battle.player1().name()).toBe("Pedro")
        expect(battle.player2().name()).toBe("Andreu")
    })

    it('attaches main mission to players', () => {
        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().objectives()[0]).toBe(objective)
        expect(battle.player2().objectives()[0]).toBe(objective)
    })

    it('sets empty secondary objectives', () => {
        let data = { ...form_data}
        data.player1_objectives = []
        data.player2_objectives = []

        const battle = BattleBuilder.fromForm(data)

        expect(battle.player1().objectives().length).toBe(1)
        expect(battle.player2().objectives().length).toBe(1)
    })

    it('sets non empty secondary objectives', () => {
        const battle1 = BattleBuilder.fromForm(form_data)

        expect(battle1.player1().objectives().length).toBe(4)
        expect(battle1.player2().objectives().length).toBe(4)
    })

    it('assigns correctly the objectives to the players', () => {
        const data = { ...form_data }
        data.player2_objectives = [
            new Objective('Do Something', 'do_something', "bla", 'secondary', 'cat1'),
            new Objective('Do Something else', 'do_something_else', "bla", 'secondary', 'cat2')
        ]

        const battle = BattleBuilder.fromForm(data)

        expect(battle.player1().objectives()[0].key()).toBe("test-main")
        expect(battle.player1().objectives()[1].key()).toBe("sec1")
        expect(battle.player1().objectives()[2].key()).toBe("sec2")
        expect(battle.player1().objectives()[3].key()).toBe("sec3")
        expect(battle.player2().objectives()[0].key()).toBe('test-main')
        expect(battle.player2().objectives()[1].key()).toBe('do_something')
        expect(battle.player2().objectives()[2].key()).toBe('do_something_else')
    })

    it('does not set null objectives', () => {
        let data = { ...form_data }
        data.player1_objectives = [
            new Objective("Only", "one", "objective", "secondary", "cat"),
            null,
            null
        ]

        const battle1 = BattleBuilder.fromForm(data)

        expect(battle1.player1().objectives().length).toBe(2)
    })
})