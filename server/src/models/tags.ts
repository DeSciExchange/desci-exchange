import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface tagsAttributes {
    id?: number;
    name?: object;
    slug?: object;
    type?: string;
    orderColumn?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "tags",
	timestamps: false 
})
export class tags extends Model<tagsAttributes, tagsAttributes> implements tagsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('tags_id_seq'::regclass)") 
    })
    @Index({
    	name: "tags_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.JSON 
    })
    	name?: object;

    @Column({
    	allowNull: true,
    	type: DataType.JSON 
    })
    	slug?: object;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	type?: string;

    @Column({
    	field: "order_column",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	orderColumn?: number;

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