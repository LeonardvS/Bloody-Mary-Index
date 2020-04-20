const router = require('express').Router();
const bloodyMarys = require('./controllers/bloodyMarys');

router
  .get('/bloodyMarys', bloodyMarys.getBloodyMarys)
  .post('/bloodyMarys', bloodyMarys.postBloodyMary) // ??? right path
  .delete('/bloodyMarys/:id', bloodyMarys.deleteBloodyMary);

module.exports = router;