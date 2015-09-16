function Ticket(movieTitle, matinee, newRelease, userAge) {
    this.movieTitle = movieTitle;
    this.matinee = matinee;
    this.newRelease = newRelease;
    this.userAge = userAge;
}

Ticket.prototype.price = function() {
    if ((this.matinee === true) || (this.newRelease === false) || (this.age >= 65)) {
        return 5;
    } else {
        return 10;
    }
}


function Movie (movieTitle, times, newRelease) {
    this.movieTitle = movieTitle;
    this.times = times;
    this.newRelease = newRelease;
}

Movie.prototype.listTimes = function() {
    $("#show-movie-times").empty();
    this.times.forEach(function(time) {
        $("#show-movie-times").append('<div class="new-time"' +
                                            '<div class = "form-group">' +
                                            '<label for="movie-time">' +
                                            '<input type="radio" name="movie-time" value="time">' + time + '<br>');
                                        });
    $("#times").show();
}

var movies = [];

var straightOuttaCompton = new Movie("Straight Outta Compton", ["1000", "1215", "1630", "1945", "2200"], false);
var madMax = new Movie("Mad Max: Fury Road", ["1030", "1200", "1645", "1900", "2115"], false);
var jurassicWorld = new Movie("Jurassic World", ["1245", "1600", "1915", "2000"], false);
var everest = new Movie("Everest", ["1030", "1200", "1645", "1900", "2115"], true);
var mazeRunner = new Movie("Maze Runner: The Scorch Trials", ["1000", "1215", "1630", "1945", "2200"], true);
var starWars = new Movie("Star Wars: The Force Awakens", ["23:59"], true);

movies.push(straightOuttaCompton, madMax, jurassicWorld, everest, mazeRunner, starWars);


function sortMovies() {
    movies.sort(function(obj1, obj2) {
        if(obj1.movieTitle > obj2.movieTitle) {
            return 1;
        }
        if(obj1.movieTitle < obj2.movieTitle) {
            return -1;
        }
        return 0;
    });
}

function listMovies() {
    movies.forEach(function(movie, index) {
        $("#show-movie-list").append('<div class="new-movie"' +
                                        '<div class = "form-group">' +
                                        '<label for="selected-movie">' +
                                        '<input type="radio" name="selected-movie" value=' + index + '>' +   movie.movieTitle + '<br>');
    });
    // onclick="javascript: submit()"
}

function matineeCheck(selectedTime) {
    if(selectedTime< 1600) {
        return true;
    } else {
        return false;
    }
}

function displayTicket(newTicket) {
    $("#ticket").empty();
    var newTicketPrice = newTicket.price();
    $("#ticket").append('<p>Your ticket for ' + newTicket.movieTitle + ' will cost ' + newTicketPrice + '</p>');
    $("#ticket").show();
}


$(document).ready(function() {
    sortMovies();
    listMovies();

    $("form#movies").submit(function(event) {
        event.preventDefault();
        var selectedMovieIndex = $("input:checked").val();
        var selectedMovie = movies[selectedMovieIndex];
        console.log(selectedMovie);
        selectedMovie.listTimes();

        $("form#times").submit(function(event) {
            event.preventDefault();
            var selectedTimeIndex = $("input:checked").val();
            var selectedTime = movies[selectedMovieIndex].times[selectedTimeIndex];
            var matinee = matineeCheck(selectedTime);

            $("#age").show();
            $("form#age").submit(function(event) {
                event,preventDefault();
                var inputtedAge = parseInt($("input#inputted-age").val());
                var newTicket = new Ticket(selectedMovie.movieTitle, matinee, selectedMovie.newRelease, inputtedAge);
                displayTicket(newTicket);
            });
        });
    });


});
