const{Router} = require('express');
const comicsController = require ('../controllers/comicsController')

const router = Router();

router.post('/', comicsController.createComic);
router.get('/', comicsController.readComics);
router.get('/filter/:query', comicsController.readComicQuery);
router.get('/:id', comicsController.readComic);
router.put('/:id', comicsController.updateComic);
router.delete('/:id', comicsController.deleteComic);

module.exports = router; 