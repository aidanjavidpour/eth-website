// const form = document.getElementById('form');

// function get_value() {
//     value = document.getElementById("url_input").value;

// }

fetch('https://api.tracker.gg/api/v2/rocket-league/standard/profile/steam/itseth')
  .then((response) => response.json())
  .then((data) => console.log(data));