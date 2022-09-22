import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface cacheAttributes {
    key?: string;
    value?: string;
    expiration?: number;
}

@Table({
	tableName: "cache",
	timestamps: false 
})
export class cache extends Model<cacheAttributes, cacheAttributes> implements cacheAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "cache_key_unique",
    	using: "btree",
    	unique: true 
    })
    	key?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	value?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	expiration?: number;

}