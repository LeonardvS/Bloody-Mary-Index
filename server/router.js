const router = require('express').Router();
const bloodyMarys = require('./controllers/bloodyMarys');

router
  .get('/bloodyMarys', bloodyMarys.getBloodyMary)
  .post('/bloodyMarys', bloodyMarys.postBloodyMary) // TODO: right path?
  .delete('/bloodyMarys/:id', bloodyMarys.deleteBloodyMary);

module.exports = router;