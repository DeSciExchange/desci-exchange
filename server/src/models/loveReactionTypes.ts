import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface loveReactionTypesAttributes {
    id?: string;
    name?: string;
    mass?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "love_reaction_types",
	timestamps: false 
})
export class loveReactionTypes extends Model<loveReactionTypesAttributes, loveReactionTypesAttributes> implements loveReactionTypesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('love_reaction_types_id_seq'::regclass)") 
    })
    @Index({
    	name: "love_reaction_types_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "love_reaction_types_name_index",
    	using: "btree",
    	unique: false 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	mass?: number;

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