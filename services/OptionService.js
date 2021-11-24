import Option from "../models/Option.js";

class OptionService {

    async create(request) {
        const createdForm = await Option.create(request);
        return createdForm;
    }

    async getForm(request) {
        const form = await Option.find({ comp_id: request.comp_id, instance: request.instance });
        return form;
    }

    async getUserForms() {
        const forms = await Option.find({ instance: request.instance });
        return forms;
    }
}


export default new OptionService();