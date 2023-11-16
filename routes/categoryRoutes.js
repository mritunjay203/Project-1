import express from "express";
import { isAdmin, RequiredSignIn } from "../middlewares/authMiddleware.js";
import {
    
    
  categoryController,
    createCategoryController,
      deleteCategoryCOntroller,
      singleCategoryController,
      updateCategoryController } from "../controllers/categoryController.js";

// Create an instance of the Express router
const router = express.Router();

//  routes
// create category
router.post(
  "/create-category", // Add a leading slash
  RequiredSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put('/update-category/:id',
RequiredSignIn,
isAdmin,
updateCategoryController
);

//getALl category
router.get("/get-category", categoryController);
// single category
router.get("/single-category/:slug",singleCategoryController);

// delete category
router.delete("/delete-category/:id",RequiredSignIn,isAdmin,deleteCategoryCOntroller);

export default router;

