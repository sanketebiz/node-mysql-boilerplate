import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db/connection'

interface DemoAttributes {
  id: number
  createdAt?: Date
  updatedAt?: Date
}
export interface DemoInput extends Optional<DemoAttributes, 'id'> {}
export interface DemoOutput extends Required<DemoAttributes> {}

class Demo extends Model<DemoAttributes, DemoInput> implements DemoAttributes {
  public id!: number

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Demo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'Demo',
  },
)

export default Demo
