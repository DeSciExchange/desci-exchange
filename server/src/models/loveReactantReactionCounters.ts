import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface loveReactantReactionCountersAttributes {
    id?: string;
    reactantId?: string;
    reactionTypeId?: string;
    count?: string;
    weight?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "love_reactant_reaction_counters",
	timestamps: false 
})
export class loveReactantReactionCounters extends Model<loveReactantReactionCountersAttributes, loveReactantReactionCountersAttributes> implements loveReactantReactionCountersAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('love_reactant_reaction_counters_id_seq'::regclass)") 
    })
    @Index({
    	name: "love_reactant_reaction_counters_pkey",
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
    	name: "love_reactant_reaction_counters_reactant_reaction_type_index",
    	using: "btree",
    	unique: false 
    })
    	reactantId?: string;

    @Column({
    	field: "reaction_type_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "love_reactant_reaction_counters_reactant_reaction_type_index",
    	using: "btree",
    	unique: false 
    })
    	reactionTypeId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	count?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DECIMAL(13,2) 
    })
    	weight?: string;

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