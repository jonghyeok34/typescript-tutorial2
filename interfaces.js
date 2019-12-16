var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: "Test",
    lastName: "Test",
    foo: 10,
    getFullName: function () { return "Test"; }
};
aPerson = someObj;
// aPerson.foo; // Property 'foo' does not exist on type 'Person'
