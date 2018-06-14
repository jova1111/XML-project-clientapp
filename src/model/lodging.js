import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';

const defaultAttributes = {
    id: "-1",
    place: "",
    guestNumber: 0,
    category: "",
    description: "",
    occupancy: false,
    price: 0,
    fromDate: 0,
    toDate: 0
}

export class Lodging {

    constructor(json) {
        assign(this, cloneDeep(defaultAttributes), json);
        if(json) {
            this.category = json.category.name;
        }
    }

}