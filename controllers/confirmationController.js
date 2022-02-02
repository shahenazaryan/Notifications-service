import Confiormation from "../models/Confirmation.js";
import OptionService from "../services/OptionService.js";

class ConfirmationController {
    async getForm5(req, res) {
        console.log(req);
        console.log(res);
        var obj = {key:"Tiko3",namne:"key"}
        res.status(200).json(obj)
    }

    async getForm7(req, res) {
        var obj = {key:"service_c",namne:"key"}
        res.status(200).json(obj)
    }
    
}


export default new ConfirmationController();