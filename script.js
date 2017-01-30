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
                    <td><a href="http://www.imdb.com/${a.link}"><img src="${a.poster}"/></a></td>

            </tr>`)
        })
    };
    addMovies(moviesJson, moviesContainer);
    // ------------------------------------------------------------------------

    // SEARCH MOVIES
    $(document).ready(function () {
        let $rows = $('#myTable tr');
        $('#search').keyup(function () {
            let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

            $rows.show().filter(function () {
                let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                return !~text.indexOf(val);
            }).hide();
        });
    });
    // ------------------------------------------------------------------------

};
