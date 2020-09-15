class CompletedMission
{
    _name: String;
    _points: Number;
    _createdAt: Date;
    _round: Number;

    constructor(name, points, round)
    {
        this._name = name;
        this._points = points;
        this._round = round;
        this._createdAt = new Date();
    }

    name(): String
    {
        return this._name;
    }

    points(): Number
    {
        return this._points;
    }

    round(): Number
    {
        return this._round;
    }

    createdAt(): Date
    {
        return this._createdAt;
    }

}

export default CompletedMission;