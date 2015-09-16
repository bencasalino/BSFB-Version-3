describe('Ticket', function() {
      it("creates a new ticket with the given specifications", function() {
        var testTicket = new Ticket("Straight Outta Compton", true, false, 25);
        expect(testTicket.movieTitle).to.equal("Straight Outta Compton");
        expect(testTicket.matinee).to.equal(true);
        expect(testTicket.newRelease).to.equal(false);
        expect(testTicket.userAge).to.eql(25);
      });

      it("calculates ticket price based on matinee", function() {
          var testTicket = new Ticket("Straight Outta Compton", true, false, 25);
          expect(testTicket.price()).to.equal(5);
      });

      it("calculates ticket price based on non-matinee", function() {
          var testTicket = new Ticket("Straight Outta Compton", false, true, 25);
          expect(testTicket.price()).to.equal(10);
      });

      it("calculates ticket price based on matinee and new release", function() {
          var testTicket = new Ticket("Straight Outta Compton", true, false, 25);
          expect(testTicket.price()).to.equal(5);
      });

      it("calculates ticket price based on age", function() {
          var testTicket = new Ticket("Straight Outta Compton", true, false, 65);
          expect(testTicket.price()).to.equal(5);
      });


});


describe('Movie', function() {
    it("creates a new ticket with the given specifications", function()  {
        var testMovie = new Movie("Straight Outta Portland", ["08:00", "12:00"] , false);
        expect(testMovie.movieTitle).to.equal("Straight Outta Portland");
        expect(testMovie.times).to.eql(["08:00", "12:00"]);
        expect(testMovie.newRelease).to.eql(false);
    });
});
