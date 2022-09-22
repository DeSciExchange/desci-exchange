import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface telescopeEntriesTagsAttributes {
    entryUuid?: string;
    tag?: string;
}

@Table({
	tableName: "telescope_entries_tags",
	timestamps: false 
})
export class telescopeEntriesTags extends Model<telescopeEntriesTagsAttributes, telescopeEntriesTagsAttributes> implements telescopeEntriesTagsAttributes {

    @Column({
    	field: "entry_uuid",
    	allowNull: true,
    	type: DataType.STRING(36) 
    })
    @Index({
    	name: "telescope_entries_tags_entry_uuid_tag_index",
    	using: "btree",
    	unique: false 
    })
    	entryUuid?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "telescope_entries_tags_entry_uuid_tag_index",
    	using: "btree",
    	unique: false 
    })
    @Index({
    	name: "telescope_entries_tags_tag_index",
    	using: "btree",
    	unique: false 
    })
    	tag?: string;

}