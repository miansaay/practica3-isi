describe('PlayersService', function () {
  'use strict';

  describe('takePlayer', function () {
    it('should take out 5 points to the player score with the given id', function () {
      var playerId = 1;
      spyOn(Players, 'update');

      PlayersService.takePlayer(playerId);
      expect(Players.update.calls.argsFor(0)).toEqual([playerId, {$inc: {score: -5}}]);
    });
  });

  describe('deletePlayer', function(){
    it("should delete the selected player from the list", function () {
      var playerId = 1;
      spyOn(Players, 'remove');
      PlayersService.deletePlayer(playerId);
      expect(Players.remove.calls.argsFor(0)).toEqual([{_id: playerId}]);

  });

  describe("addPlayer", function(){
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
    it("should add a player to the list", function(){
      //PlayerName = "Albert Einstein";
      //PlayerId = Meteor.userId();
      spyOn(Players, 'insert');
      PlayersService.addPlayer("Albert Einstein");
      expect(Players.insert.calls.argsFor(0)).toEqual([{name: "Albert Einstein", score: 0,
             createdBy: Meteor.userId()}]);

      });
   });
});


});
