"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("disc_file", "disc_id", {
      type: Sequelize.INTEGER,
      references: { model: "disc", key: "id" },
      onUpdate: "cascade",
      onDelete: "cascade",
      allowNull: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("disc", "disc_file_id");
  }
};
