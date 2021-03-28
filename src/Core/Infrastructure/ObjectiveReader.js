import type { ObjectiveReaderInterface } from 'src/Core/Infrastructure/ObjectiveReaderInterface';

export class ObjectiveReader implements ObjectiveReaderInterface {
    read(): string {
        return JSON.stringify(require('./../../Data/objectives.json'));
    }
}