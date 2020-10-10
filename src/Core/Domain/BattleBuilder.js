import Player from "./Player";
import Battle from "./Battle";

export default class BattleBuilder
{
    static fromForm(data) {
        const player1 = new Player(data.player1)
        const player2 = new Player(data.player2)

        player1.addObjective(data.mission.mainObjective())
        player2.addObjective(data.mission.mainObjective())

        for (let key in data.player1_objectives) {
            let objective = data.player1_objectives[key]
            if (objective) {
                player1.addObjective(objective)
            }
        }

        for (let key in data.player2_objectives) {
            let objective = data.player1_objectives[key]
            if (objective) {
                player2.addObjective(objective)
            }
        }

        if (data.startingPlayer !== data.player1) {
            return new Battle(player2, player1)
        }
        return new Battle(player1, player2)
    }
}