import type { ObjectiveReaderInterface } from 'src/Core/Infrastructure/ObjectiveReaderInterface';

export class TestObjectiveReader implements ObjectiveReaderInterface {
    read(): string {
        return JSON.stringify(require('./testobjectives.json'));
    }
}