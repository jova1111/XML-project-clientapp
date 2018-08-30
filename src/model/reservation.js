import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';

const defaultAttributes = {
    Activated: false
}
export class Reservation {

    constructor(json) {
        assign(this, cloneDeep(defaultAttributes), json);
    }
}