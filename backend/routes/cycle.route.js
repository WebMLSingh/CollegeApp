import express from 'express';
import { createCycle, deleteCycle, findCycle, updateCycleExitTime, findAllCycle } from '../controllers/cycle.controller.js';

const cycleRouter = express.Router();

cycleRouter.post('/createcycle', createCycle);
cycleRouter.get('/findcycle', findCycle);
cycleRouter.delete('/deletecycle/:_id', deleteCycle);

cycleRouter.put('/:cycleId/update-exit', updateCycleExitTime);
cycleRouter.get('/findallcycle', findAllCycle);

export default cycleRouter;