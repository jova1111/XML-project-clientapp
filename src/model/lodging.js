import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';

const defaultFields = {
    place: "",
    guestNumber: 0,
    category: "",
    description: "",
    occupance: false,
    price: 0
}

export class Lodging {

    constructor(json) {
        if(!json) {
            assign(this, cloneDeep(defaultAttributes));
        } else {
            this.place = json.place;
            this.guestNumber = json.guestNumber;
            this.category = json.category.name;
            this.description = json.description;
            this.occupance = json.occupancy;
            this.price = json.price;
        }
    }

}