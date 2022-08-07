const ErrorHander = require('../utils/ErrorHander')
const asyncErrors = require('../middleware/asyncErrors')
const Pins = require('../models/pinModel')
const ApiFeatures = require('../utils/ApiFeatures')
const cloudinary = require('cloudinary')


//Creating a Pin
exports.createPin = asyncErrors(async (req, res, next) => {


  req.body.postedBy = {
    user: req.user._id,
    image: req.user.image,
    name: req.user.name
  }

  let image = req.body.image


  const result = await cloudinary.v2.uploader.upload(image, {
    folder: 'Share-with-us',
  })

  let imageLinks = {
    public_id: result.public_id,
    url: result.secure_url
  }

  req.body.image = imageLinks

  const pins = await Pins.create(req.body)
  res.status(201).json({
    success: true,
    pins
  })


})



//Get All Pins
exports.getAllpins = asyncErrors(async (req, res, next) => {

  const pinsCount = await Pins.countDocuments()
  // const resultPerPage = 10;
  const apiFeatures = new ApiFeatures(Pins.find(), req.query).search().filter()

  let pins = await apiFeatures.query;
  let filteredPinsCount = pins.length
  // apiFeatures.pagination(resultPerPage)

  pins = await apiFeatures.query.clone();


  res.status(200).json({
    success: true,
    pins,
    pinsCount,
    // resultPerPage,
    filteredPinsCount

  })
})


//Single pin details
exports.pinDetails = asyncErrors(async (req, res, next) => {
  const pins = await Pins.findById(req.params.id)
  res.status(200).json({
    success: true,
    pins
  })
})


//Create who saves

exports.createsavePins = asyncErrors(async (req, res, next) => {
  const { pinId } = req.body;

  const savePins = {
    user: req.user._id,
    name: req.user.name,
  };



  const pins = await Pins.findById(pinId);

  pins.saves.push(savePins)


  await pins.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    pins
  });
});

//Delete Pins
exports.deletePin = asyncErrors(async (req, res, next) => {
  let pin = await Pins.findById(req.params.id)

  if (!pin) {
    return next(new ErrorHander('Pin not found', 404))
  }

  // Delete from cloudinary


  await cloudinary.v2.uploader.destroy(pin.image.public_id)



  await pin.remove()

  res.status(200).json({
    success: true,
    message: 'Pin has been deleted'
  })

})


//create comments

exports.createComments = asyncErrors(async (req, res, next) => {

  const { pinId } = req.body;

  const pins = await Pins.findById(pinId);

  if (!pins) {
    return next(new ErrorHander('Pin not found', 404))
  }

  const comments = {
    
    name: req.user.name,
    image: req.user.image,
    comment : req.body.comment,
    user : req.user._id
  
  };

  pins.comment.push(comments)


  await pins.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//Delete a comment
exports.deleteComment = asyncErrors(async (req, res, next) => {

  const { pinId , commentId } = req.body;

  const pins = await Pins.findById(pinId)

  const comment = pins.comment.filter((rev) => rev._id.toString() !== commentId )

  await Pins.findByIdAndUpdate(pinId, {
    comment
  }, {
    new: true,
    useValidators: true
  })

  res.status(200).json({
    success: true
  })

})