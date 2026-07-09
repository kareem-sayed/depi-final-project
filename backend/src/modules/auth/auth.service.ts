import User from "../users/User.model.js";
import {generateToken} from "../../shared/utils/jwt.js";
interface Registerpayload{
    name:string;
    email:string;
    password:string;

}
interface LoginPayload{
    email:string;
    password:string;
}
interface UpdateProfilePayload{
    name?:string;
    phone?:string;
    avatar?:string;
}
export const register=async(payload:Registerpayload)=>{
    const existingUser=await User.findOne({email:payload.email});
    if(existingUser){
        const error=new Error(`User with email ${payload.email} already exists`);
        (error as any).statusCode=400;
        throw error;
    }
    const user=await User.create(payload);
    const token=generateToken(user._id.toString(),user.role);
    const { password, ...safeUser } = user.toObject();
    return {user: safeUser,token};
}
export const login=async(payload:LoginPayload)=>{
    const user=await User.findOne({email:payload.email}).select('+password');
    if(!user){
        const error=new Error(`User with email ${payload.email} not found`);
        (error as any).statusCode=404;
        throw error;
    }    
    const isMatch=await user.comparePassword(payload.password);
    if(!isMatch){
        const error=new Error(`Invalid password`);
        (error as any).statusCode=401;
        throw error;
    }
    const token=generateToken(user._id.toString(),user.role);
    const { password, ...safeUser } = user.toObject();
    return {user: safeUser,token};
}
export const getCurrentUser=async(userId:string)=>{
    const user=await User.findById(userId).select('-password');
    if(!user){
        const error=new Error('User not found');
        (error as any).statusCode=404;
        throw error;
    }
    return user.toObject();
}
export const updateCurrentUser=async(userId:string,payload:UpdateProfilePayload)=>{
    const user=await User.findByIdAndUpdate(
        userId,
        {$set:payload},
        {new:true,runValidators:true}
    ).select('-password');
    if(!user){
        const error=new Error('User not found');
        (error as any).statusCode=404;
        throw error;
    }
    return user.toObject();
}
