import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { Mongoose } from "mongoose";
import { Menu } from "../models/menu";
import { APIError } from "../utils/errorHandler";
async function menuDetails(req, res, next) {
    const canteen = req.query.canteen;
    if (canteen) {
        try {
            const Items = await Menu.find({ canteen });
            res.json(
                APIResponse(`menu of the ${canteen}`, 200, Items, true)
            ).status(200);
        } catch (eror) {
            next(eror);
        }
    } else {
        try {
            const Items = await Menu.find();
            res.json(
                APIResponse(`menu of  all the canteen`, 200, Items, true)
            ).status(200);
        } catch (eror) {
            next(eror);
        }
    }
}
async function addMenu(req, res, next) {
    const payload = req.body;
    if (payload) {
        try {
            const Item = await Menu.create(payload);
            res.json(APIResponse(`Created the Item`, 200, Item, true)).status(
                200
            );
        } catch (error) {
            next(error);
        }
    } else {
        throw new APIError("Detail Not Given!!", 400);
    }
}
async function updateMenu(req, res, next) {
    const payload = req.body;
    const id = req.body._id;
    try {
        const data = await Menu.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        res.json(APIResponse(`update the item`, 200, data, true)).status(200);
    } catch (error) {
        next(error);
    }
}
async function deleteMenu(req, res, next) {
    const id = req.body._id;
    try {
        const data = await Menu.findByIdAndDelete(id);
        res.json(APIResponse(`deleted the item`, 200, data, true)).status(200);
    } catch (error) {
        next(error);
    }
}
export const menuController = { addMenu, menuDetails, updateMenu, deleteMenu };
