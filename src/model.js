import sequelize, { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';
import { type } from 'os';

const db = await connectToDB('postgresql:///animals');

//This tells sequelize this is a table we will have
export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    // TODO: Implement this method
    return `${this.fname} ${this.lname}`
  }
}

        // TODO: Human.init()
//Actually initializes the data in our table, i can also say that creates the table
// init takes two object arguments ({}, {})
// First is the table setup, columns and their datatypes, etc.
// Second is altering default sequelize configuration

Human.init(
{
  humanId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  fName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, 
{
  modelName: 'human',
  sequelize: db,
},
);

 
export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  }, 
  {
    modelName: 'animal',
    sequelize: db, //connects this model with the import sequelize instance
  },
);

// TODO: Define Relationship

Human.hasMany(Animal, { foreignKey: 'human_id'});
Animal.belongsTo(Human, { foreignKey: 'human_id'});

// export { Human, Animal };
export default db;
