const BloodyMary = require('../models/bloodyMarys');

async function getBloodyMary (req, res) {
  try {
    const bloodyMarys = await BloodyMary.find();
    res.status(200);
    res.json(bloodyMarys);
  } catch (error) {
    console.log('error GETTING', error); // ??
    res.sendStatus(500);
  }
}

async function postBloodyMary (req, res) {
  try {
    const newBloodyMary = await BloodyMary.create({
      location: req.body.location,
      rating: req.body.rating,
      price: req.body.price,
      venue: req.body.venue,
      spice: req.body.spice,
      hangover: req.body.hangover
    });
    res.status(201);
    res.json(newBloodyMary);
  } catch (error) {
    console.log('error POSTING', error); // ??
    res.sendStatus(500);
  }
}

async function deleteBloodyMary (req, res) {
  try {
    await BloodyMary.findByIdAndRemove(req.params.id); // TODO: or is it: _id?
    res.sendStatus(200);
  } catch (error) {
    console.log('error DELETING', error); // ??
    res.sendStatus(500);
  }
}

module.exports = {
  getBloodyMary,
  postBloodyMary,
  deleteBloodyMary
};