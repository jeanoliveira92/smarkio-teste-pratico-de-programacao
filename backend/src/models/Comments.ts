const { Model, DataTypes } = require('sequelize');

export interface CommentsAttributes {
    id?: number,
    text: string,
}

export class Comments extends Model {
    static init(sequelize: any) {
        super.init({
            text: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
}

module.exports = Comments;  