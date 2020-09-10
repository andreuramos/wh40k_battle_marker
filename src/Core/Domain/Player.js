class Player
{
    _name: String;
    _score: Number;

    constructor(name)
    {
        this._name = name;
        this._score = 0;
    }

    name(): String
    {
        return this._name;
    }

    score(): Number
    {
        return this._score;
    }

    addScore(points): void
    {
        this._score += points;
    }
}

export default Player;