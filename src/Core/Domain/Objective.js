export default class Objective
{
    _name: string;
    _description: string;
    _key: string;
    _type: string;
    _trigger: string;
    _max_score: integer;
    _scores: array;

    constructor(name, description)
    {
        this._name = name;
        this._description = description;
    }

    name(): string
    {
        return this._name
    }

    description(): string
    {
        return this._description
    }
}
