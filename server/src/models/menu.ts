import {Schema,model} from "mongoose";
const menuSchema= new Schema({
    canteen: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isDeleted: {
        type:Boolean,
        default:false
    }
});
export const Menu = model('MenuItem', menuSchema);
