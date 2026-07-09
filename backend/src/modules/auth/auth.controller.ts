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
export const getMe=asyncHandler(async(req:Request,res:Response,next)=>{
    const userId=req.user!.id;
    const user=await authService.getCurrentUser(userId);
    return sendSuccess(res,user,'Profile fetched successfully');
})
export const updateMe=asyncHandler(async(req:Request,res:Response,next)=>{
    const userId=req.user!.id;
    const payload=req.body;
    const user=await authService.updateCurrentUser(userId,payload);
    return sendSuccess(res,user,'Profile updated successfully');
})