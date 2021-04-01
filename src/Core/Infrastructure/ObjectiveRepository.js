import type { ObjectiveReaderInterface } from 'src/Core/Infrastructure/ObjectiveReaderInterface';
import Objective from '../Domain/Objective';

export class ObjectiveRepository
{
    constructor(reader: ObjectiveReaderInterface)
    {
        if (typeof reader === 'undefined') {
            throw new Error("objective reader is required");2
        }

        this.reader = reader;
    }

    getAll() {
        const data = JSON.parse(this.reader.read());

        return data.map( el => {
            return new Objective(
                el['name'],
                el['key'],
                el['description'],
                el['type'],
                el['category']
            );
        });
    }

    findByKey(key)
    {
        const objective = this.getAll().find( element => element.key() === key);
        if (objective) {
            return objective;
        }
        throw new Error("Objective not found: "+ key);
    }

    getByType(type)
    {
        return this.getAll().filter( el => {
            return el.type() === type;
        })
    }
}