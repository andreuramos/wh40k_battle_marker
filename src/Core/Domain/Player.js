class Player
{
    _name: String;
    _score: Number;
    _completedMissions: Array
    _commandPoints: Number;
    _objectives: Array

    constructor(name)
    {
        this._name = name;
        this._score = 0;
        this._completedMissions = [];
        this._commandPoints = 0;
        this._objectives = []
    }

    name(): String
    {
        return this._name;
    }

    score(): Number
    {
        return this._score;
    }

    completedMissions(): array
    {
        return this._completedMissions;
    }

    addScore(points): void
    {
        this._score += parseInt(points);
    }

    addCompletedMission(mission)
    {
        this._completedMissions.push(mission)
        this.addScore(mission.points())
    }

    commandPoints(): Number
    {
        return this._commandPoints;
    }

    addCommandPoints(points): void
    {
        this._commandPoints += points;
    }

    substractCommandPoints(points): void
    {
        if (this._commandPoints - points >= 0) {
            this._commandPoints -= points;
        }
    }

    addObjective(objective): void
    {
        this._objectives.push(objective)
    }

    objectives(): Array
    {
        return this._objectives
    }
}

export default Player;