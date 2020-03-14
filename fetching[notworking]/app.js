window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector("temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/bacbc0f931c5d17127caaaca62c52446/${long},${lat}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          //    const { temperature, summary } = data.currently;
          //      //set DOM Elements from the API
          //       temperatureDegree.textContent = temperature;
          //       temperatureDescription.textContent = summary;
        });
    });
  }
});
