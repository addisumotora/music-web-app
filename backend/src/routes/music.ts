import express from 'express'
import { createMusic, deleteMusic, filterByParameter, findbyId, getMusics, updateMusic } from '../controllers/music'

const router = express.Router()

router.post('/create-music',createMusic);
router.get('/search', filterByParameter);
router.get('/musics', getMusics);
router.get('/:id', findbyId);
router.put('/:id', updateMusic);
router.delete('/:id', deleteMusic);

export default router;