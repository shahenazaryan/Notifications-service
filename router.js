import Router from 'express'
import OptionController from "./controllers/optionController.js";
import {getOptionId, isWixRequest} from "./middlewares/middleware.js";
const router = new Router()


router.get('/',isWixRequest,getOptionId, OptionController.getForm7)
router.get('/form',isWixRequest,getOptionId, OptionController.getForm)
router.get('/form2',isWixRequest,getOptionId, OptionController.getForm5)

export default router;