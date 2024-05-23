const jwtProvider=require("../config/jwtProvider")

const userService=require("../services/userService");

const authenticate=async(req,res,next)=>{

// Bearer token.....

try {

const token=req.headers.authorization?.split(" ")[1];
 if(!token) {

return req.status(404).send({error:"token not found..."})

}

const userId=jwtProvider.getUserIdFromToken(token);

const user=userService.findUserById(userId); 
req.user=user;

} catch (error) {

return res.status(500).send({error:error.message});

}

next();
}
module.exports=authenticate; 

// const jwtProvider = require("../config/jwtProvider");
// const userService = require("../services/userService");

// const authenticate = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;
//         console.log("Authorization header:", authHeader);
        
//         const token = authHeader?.split(" ")[1];
//         console.log("Extracted token:", token);
        
//         if (!token) {
//             return res.status(404).send({ error: "Token not found" });
//         }

//         const userId = jwtProvider.getUserIdFromToken(token);
//         const user = await userService.findUserById(userId);

//         if (!user) {
//             return res.status(404).send({ error: "User not found" });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// };

// module.exports = authenticate;


// const jwtProvider = require("../config/jwtProvider");
// const userService = require("../services/userService");

// const authenticate = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader) {
//             return res.status(404).send({ error: "Authorization header not found" });
//         }

//         // Sanitize and extract the token
//         const token = authHeader.replace(/[\r\n]/g, '').split(" ")[1];
//         console.log("Extracted token:", token);
        
//         if (!token) {
//             return res.status(404).send({ error: "Token not found" });
//         }

//         const userId = jwtProvider.getUserIdFromToken(token);
//         const user = await userService.findUserById(userId);

//         if (!user) {
//             return res.status(404).send({ error: "User not found" });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// };

// module.exports = authenticate;
