import { BadRequestError, UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res , next) => {
   const {token} = req.cookies;
   if(!token) throw new UnauthenticatedError("authentication invalid");

  try {
    const {userId, role} = verifyJWT(token);
    const testUser = userId === "65432a381c7a016868950f86";
    req.user = {userId, role, testUser};
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
  
};

export const authorizePermissions = (...role) =>{
return (req, res, next)=>{
  if(!role.includes(req.user.role)){
        throw new UnauthorizedError("unauthorized to accesss this route")
  }
  console.log(role);
  next();
}
};

export const checkTestUser = (req,res, next) => {
  if(req.user.testUser) throw new BadRequestError("test user read only");
  next();
}