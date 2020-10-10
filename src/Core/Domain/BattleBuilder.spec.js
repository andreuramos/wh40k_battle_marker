import BattleBuilder from "./BattleBuilder";
import Mission from "./Mission";
import Objective from "./Objective";

describe('BattleBuilder', () => {

    const objective = new Objective("TestMain","test-main", "desc", "main", "main")
    const secondary = new Objective("TestSecondary", "test-sec", "desc", "secondary", "main")
    const mission = new Mission("Test", "test test", objective, secondary, "test", "any")
    let form_data = {
        player1: "Andreu",
        player2: "Pedro",
        startingPlayer: "Andreu",
        mission: mission
    }

    it('creates the battle with the player\'s names', () => {
        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().name()).toBe("Andreu")
        expect(battle.player2().name()).toBe("Pedro")
    })

    it('sets starting player as player 1', () => {
        form_data.startingPlayer = "Pedro"

        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().name()).toBe("Pedro")
        expect(battle.player2().name()).toBe("Andreu")
    })

    it('attaches main mission to players', () => {
        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().objectives()[0]).toBe(objective)
        expect(battle.player2().objectives()[0]).toBe(objective)
    })
})