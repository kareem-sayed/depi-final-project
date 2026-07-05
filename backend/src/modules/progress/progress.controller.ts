import type { Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { sendSuccess } from "../../shared/utils/apiResponse.js";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
import *as progressService from '../../modules/progress/progress.service.js'
export const getProgress=asyncHandler(async(req:AuthRequest,res:Response)=>
{
    const progress=await progressService.getProgressByUser(req.user._id);
    return sendSuccess(res,progress,'progress retrived succesfully')

})
export const saveProgress=asyncHandler(async(req:AuthRequest,res:Response)=>
{
    const {prophetSlug,currentChapter,completed}=req.body
    const progress  =await progressService.saveProgress(
        req.user._id,
        prophetSlug,
        currentChapter,
        completed
    )
    return sendSuccess(res,progress,"progress saved succesfully")
});