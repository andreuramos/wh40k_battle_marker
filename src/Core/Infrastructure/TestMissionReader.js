import type { MissionReaderInterface } from 'src/Core/Infrastructure/MissionReaderInterface';

export class TestMissionReader implements MissionReaderInterface
{
    read(): string {
        return JSON.stringify(require('./testmissions.json'));
    }
}