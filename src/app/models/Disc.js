import Sequelize, { Model } from "sequelize";

class Disc extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        artist: Sequelize.STRING,
        year: Sequelize.STRING,
        info: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "disc"
      }
    );
    return this;
  }

  static associate(models) {
    this.hasOne(models.DiscFile, {
      foreingKey: "disc_file_id",
      onDelete: "cascade"
    });

    this.DiscFile = models.DiscFile;
  }
}

export default Disc;
