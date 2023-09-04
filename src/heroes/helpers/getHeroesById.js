import {heroes} from "../data/heroes.js";

export const getHeroesById = ( id ) => {
    return heroes.find( hero => hero.id === id);
}