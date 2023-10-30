import { UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res , next) => {
   const {token} = req.cookies;
   if(!token) throw new UnauthenticatedError("authentication invalid");

  try {
    const {userId, role} = verifyJWT(token);
    req.user = {userId, role};
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
}