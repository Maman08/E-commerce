const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb+srv://a34mritunjaysingh:o8ZO3Z5UfT5Mvsza@cluster0.wpxynis.mongodb.net/ecomdb';

mongoose.connect(MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Error in connecting to the database");
    console.error(error);
    process.exit(1); 
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send({ msg: "hey there!" });
});

const PORT = process.env.PORT || 5454;



const authRouters=require("./router/authroute");
app.use("/auth",authRouters);

const userRouters=require("./router/userroute");
app.use("/api/users",userRouters);

const productRouters=require("./router/productroutes");
app.use("/api/products",productRouters);


const adminProductRouters=require("./router/adminProductRoute");
app.use("/api/admin/products",adminProductRouters);

const cartRouters=require("./router/cartRoute");
app.use("/api/cart",cartRouters);

const cartItemRouter=require("./router/cartItemRoute");
app.use("/api/cart_items",cartItemRouter);

const orderRouters=require("./router/orderRoute");
app.use("/api/orders",orderRouters);

const reviewRouters=require("./router/reviewRoute");
app.use("/api/reviews",reviewRouters);

const ratingRouters=require("./router/ratingRoute");
app.use("/api/ratings",ratingRouters);

const adminOrderRouters=require("./router/adminProductRoute");
app.use("/api/admin/orders",adminOrderRouters);


















app.listen(PORT, () => {
    console.log(`App is running successfully at ${PORT}`);
});
