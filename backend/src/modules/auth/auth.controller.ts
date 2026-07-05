import type {Request,Response} from 'express'
import {asyncHandler} from '../../middleware/asyncHandler.js'
import {sendSuccess} from '../../shared/utils/apiResponse.js'
import * as authService from './auth.service.js'
export const register=asyncHandler(async(req:Request,res:Response,next)=>{
    const payload=req.body;
    const result=await authService.register(payload);
    return sendSuccess(res,result,'User registered successfully');
})
export const login=asyncHandler(async(req:Request,res:Response,next)=>{
    const payload=req.body;
    const result=await authService.login(payload);
    return sendSuccess(res,result,'User logged in successfully');
})