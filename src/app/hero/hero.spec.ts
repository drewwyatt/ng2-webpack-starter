import {Hero} from './hero';

describe('Hero', () => {
    it('has id given in constructor', () => {
       let hero = new Hero(1, 'Super Cat');
       expect(hero.id).toEqual(1);
    });
    
    it('has name given in constructor', () => {
        let hero = new Hero(1, 'Super Cat');
        expect(hero.name).toEqual('Super Cat');
    });
});