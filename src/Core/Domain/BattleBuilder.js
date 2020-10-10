import Player from "./Player";
import Battle from "./Battle";

export default class BattleBuilder
{
    static fromForm(data) {
        let player1 = new Player(data.player1)
        let player2 = new Player(data.player2)

        if (data.startingPlayer && data.startingPlayer !== data.player1) {
            player1 = new Player(data.player2)
            player2 = new Player(data.player1)
        }

        player1.addObjective(data.mission.mainObjective())
        player2.addObjective(data.mission.mainObjective())

        return new Battle(player1, player2)
    }
}