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


}

export default LocalFileObjectiveRepository;

