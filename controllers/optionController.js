import Option from "../models/Option.js";
import OptionService from "../services/OptionService.js";

class OptionController {
    async getForm(req, res) {
        try {
            var form = await OptionService.getForm(req.query);
            if(!form || !form.length)
                form = await OptionService.create(req.query);
            return res.json(form);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getForm5(req, res) {
        var obj = {key:"Tiko3",namne:"key"}
        res.status(200).json(obj)
    }

    async getForm7(req, res) {
        var obj = {key:"service_c",namne:"key"}
        res.status(200).json(obj)
    }
    
}


export default new OptionController();