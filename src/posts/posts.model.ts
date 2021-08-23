import {Column, DataType, Model, Table} from "sequelize-typescript";


interface PostCreationAttrs {
    name: string;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING, defaultValue: false})
    image: string;

}