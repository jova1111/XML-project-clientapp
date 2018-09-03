import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';

const defaultAttributes = {
    id: -1,
    reservation: "",
    content: "",
    rating: 1
}

export class Comment {

    constructor(json) {
        assign(this, cloneDeep(defaultAttributes), json);
    }

}