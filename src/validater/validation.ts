import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { errormessage } from "../utils/errormessage";

class Validation {
  public static inputValidator(req: Request, res: Response, next: NextFunction) {
    const errors=validationResult(req)
       
    if (!errors.isEmpty()) {
        errors.array().forEach((error) => {
          return errormessage(res,401,error.msg)
        });
    }else{
        return next()
    }
      
  }

  public static userAccountRule(){
     return [
        check("firstname","please correct your name").isAlpha().isUppercase(),
        check("lastname","please correct your name").isAlpha(),
        check("email","please correct your user name").isEmail(),
        check('phone','Invalid mobile number')
           .isMobilePhone('any', { strictMode: true }),
        check("password","please correct your strong password").isStrongPassword()
        
          
     ]
  }
}

export { Validation };
