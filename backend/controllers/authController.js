import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, phone, dropdown, messages } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }

    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!dropdown) {
      return res.send({ message: "Dropdown is Required" });
    }
    if (!messages) {
      return res.send({ message: "Message is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Email is already submitted",
      });
    }
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      dropdown,
      messages,

    }).save();

    res.status(201).send({
      success: true,
      message: "Sumbitted Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Submission",
      error,
    });
  }
};



//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};