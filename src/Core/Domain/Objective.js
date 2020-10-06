export default class Objective
{
    _name: string;
    _description: string;
    _key: string;
    _type: string;
    _trigger: string;
    _max_score: integer;
    _scores: array;

    constructor(name, key, description, type, category)
    {
        this._name = name;
        this._key = key;
        this._description = description;
        this._type = type;
        this._category = category;
    }

    name(): string
    {
        return this._name
    }

    key(): string
    {
        return this._key
    }

    description(): string
    {
        return this._description
    }

    type(): string
    {
        return this._type
    }

    category(): string
    {
        return this._category
    }
}
