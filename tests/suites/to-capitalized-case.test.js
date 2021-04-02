const { expect } = require("chai");

const { toCapitalizedCase } = require("../../src");

module.exports = function ()
{
    it("should convert a snake_case string to a camelCase string.", function ()
    {
        expect(toCapitalizedCase("", "_")).to.equal("");
        expect(toCapitalizedCase("foo", "_")).to.equal("foo");
        expect(toCapitalizedCase("foo_bar_baz", "_")).to.equal("fooBarBaz");
        expect(toCapitalizedCase("foo_1a", "_")).to.equal("foo1a");
        expect(toCapitalizedCase("foo_1ab_ca", "_")).to.equal("foo1abCa");
        expect(toCapitalizedCase("foo_123ab_ca", "_")).to.equal("foo123abCa");
        expect(toCapitalizedCase("foo_a_123_bc_zx", "_")).to.equal("fooA123BcZx");
    });

    it("should convert a snake_case string to a PascalCase string.", function ()
    {
        expect(toCapitalizedCase("", "_", { capitalizeInitial : true })).to.equal("");
        expect(toCapitalizedCase("foo", "_", { capitalizeInitial : true })).to.equal("Foo");
        expect(toCapitalizedCase("foo_bar_baz", "_", { capitalizeInitial : true })).to.equal("FooBarBaz");
        expect(toCapitalizedCase("foo_1a", "_", { capitalizeInitial : true })).to.equal("Foo1a");
        expect(toCapitalizedCase("foo_1ab_ca", "_", { capitalizeInitial : true })).to.equal("Foo1abCa");
        expect(toCapitalizedCase("foo_123ab_ca", "_", { capitalizeInitial : true })).to.equal("Foo123abCa");
        expect(toCapitalizedCase("foo_a_123_bc_zx", "_", { capitalizeInitial : true })).to.equal("FooA123BcZx");
    });
};
