import Sequelize, { Model } from "sequelize";

class DiscFile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "disc_file"
      }
    );
    return this;
  }
}

export default DiscFile;
