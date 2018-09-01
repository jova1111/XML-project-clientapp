import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';

const defaultAttributes = {
    id: -1,
    subject: "",
    content: "",
}

export class Message {

    constructor(json) {
        assign(this, cloneDeep(defaultAttributes), json);
    }

}