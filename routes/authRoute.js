import  express  from "express";
import {registerController,
        loginController,
        testController,
        forgotPasswordController,
        updateProfileController,
        getOrdersController,
        getAllOrdersController,
        orderStatusController,
        } from "../controllers/authController.js";
import { isAdmin,RequiredSignIn } from "../middlewares/authMiddleware.js";

//router object
const router=express.Router()

//routing 
// register || method post

router.post("/register",registerController);
//LOGIN || POST
router.post("/login",loginController);

// forgot password || post
router.post("/forgot-password", forgotPasswordController);


//test routes
router.get("/test",RequiredSignIn,isAdmin,testController);


      //protected user route auth
    router.get("/user-auth",RequiredSignIn, (req, res) => {
        res.status(200).send({ ok: true });
      });

     //protected Admin route auth
      router.get("/admin-auth", RequiredSignIn, isAdmin, (req, res) => {
        res.status(200).send({ ok: true });
      });

      //update profile
      router.put("/profile", RequiredSignIn, updateProfileController);


      //orders
      router.get("/orders", RequiredSignIn, getOrdersController);

      //all orders
      router.get("/all-orders", RequiredSignIn, isAdmin, getAllOrdersController);

     //// order status update
    router.put(
         "/order-status/:orderId",
              RequiredSignIn,
              isAdmin,
              orderStatusController
    );  



export default router;