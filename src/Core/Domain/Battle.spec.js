import Battle from "./Battle";
import Player from "./Player";

describe('Battle', () => {

    let battle;

    beforeEach(() => {
        battle = new Battle(new Player("Andreu"), new Player("Andreu"));
    })

   it('is created as not over', () => {
       expect(battle.isOver()).toBe(false);
   });

   it('is created at turn 1 of player 1', () => {
       expect(battle.round()).toBe(1)
       expect(battle.activePlayer()).toBe(1)
   })

   it('is set to over when finished', () => {
       battle.finish();

       expect(battle.isOver()).toBe(true);
   })

    it('sets the end time when finished', () => {
        battle.finish()
        expect(battle.endedAt()).not.toBe(null);
    })

    it('switches active player but keeps round when first turn is over', () => {
        battle.nextTurn()

        expect(battle.activePlayer()).toBe(2)
        expect(battle.round()).toBe(1)
    })

    it('advances round when 2nd turn is over', () => {
        battle.nextTurn();
        battle.nextTurn();

        expect(battle.activePlayer()).toBe(1);
        expect(battle.round()).toBe(2);
    })
});