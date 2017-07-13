var Robot = require("./robot-name");

describe("Robot", function() {
  // NOTE: The 'beforeEach()' and 'afterEach()' act as setup/teardown for this
  // test suite. See more: http://jasmine.github.io/2.0/introduction.html
  var robot;

  beforeEach(function() {
    robot = new Robot();
  });

  afterEach(function() {
    robot = null;
  });

  it("has a name", function() {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });
});
