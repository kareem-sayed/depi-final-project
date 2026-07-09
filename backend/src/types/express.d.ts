import { IUser } from '../modules/users/User.model.js';

declare global {
  namespace Express {
    interface Request {
      user?: IUser & { id: string; _id: string };
    }
  }
}
