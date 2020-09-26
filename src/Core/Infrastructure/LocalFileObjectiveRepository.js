import ObjectiveBuilder from "../Domain/ObjectiveBuilder";

class LocalFileObjectiveRepository
{
    constructor(data_file_path)
    {
        this._data_file_path = data_file_path;
    }

    getAll() {
        let objectives = [];
        const data = require(this._data_file_path);
        data.forEach( el => {
            objectives.push(ObjectiveBuilder.fromJson(el));
        });
        return objectives;
    }

    findByKey(key)
    {
        const data = require(this._data_file_path);
        const objective = data.find( element => element['key'] === key);

        if (objective) {
            return ObjectiveBuilder.fromJson(objective);
        }
        throw new Error("Objective not found");
    }

    getByType(type)
    {
        let objectives = []
        const data = require(this._data_file_path)
        data.forEach( el => {
            if (el['type'] === type) {
                objectives.push(ObjectiveBuilder.fromJson(el))
            }
        })

        return objectives
    }
}

export default LocalFileObjectiveRepository;

