import Objective from "./Objective";

export default class Mission
{
    _name: string;
    _description: string;
    _main_objective: Objective;
    _suggested_secondary_objective: Objective;
    _pack: string;
    _battle_size: string;

    constructor(name, description, main_objective, secondary_objective,pack,battle_size) {
        this._name = name;
        this._description = description;
        this._main_objective = main_objective;
        this._suggested_secondary_objective = secondary_objective;
        this._pack = pack;
        this._battle_size = battle_size;
    }

    name(): string
    {
        return this._name;
    }

    description(): string
    {
        return this._description + this._main_objective.description();
    }

    mainObjective(): Objective
    {
        return this._main_objective;
    }

    suggestedSecondaryObjective(): Objective
    {
        return this._suggested_secondary_objective;
    }

    pack(): string
    {
        return this._pack;
    }

    battleSize(): string
    {
        return this._battle_size;
    }
}