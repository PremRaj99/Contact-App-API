import Contact from "../models/contact.model.js";
import { errorHandler } from "../utils/error.js";

export const getContact = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.userId) {
      return next(
        errorHandler(400, "You are not authorized to see that user contact.")
      );
    }
    const getContact = await Contact.find({
      categoryId: req.params.categoryId,
    });
    res.status(200).json(getContact);
  } catch (error) {
    return next(error);
  }
};

export const createContact = async (req, res, next) => {
  const { name, phoneNumber, email, photo } = req.body;
  if (
    !name ||
    !phoneNumber ||
    name === "" ||
    phoneNumber === ""
  ) {
    return next(errorHandler(400, "Name and Phone Numbers are required."));
  }
  try {
    if (req.user.id !== req.params.userId) {
      return next(
        errorHandler(
          400,
          "You are not authorized to create that user contact."
        )
      );
    }
    const createContact = new Contact({
      name,
      phoneNumber,
      userId: req.params.userId,
      categoryId: req.params.categoryId,
      email,
      photo,
    });
    await createContact.save();
    res.status(200).json(createContact);
  } catch (error) {
    return next(error);
  }
};

export const deleteContact = async(req, res, next) => {
  try {
      if(req.user.id !== req.params.userId) {
          return next(errorHandler(400, "You are not authorized to delete that user category."))
      }
      await Contact.findByIdAndDelete(req.params.contactId)
      res.status(200).json({message: "contact deleted Successfully"})
  } catch (error) {
      return next(error)
  }
}