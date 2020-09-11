class CompletedMission
{
    _name: String;
    _points: Number;

    constructor(name, points)
    {
        this._name = name;
        this._points = points;
    }

    name(): String
    {
        return this._name;
    }

    points(): Number
    {
        return this._points;
    }
}

export default CompletedMission;