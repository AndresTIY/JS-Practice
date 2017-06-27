var Acronyms = require("./acronym.js");

describe("Acronyms are produced from", function() {
  var acronyms = new Acronyms();
  it("title cased phrases", function() {
    expect(acronyms.parse("Portable Network Graphics")).toEqual("PNG");
  });

  it("other title cased phrases", function() {
    expect(acronyms.parse("Ruby on Rails")).toEqual("ROR");
  });

  it("inconsistently cased phrases", function() {
    expect(acronyms.parse("HyperText Markup Language")).toEqual("HTML");
  });

  it("phrases with punctuation", function() {
    expect(acronyms.parse("First In, First Out")).toEqual("FIFO");
  });

  it("other phrases with punctuation", function() {
    expect(acronyms.parse("PHP: Hypertext Preprocessor")).toEqual("PHP");
  });

  it("phrases with punctuation and sentence casing", function() {
    expect(acronyms.parse("Complementary metal-oxide semiconductor")).toEqual(
      "CMOS"
    );
  });
});
