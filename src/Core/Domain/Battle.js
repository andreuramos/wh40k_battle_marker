import Player from "./Player";

class Battle
{
    _startedAt: Date;
    _endedAt: Date;
    _isOver: boolean;
    _player1: Player;
    _player2: Player;

    constructor(player1, player2) {
        this._startedAt = new Date();
        this._endedAt = null;
        this._isOver = false;
        this._player1 = player1;
        this._player2 = player2;
    }

    startedAt(): Date
    {
        return this._startedAt;
    }

    endedAt(): Date
    {
        return this._endedAt;
    }

    isOver(): boolean
    {
        return this._isOver;
    }

    finish(): void
    {
        this._endedAt = new Date();
        this._isOver = true;
    }

    player1(): Player
    {
        return this._player1;
    }

    player2(): Player
    {
        return this._player2;
    }

    name(): String
    {
        return this._player1.name() + " vs " + this._player2.name();
    }
}

export default Battle;