$( document ).ready(function() {
    // Get current date
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();
    currentDate = year + '-' + month + '-' + day;

    $.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-05-18&end_date=${currentDate}&api_key=DEMO_KEY`, function(data) {
        console.log(data);
    });
});