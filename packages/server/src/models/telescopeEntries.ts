import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface telescopeEntriesAttributes {
    sequence?: string;
    uuid?: string;
    batchId?: string;
    familyHash?: string;
    shouldDisplayOnIndex?: boolean;
    type?: string;
    content?: string;
    createdAt?: Date;
}

@Table({
	tableName: "telescope_entries",
	timestamps: false 
})
export class telescopeEntries extends Model<telescopeEntriesAttributes, telescopeEntriesAttributes> implements telescopeEntriesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.BIGINT,
    	defaultValue: Sequelize.literal("nextval('telescope_entries_sequence_seq'::regclass)") 
    })
    @Index({
    	name: "telescope_entries_pkey",
    	using: "btree",
    	unique: true 
    })
    	sequence?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(36) 
    })
    @Index({
    	name: "telescope_entries_uuid_unique",
    	using: "btree",
    	unique: true 
    })
    	uuid?: string;

    @Column({
    	field: "batch_id",
    	allowNull: true,
    	type: DataType.STRING(36) 
    })
    @Index({
    	name: "telescope_entries_batch_id_index",
    	using: "btree",
    	unique: false 
    })
    	batchId?: string;

    @Column({
    	field: "family_hash",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "telescope_entries_family_hash_index",
    	using: "btree",
    	unique: false 
    })
    	familyHash?: string;

    @Column({
    	field: "should_display_on_index",
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("true") 
    })
    @Index({
    	name: "telescope_entries_type_should_display_on_index_index",
    	using: "btree",
    	unique: false 
    })
    	shouldDisplayOnIndex?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    @Index({
    	name: "telescope_entries_type_should_display_on_index_index",
    	using: "btree",
    	unique: false 
    })
    	type?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	content?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

}