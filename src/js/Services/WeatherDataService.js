const API_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=`;
const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=`;
const API_KEY = "0f034f0e9216aaa8ed94c3d87af01e18";

class WeatherDataService {
  getCurrentWeather(query) {
    let [city] = query;
    return fetch(
      `${API_CURRENT_WEATHER}${city}&appid=${API_KEY}&units=metric`
    ).then(response => {
      if (response.ok) return response.json();
      return Promise.reject("Weather Server responded " + response.status);
    });
  }

  getWeatherForecast(query) {
    let [city] = query;
    return fetch(`${API_FORECAST}${city}&appid=${API_KEY}&units=metric`).then(
      response => {
        if (response.ok) return response.json();
        return Promise.reject("Weather Server responded " + response.status);
      }
    );
  }

  getAllWeatherByCityName(query) {
    return Promise.all([
      this.getCurrentWeather(query),
      this.getWeatherForecast(query)
    ]);
  }

  //   subscribeForCurrentWeather(callback) {}
}

export default new WeatherDataService();
