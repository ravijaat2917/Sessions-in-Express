import express from 'express';
import studentController from "../controllers/studentController.js";

const router = express.Router();

router.get('/getsessioninfo' , studentController.get_session_info);
router.get('/deletesession' , studentController.delete_session);
router.get('/regnsession' , studentController.regnerate_session);
router.get('/examplesession' , studentController.session_example);

export default router ;