export default class Objective
{
    _name: string;
    _description: string;
    _key: string;
    _type: string;
    _trigger: string;
    _max_score: integer;
    _scores: array;

    constructor(name)
    {
        this._name = name;
    }

    name(): string
    {
        return this._name
    }
}
