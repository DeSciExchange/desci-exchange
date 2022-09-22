import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface phrasesAttributes {
    clientId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    id?: number;
    image?: string;
    text?: string;
    title?: string;
    type?: string;
    updatedAt?: Date;
    url?: string;
    userId?: string;
    respondingToPhraseId?: number;
    responsePhraseId?: number;
    recipientUserIds?: string;
    numberOfTimesHeard?: number;
    interpretativeConfidence?: number;
}

@Table({
	tableName: "phrases",
	timestamps: false 
})
export class phrases extends Model<phrasesAttributes, phrasesAttributes> implements phrasesAttributes {

    @Column({
    	field: "client_id",
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    @Index({
    	name: "phrases_client_id_fk",
    	using: "btree",
    	unique: false 
    })
    	clientId?: string;

    @Column({
    	field: "created_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	createdAt?: Date;

    @Column({
    	field: "deleted_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	deletedAt?: Date;

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('phrases_id_seq'::regclass)") 
    })
    @Index({
    	name: "phrases_pkey",
    	using: "btree",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	image?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	text?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	title?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	type?: string;

    @Column({
    	field: "updated_at",
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") 
    })
    	updatedAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	url?: string;

    @Column({
    	field: "user_id",
    	allowNull: true,
    	type: DataType.BIGINT 
    })
    	userId?: string;

    @Column({
    	field: "responding_to_phrase_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	respondingToPhraseId?: number;

    @Column({
    	field: "response_phrase_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	responsePhraseId?: number;

    @Column({
    	field: "recipient_user_ids",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	recipientUserIds?: string;

    @Column({
    	field: "number_of_times_heard",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	numberOfTimesHeard?: number;

    @Column({
    	field: "interpretative_confidence",
    	allowNull: true,
    	type: DataType.DOUBLE 
    })
    	interpretativeConfidence?: number;

}