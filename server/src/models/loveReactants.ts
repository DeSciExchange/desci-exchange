import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface loveReactantsAttributes {
    id?: string;
    type?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "love_reactants",
	timestamps: false 
})
export class loveReactants extends Model<loveReactantsAttributes, loveReactantsAttributes> implements loveReactantsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('love_reactants_id_seq'::regclass)") 
    })
    @Index({
    	name: "love_reactants_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "love_reactants_type_index",
    	using: "btree",
    	unique: false 
    })
    	type?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

}