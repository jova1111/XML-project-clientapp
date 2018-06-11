export default class {

    constructor(json) {
        if(!json) {
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.password = "";
        } else {
            json = JSON.parse(json);
            this.firstName = json.firstName;
            this.lastName = json.lastName;
            this.email = json.email;
            this.password = json.password;
        }
    }

}