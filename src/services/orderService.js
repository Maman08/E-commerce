const cartService = require("./cartService");
const Address = require("../models/AddressModel");
const Order = require("../models/orderModel");
const OrderItem = require("../models/orderItems");



// async function createOrder(user,shippAddress){
//     let address;
//     if(shippAddress._id){
//         let existAddress= await Address.findById(shippAddress._id);
//         address=existAddress;
//     }
//     else{
//         address=new Address(shippAddress);
//         address.user=user;
//         await address.save();
//         user.address.push(address);
//         await user.save();
//     }
//     const cart=await cartService.findUserCart(user._id);
//     const orderItems=[];
//     for(const item of cart.cartItems){
//         const orderItem=new OrderItem({
//             product: item.product, // Assuming item.product is the ObjectId of the product
//             size: item.size,
//             quantity: item.quantity,
//             price: item.price,
//             discountedPrice: item.discountedPrice,
//             userId: item.userId,
//         })
//         const createdOrderItem=await orderItem.save();
//         orderItems.push(createdOrderItem._id);
//     }
//     const createdOrder= new Order({
//         user: user,
//         orderItems: orderItems,
//         totalPrice: cart.totalPrice,
//         totalDiscountedPrice: cart.totalDiscountedPrice,
//         discounte: cart.discounte,
//         totalItem: cart.totalItem,
//         shippAddress: address,
//         orderDate: new Date(),
//     })
//     const saveOrder= await createdOrder.save();
//     return saveOrder;
// }


async function createOrder(user, shippingAddress) {
    let address;

    if (shippingAddress._id) {
        address = await Address.findById(shippingAddress._id);
    } else {
        address = new Address(shippingAddress);
        address.user = user._id; // Reference the user by ObjectId
        await address.save();
        user.address.push(address._id); // Store address ObjectId in the user's addresses array
        await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            product: item.product, // Assuming item.product is the ObjectId of the product
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            discountedPrice: item.discountedPrice,
            userId: user._id, // Reference the user by ObjectId
        });
        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem._id); // Push the ObjectId of the created order item
    }

    const createdOrder = new Order({
        user: user._id, // Reference the user by ObjectId
        orderItems: orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discounte: cart.discounte,
        totalItem: cart.totalItem,
        shippAddress: address._id, // Reference the address by ObjectId
        orderDate: new Date(), // Include the orderDate field with the current date
    });

    const savedOrder = await createdOrder.save();
    return savedOrder;
}



async function placrOrder(orderId){
    const order=await findOrderById(orderId);
    order.orderStatus="PLACED";
    order.paymentDetails.status="COMPLETED";
    return await order.save();
}

async function confirmedOrder(orderId){
    const order=await findOrderById(orderId);
    order.orderStatus="CONFIRMED";
    return await order.save();
}

async function shipOrder(orderId){
    const order=await findOrderById(orderId);
    order.orderStatus="SHIPED";
    return await order.save();
}

async function deliverOrder(orderId){
    const order=await findOrderById(orderId);
    order.orderStatus="DELIVERED";
    return await order.save();
}

async function cancleOrder(orderId){
    const order=await findOrderById(orderId);
    order.orderStatus="CANCLED";
    return await order.save();
}

async function findOrderById(orderId){
    const order = await Order.findById(orderId).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress");
    return order;

}

async function usersOrderHistory(userId){
    try{
         const orders=await Order.find({user:userId,orderStatus:"PLACED"}).populate({path:"orderItems",populate:{path:"product"}}).lean();
         return orders;
    }catch(error){
throw new Error(error.message);
    }
}


async function getAllOrders(){
    return await Order.find().populate({path:"orderItems",populate:{path:"product"}}).lean();
}

async function deleteOrder(orderId){
    const order=await findOrderById(orderId);
   await Order.findByIdAndDelete(order._id);
}

module.exports={
    createOrder,placrOrder,confirmedOrder,shipOrder,deliverOrder,cancleOrder,findOrderById,usersOrderHistory,getAllOrders,deleteOrder
 }