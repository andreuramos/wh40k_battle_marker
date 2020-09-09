class Player
{
    _name: String;

    constructor(name)
    {
        this._name = name;
    }

    name(): String
    {
        return this._name;
    }
}

export default Player;