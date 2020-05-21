$( document ).ready(function() {
    // Get current date
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();
    currentDate = year + '-' + month + '-' + day;

    $.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=DEMO_KEY`, function(data) {
        console.log(data)
        displayData(data, currentDate);
    });
});

function displayData(data, currentDate){
    tableHtml = "<table><tr><th>Name</th><th>Diameter</th><th>Hazardous?</th><th>Close Approach Date</th><th>Close Approach Distance</th></tr>";
    data["near_earth_objects"][currentDate].forEach(element => {
        tableHtml += `<tr><td>${element["name"]}</td><td>Max: ${element["estimated_diameter"]["meters"]["estimated_diameter_max"]} Min: ${element["estimated_diameter"]["meters"]["estimated_diameter_min"]}</td><td>${element["is_potentially_hazardous_asteroid"]}</td>`;
        tableHtml += `<td>${element["close_approach_data"][0]["close_approach_date_full"]}</td><td>${element["close_approach_data"][0]["miss_distance"]["kilometers"]}</td></tr>`;
    });
    tableHtml += "</table>";
    $("#main").html(tableHtml);
}