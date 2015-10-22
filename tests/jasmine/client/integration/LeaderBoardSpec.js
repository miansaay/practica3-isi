var selectGraceHopper = function (callback) {
  Session.set("selected_player", Players.findOne({name: "Grace Hopper"})._id);
  if (callback) {
    Deps.afterFlush(callback);
  }
};

var unselectPlayer = function () {
  Session.set("selected_player", null);
};

describe("Point Assignment", function () {
  beforeEach(function (done) {
    selectGraceHopper(done);
  });

  it("should take of a player 5 points when he is selected and the button is pressed", function () {
    var graceInitialPoints = Players.findOne({name: "Grace Hopper"}).score;
    $("input.decrement").click();
    expect(Players.findOne({name: "Grace Hopper"}).score).toBe(graceInitialPoints - 5);
  });
});

describe("Player delete", function (){
  beforeEach(function (done) {
    selectGraceHopper(done);
  });

  xit("should not find deleted player in the list", function (){
    $("input.remove").click();
    expect(Players.findOne({name: "Grace Hopper"})).toEqual(undefined);
  });

});
