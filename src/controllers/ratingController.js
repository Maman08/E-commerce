const ratingService= require("../services/ratingService.js")


const createRating=async(req,res)=>{
    const user=await req.user;
    try{
         const rating=await ratingService.createRatnig(req.body,user);
         return res.status(201).send(rating);
    }catch(error){
        return res.status(500).send({error:error.message})

    }
}

const getAllRating=async(req,res)=>{
    const productId=await req.params.productId;
    try{
         const ratings=await ratingService.getAllRatings(productId);
         return res.status(201).send(ratings);
    }catch(error){
        return res.status(500).send({error:error.message})

    }
}


module.exports={
    createRating,getAllRating
}