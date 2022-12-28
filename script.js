// const form = document.getElementById('form');

// function get_value() {
//     value = document.getElementById("url_input").value;

// }

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.tracker.gg/api/v2/rocket-league/standard/profile/steam/itseth', true);
xhr.onload = function() {
  if (this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    // use the data here
  }
};
xhr.send();
