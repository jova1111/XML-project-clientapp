import assign from 'lodash/assign';
import cloneDeep from 'lodash/cloneDeep';

const defaultAttributes = {
    id: "-1",
    location: "",
    guestNumber: 0,
    category: "",
    description: "",
    occupancy: false,
    price: 0,
    images: []
}

export class Lodging {

    constructor(json) {
        assign(this, cloneDeep(defaultAttributes), json);
        if(json) {
         //   this.category = json.category.categoryName;
            this.images = json.imageUrls.map(el => el.url);
         //   this.periods = json.periods.map(el => ({ dateFrom: el.dateFrom, dateTo: el.dateTo }))
        }
    }

}