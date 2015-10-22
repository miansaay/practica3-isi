

describe("Pruebas con login y logout", function(){
  beforeEach(function(done){
    Meteor.loginWithPassword("pepe@gmail.com", "mipassword", function(err){
      Tracker.afterFlush(done);
    });
  });
  afterEach(function(done){
    Meteor.logout(function() {
      Tracker.afterFlush(done);
    });
  });
  it("después de login muestra input para añadir players", function(){
    $("[name=playerName]").val("Albert Einstein");
    $(".addPlayer").submit();
    expect(Players.findOne({name: "Albert Einstein"}).name).toBe("Albert Einstein");
    expect(Players.findOne({name: "Albert Einstein"}).createdBy).toBe(Meteor.userId());
  });
});
