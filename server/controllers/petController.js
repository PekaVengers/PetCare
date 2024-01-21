// IMPORTS -
const ErrorHandler = require("../utils/errorHandler");
const AsyncErr = require("../middlewares/asyncErr");
const userModel = require("../models/userModel");
const petModel = require("../models/petModel");

// CREATE A PET - 
const createPet = AsyncErr(async (req, res, next)  => {
    
})