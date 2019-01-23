{
  ("use strict");
  // use promises
  // getWeather(2487956);
  // getWeather(44418);

  // use async/await
  // weather(2487956);
  // weather(44418, true); // returns weather for tomorrow

  function getWeather(woeid) {
    fetch(`https://www.metaweather.com/api/location/${woeid}/`)
      .then(response => {
        // console.dir(response);
        return response.json();
      })
      .then(data => {
        // console.dir(data);
        const weatherToday = data.consolidated_weather[0];
        const minT = weatherToday.min_temp.toFixed(2);
        const maxT = weatherToday.max_temp.toFixed(2);
        console.log(
          `Today^${weatherToday.applicable_date}: In ${
            data.title
          } temparature between ${minT}C and ${maxT}C `
        );
      })
      .catch(error => console.error(error));
  }

  async function weather(woeid, bool) {
    try {
      const weather = await fetch(
        `https://www.metaweather.com/api/location/${woeid}/`
      );
      const weatherData = await weather.json();
      let weatherToday = weatherData.consolidated_weather[0];
      let minT = weatherToday.min_temp.toFixed(2);
      let maxT = weatherToday.max_temp.toFixed(2);
      if (bool) {
        weatherToday = weatherData.consolidated_weather[1];
      }

      console.log(
        `${bool ? "tomorrow" : "today"}^${weatherToday.applicable_date}: In ${
          weatherData.title
        } temparature between ${minT}C and ${maxT}C `
      );
    } catch (error) {
      console.warn(error);
    }
  }
}
