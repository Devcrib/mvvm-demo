var addressBook = function() {
    var _self = this;
    this.contacts = ko.observableArray();
    this.name = ko.observable();
    this.number = ko.observable();
    this.gender = ko.observable();

    this.addContact = function() {
        _self.contacts.push({ name: _self.name(), number: _self.number(), sex: _self.gender() });
        return false;
    }
}
var x = new addressBook();
ko.applyBindings(x);
