import Player from "./Player";
import Battle from "./Battle";
import Objective from "./Objective";
import CompletedMission from "./CompletedMission";

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
            let objective = data.player2_objectives[key]
            if (objective) {
                player2.addObjective(objective)
            }
        }

        if (data.starting_player !== data.player1) {
            return new Battle(player2, player1)
        }
        return new Battle(player1, player2)
    }

    static fromJson(json_data) {
        const data = JSON.parse(json_data)

        const player1 = new Player(data._player1._name)
        player1.addCommandPoints(data._player1._commandPoints)
        data._player1._objectives.forEach( obj => {
            const objective = new Objective(obj._name, obj._key, obj._description, obj._type, obj._category)
            player1.addObjective(objective)
        })
        data._player1._completedMissions.forEach( item  => {
            const completedMission = new CompletedMission(item._name, item._points, item._round)
            completedMission._createdAt = item._createdAt
            player1.addCompletedMission(completedMission)
        })

        const player2 = new Player(data._player2._name)
        player2.addCommandPoints(data._player2._commandPoints)
        data._player2._objectives.forEach( obj => {
            const objective = new Objective(obj._name, obj._key, obj._description, obj._type, obj._category)
            player2.addObjective(objective)
        })
        data._player2._completedMissions.forEach( item  => {
            const completedMission = new CompletedMission(item._name, item._points, item._round)
            completedMission._createdAt = item._createdAt
            player2.addCompletedMission(completedMission)
        })

        const battle = new Battle(player1, player2)
        while(!(battle.round() === data._round && battle.activePlayer() === data._activePlayer)) {
            battle.nextTurn()
        }
        battle._startedAt = new Date(data._startedAt)

        return battle
    }
}
