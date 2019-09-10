import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Disc from "../app/models/Disc";
import DiscFile from "../app/models/DiscFile";

const models = [Disc, DiscFile];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
