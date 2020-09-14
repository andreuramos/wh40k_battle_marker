import Player from "./Player";

class Battle
{
    _startedAt: Date;
    _endedAt: Date;
    _isOver: boolean;
    _player1: Player;
    _player2: Player;
    _activePlayer: number;
    _round: number;

    constructor(player1, player2) {
        this._startedAt = new Date();
        this._endedAt = null;
        this._isOver = false;
        this._player1 = player1;
        this._player2 = player2;
        this._activePlayer = 1;
        this._round = 1;
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

    activePlayer(): number
    {
        return this._activePlayer;
    }

    round(): number
    {
        return this._round;
    }

    nextTurn(): void
    {
        if (this._activePlayer === 1) {
            this._activePlayer = 2;
        } else {
            this._round ++;
            this._activePlayer = 1;
        }
    }
}

export default Battle;