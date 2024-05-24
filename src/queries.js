import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = null;

const humanwithKey = await Human.findByPk(2)
return humanwithKey;

// Get the first animal whose species is "fish"
export const query2 = null;

const animal = await Animal.findOne({ where: { species: 'fish' } })
return animal

// Get all animals belonging to the human with primary key 5
export const query3 = null;

const getAllanimal = await Animal.findAll({ where: { human_id: 5 } })
return getAllanimal

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = null;

const getanimalBornDate = await Animal.findAll({ where: { birth_year: {[Op.gt]: 2015} } })
return getanimalBornDate

// Get all the humans with first names that start with "J"
export const query5 = null;

const allHumans = await Human.findAll({ where: { fname: {[Op.startsWith]: 'J'} } })
return allHumans

// Get all the animals who don't have a birth year
export const query6 = null;

const animalWithNoBirthDate = await Animal.findAll({ where: { birth_year: false} })
return animalWithNoBirthDate

// Get all the animals with species "fish" OR "rabbit"
export const query7 = null;

const species = await Animal.findAll({ where: {[Op.or]: [{ species: 'fish' }, { species: 'rabbit' }] } })
return species

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = null;

const noGmail = await Human.findAll({ where: { email: {[Op.notILike]: '%gmail%'} } })
return noGmail

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const humans = await Human.findAll({ include: Animal })
    
}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {}
