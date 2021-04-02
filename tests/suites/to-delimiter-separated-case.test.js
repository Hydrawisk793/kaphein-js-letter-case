const { expect } = require("chai");

const { toDelimiterSeparatedCase } = require("../../src");

module.exports = function ()
{
    it("should convert a camelCase string to a kebab-case string.", function ()
    {
        expect(toDelimiterSeparatedCase("", "-")).to.equal("");
        expect(toDelimiterSeparatedCase("foo", "-")).to.equal("foo");
        expect(toDelimiterSeparatedCase("fooBarBaz", "-")).to.equal("foo-bar-baz");
        expect(toDelimiterSeparatedCase("foo1a", "-")).to.equal("foo-1a");
        expect(toDelimiterSeparatedCase("foo1abCa", "-")).to.equal("foo-1ab-ca");
        expect(toDelimiterSeparatedCase("foo123abCa", "-")).to.equal("foo-123ab-ca");
        expect(toDelimiterSeparatedCase("fooA123BcZx", "-")).to.equal("foo-a-123-bc-zx");
    });

    it("should convert a PascalCase string to a kebab-case string.", function ()
    {
        expect(toDelimiterSeparatedCase("", "-")).to.equal("");
        expect(toDelimiterSeparatedCase("Foo", "-")).to.equal("foo");
        expect(toDelimiterSeparatedCase("FooBarBaz", "-")).to.equal("foo-bar-baz");
        expect(toDelimiterSeparatedCase("Foo1a", "-")).to.equal("foo-1a");
        expect(toDelimiterSeparatedCase("Foo1abCa", "-")).to.equal("foo-1ab-ca");
        expect(toDelimiterSeparatedCase("Foo123abCa", "-")).to.equal("foo-123ab-ca");
        expect(toDelimiterSeparatedCase("FooA123BcZx", "-")).to.equal("foo-a-123-bc-zx");
    });
};
