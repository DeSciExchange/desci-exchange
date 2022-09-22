import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface taggablesAttributes {
    tagId?: number;
    taggableType?: string;
    taggableId?: string;
}

@Table({
	tableName: "taggables",
	timestamps: false 
})
export class taggables extends Model<taggablesAttributes, taggablesAttributes> implements taggablesAttributes {

    @Column({
    	field: "tag_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "taggables_tag_id_taggable_id_taggable_type_unique",
    	using: "btree",
    	unique: true 
    })
    	tagId?: number;

    @Column({
    	field: "taggable_type",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "taggables_tag_id_taggable_id_taggable_type_unique",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "taggables_taggable_type_taggable_id_index",
    	using: "btree",
    	unique: false 
    })
    	taggableType?: string;

    @Column({
    	field: "taggable_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    @Index({
    	name: "taggables_tag_id_taggable_id_taggable_type_unique",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "taggables_taggable_type_taggable_id_index",
    	using: "btree",
    	unique: false 
    })
    	taggableId?: string;

}