import Battle from "./Battle";

describe('Battle', () => {
   it('is created as not over', () => {
       const battle = new Battle();

       expect(battle.isOver()).toBe(false);
   });

   it('is set to over when finished', () => {
       const battle = new Battle();
       battle.finish();

       expect(battle.isOver()).toBe(true);
   })

    it('sets the end time when finished', () => {
        const battle = new Battle();

        battle.finish()
        expect(battle.endedAt()).not.toBe(null);
    })
});