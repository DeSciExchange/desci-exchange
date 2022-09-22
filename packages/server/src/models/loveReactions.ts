import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface loveReactionsAttributes {
    id?: string;
    reactantId?: string;
    reacterId?: string;
    reactionTypeId?: string;
    rate?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "love_reactions",
	timestamps: false 
})
export class loveReactions extends Model<loveReactionsAttributes, loveReactionsAttributes> implements loveReactionsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('love_reactions_id_seq'::regclass)") 
    })
    @Index({
    	name: "love_reactions_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "reactant_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "love_reactions_reactant_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "love_reactions_reactant_id_reacter_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "love_reactions_reactant_id_reacter_id_index",
    	using: "btree",
    	unique: false 
    })
    	reactantId?: string;

    @Column({
    	field: "reacter_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "love_reactions_reactant_id_reacter_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "love_reactions_reactant_id_reacter_id_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "love_reactions_reacter_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    	reacterId?: string;

    @Column({
    	field: "reaction_type_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "love_reactions_reactant_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "love_reactions_reactant_id_reacter_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "love_reactions_reacter_id_reaction_type_id_index",
    	using: "btree",
    	unique: false 
    })
    	reactionTypeId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DECIMAL(4,2) 
    })
    	rate?: string;

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