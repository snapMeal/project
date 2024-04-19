import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { Mongoose } from "mongoose";
import { Menu } from "../models/menu";
import { APIError } from "../utils/errorHandler";
async function menuDetails(req,res,next) {
    const payload=req.body;
    const canteen=payload.canteen;
    if(canteen){
        try{
            const Items=await Menu.find({canteen});
            res.json(APIResponse(`menu of the ${canteen}`, 200,Items, true)).status(200);
        }
        catch(eror){
            next(eror);
        }
    }
    else{
        try{
            const Items=await Menu.find();
            res.json(APIResponse(`menu of  all the canteen`, 200,Items, true)).status(200);
        }
        catch(eror){
            next(eror);
        }
    }
}
async function addMenu(req,res,next) {
    const payload=req.body;
    if(payload){
        try{
            const Item=await Menu.create(payload);
            res.json(APIResponse(`Created the Item`, 200,Item, true)).status(200);
        }
        catch(error){
            next(error);
        }
    }
    else{
        throw new APIError(
            "Detail Not Given!!",
            400
        );
    }
}
export const menuController={addMenu,menuDetails};