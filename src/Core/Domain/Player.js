class Player
{
    _name: String;
    _score: Number;
    _completedMissions: Array

    constructor(name)
    {
        this._name = name;
        this._score = 0;
        this._completedMissions = []
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
}

export default Player;