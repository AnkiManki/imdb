let moviesContainer = $('tbody');

let request = new XMLHttpRequest;
request.open('GET', 'https://raw.githubusercontent.com/VampDude/JsonTest/master/json', true);
request.send(null);
request.onload = function () {
    let moviesJson = JSON.parse(request.responseText);

    // ADD JSON FILE TO THE TABLE
    let addMovies = function (moviesJson, moviesContainer) {
        moviesJson.forEach(function (a) {
            moviesContainer.append(`<tr>
                    <td>${a.title}</td>
                    <td>${a.year}</td>
                    <td>${a.rating}</td>
                    <td><a href="http://www.imdb.com${a.link}"><img src="${a.poster}"/></a></td>

            </tr>`)
        })
    };
    addMovies(moviesJson, moviesContainer);
    // ------------------------------------------------------------------------

    // SEARCH MOVIES
    $(document).ready(function () {
        let $rows = $('#myTable tr');
        $('#search').keyup(function () {
            // trim <- ja faka vrednosta od search poleto i gi vadi praznite mesta od levo i desno.
            // replace(/ +/g, ' ') <- ako ima poveke od edno prazno mesto ke gi skratime da bide samo edno.
            let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

            $rows.show().filter(function () {
                let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                return !~text.indexOf(val);
            }).hide();
        });
    });
    // ------------------------------------------------------------------------




};

// // PAGES
// let pageSize = 25;
// let pageNumber = 1;
// let movies = [];
// let filterMovies = [];

// let removeRows = function (moviesContainer) {
//     moviesContainer.html("");
// }

// let displayPage = (pageNumber, pageSize, moviesJson, moviesContainer) => {
//     removeRows(moviesContainer);
//     let startIndex = (pageNumber - 1) * pageSize;
//     let endIndex = pageNumber * pageSize;
//     let displayMovies = moviesJson.slice(startIndex, endIndex);
//     displayMovies.forEach(b => addMovies(b, moviesContainer));
// }

// displayPage(pageNumber, pageSize, moviesJson, moviesContainer);
// // ------------------------------------------------------------------------



// SORTING
