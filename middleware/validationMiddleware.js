import {body, validationResult} from "express-validator"
import { BadRequestError } from "../errors/customErrors.js"

const withValidationErrors = (validateValues)=>{
    return [
        validateValues, 
        (req,res,next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
              const errorMessage = errors.array().map((error) => error.msg);
              throw new BadRequestError(errorMessage);
            }
            next();
     },
  ];
};

export const validateTest = withValidationErrors([ 
    body("name").notEmpty()
    .withMessage("name shouldn't be empty")
    .isLength({min: 3, max: 20})
    .withMessage("name should be atleast inrange of 3 to 20 letters")
    .trim(),
]);