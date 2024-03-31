import Category from "../models/category.model.js";
import { errorHandler } from "../utils/error.js";

export const getCategory = async(req, res, next) => {
    try {
        if(req.user.id !== req.params.userId) {
            return next(errorHandler(400, "You are not authorized to see that user category."))
        }
        const getCategory = await Category.find({userId: req.params.userId});
        res.status(200).json(getCategory);
    } catch (error) {
        return next(error)
    }
}

export const createCategory = async(req, res, next) => {
    const {categoryName, categoryImage} = req.body;
    if (
        !categoryName ||
        categoryName === ""
      ) {
        return next(errorHandler(400, "All fields are required"));
      }
    try {
        if(req.user.id !== req.params.userId) {
            return next(errorHandler(400, "You are not authorized to create that user category."))
        }
        const createCategory = new Category({categoryName, categoryImage, userId: req.params.userId});
        await createCategory.save();
        res.status(200).json(createCategory);
    } catch (error) {
        return next(error)
    }
}

export const deleteCategory = async(req, res, next) => {
    try {
        if(req.user.id !== req.params.userId) {
            return next(errorHandler(400, "You are not authorized to delete that user category."))
        }
        await Category.findByIdAndDelete(req.params.categoryId)
        res.status(200).json({message: "category deleted Successfully"})
    } catch (error) {
        return next(error)
    }
}