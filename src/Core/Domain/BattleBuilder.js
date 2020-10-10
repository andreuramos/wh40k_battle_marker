import Player from "./Player";
import Battle from "./Battle";

export default class BattleBuilder
{
    static fromForm(data) {
        let player1 = new Player(data.player1)
        let player2 = new Player(data.player2)

        player1.addObjective(data.mission.mainObjective())
        player2.addObjective(data.mission.mainObjective())

        if (data.startingPlayer !== data.player1) {
            return new Battle(player2, player1)
        }
        return new Battle(player1, player2)
    }
}