import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface loveReactantReactionTotalsAttributes {
    id?: string;
    reactantId?: string;
    count?: string;
    weight?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "love_reactant_reaction_totals",
	timestamps: false 
})
export class loveReactantReactionTotals extends Model<loveReactantReactionTotalsAttributes, loveReactantReactionTotalsAttributes> implements loveReactantReactionTotalsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('love_reactant_reaction_totals_id_seq'::regclass)") 
    })
    @Index({
    	name: "love_reactant_reaction_totals_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: string;

    @Column({
    	field: "reactant_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	reactantId?: string;

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