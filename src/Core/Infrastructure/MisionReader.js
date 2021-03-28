import type { MissionReaderInterface } from 'src/Core/Infrastructure/MissionReaderInterface';

export class MissionReader implements MissionReaderInterface
{
    read(): string {
        return JSON.stringify(require('./../../Data/missions.json'));
    }
}