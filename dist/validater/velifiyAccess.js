"use strict";
// import { Request, Response, NextFunction } from 'express';
// import  jwt  from 'jsonwebtoken';
// import { errormessage } from '../utils/errormessage';
// interface User {
//     id: string;
//     firstname: string;
//     lastname:string;
//     email:string;
//     phone:number;
//     password:string;
//     confrimpassword:string
//     signedAt:string;
//     role: string[];
//   }
//   interface RequestWithUser extends Request {
//     user?: User;
//   }
//   export const authenticateUser = (req: RequestWithUser, res: Response, next: NextFunction): void => {
//     const token = req.headers["auth-token"]
//     if(!token){
//       return errormessage(res,401,`no token provided`)
//     }else{
//       const verifyToken = jwt.verify(token,process.env.SCRET_KEY,{expiresIn:"2d"})
//     // Implement your user authentication logic here
//     // For example, decode JWT, verify session, etc.
//     // Set the authenticated user in req.user
//     // For demonstration purposes, a dummy user is used here
//     req.user = verifyToken.user;
//     next();
//   };
//  }
//   export const authorize = (allowedRoles: string[]) => {
//     return (req: RequestWithUser, res: Response, next: NextFunction): void => {
//       // Check if the user has any of the allowed roles
//       const hasPermission = allowedRoles.some((role) => req.user?.role.includes(role));
//       if (hasPermission) {
//         next();
//       } else {
//         res.status(403).json({ error: 'Access forbidden' });
//       }
//     };
//   };
