class Battle
{
    _startedAt: Date;
    _isOver: boolean;

    constructor() {
        this._startedAt = new Date();
        this._isOver = false;
    }

    startedAt(): Date
    {
        return this._startedAt;
    }

    isOver(): boolean
    {
        return this._isOver;
    }

    finish(): void
    {
        this._isOver = true;
    }
}

export default Battle;