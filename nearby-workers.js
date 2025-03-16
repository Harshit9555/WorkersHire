document.getElementById("findWorkersButton").addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showPosition(position) {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    // Dummy data for nearby workers (Replace with API calls later)
    const workers = [
        { name: "John Doe", job: "Electrician", lat: userLat + 0.01, lon: userLon + 0.01 },
        { name: "Jane Smith", job: "Plumber", lat: userLat - 0.02, lon: userLon - 0.02 },
        { name: "Mark Taylor", job: "Painter", lat: userLat + 0.03, lon: userLon - 0.01 }
    ];

    let workerList = "<h4>Nearby Workers</h4><ul class='list-group'>";
    workers.forEach(worker => {
        workerList += `<li class='list-group-item'><strong>${worker.name}</strong> - ${worker.job} (Location: ${worker.lat.toFixed(2)}, ${worker.lon.toFixed(2)})</li>`;
    });
    workerList += "</ul>";

    document.getElementById("workerResults").innerHTML = workerList;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
