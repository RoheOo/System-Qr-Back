import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import MOVEMENT from "./movements.js";

const PRODUCT = sequelize.define(
  "products",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    p_description: {
      type: DataTypes.STRING,
      validate: { notEmpty: true, notNull: true },
      allowNull: false,
    },
    p_stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    p_minstock: { type: DataTypes.INTEGER, defaultValue: 0 },
    p_unit: { type: DataTypes.STRING, defaultValue: "" },
    p_ubication: {
      type: DataTypes.STRING,
      validate: { notEmpty: true, notNull: true },
      allowNull: false,
    },
    isdeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    timestamps: true,
  }
);

PRODUCT.hasMany(MOVEMENT, {
  foreignKey: "p_id",
  sourceKey: "id",
});

MOVEMENT.belongsTo(PRODUCT, {
  foreignKey: "p_id",
  targedId: "id",
});

export default PRODUCT;

// // import mongoose from "mongoose";

// // const productSchema = mongoose.Schema(
// //   {
// //     p_description: { type: String, require: true },
// //     p_stock: { type: Number, default: 0 },
// //     p_MinStock: { type: Number, default: 0 },
// //     p_price: { type: Number, default: 0 },
// //     p_measurementUnit: { type: String, default: "" },
// //     p_location: { type: String, required: true },
// //     isDeleted: { type: Date, default: null },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const PRODUCT = mongoose.model("Product", productSchema);

// // export default PRODUCT;
