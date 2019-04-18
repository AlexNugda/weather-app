import Component from '../../framework/Component';
import { SearchBar } from '../SearchBar';
import { CurrentWeather } from '../CurrentWeather';
import { WeatherForecast } from '../WeatherForecast';
import { FavouriteLocations } from '../FavouriteLocations';
import { SearchHistory } from '../SearchHistory';
import WeatherDataService from '../../Services/WeatherDataService';

export default class App extends Component {
  constructor(host) {
    super(host);
    // this.state = { currentWeather: {} };
  }

  onUserInput(userInput = '') {
    if (userInput) {
      WeatherDataService.getAllWeatherByCityName([userInput]).then(
        //console.log
        // userInput => this.onResponse(userInput);
        this.onResponse
      );
    }
  }

  init() {
    this.updateState = this.updateState.bind(this);
    this.onResponse = this.onResponse.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
    WeatherDataService.getAllWeatherByCityName(['kiev']).then(this.onResponse);
  }

  onResponse(weatherResponse) {
    console.log('weather state', weatherResponse);
    const weather = {
      currentWeather: weatherResponse[0],
      weatherForecast: weatherResponse[1]
    };
    console.log('all Weather', weather);
    //debugger;
    this.updateState(weather);
  }

  render() {
    //debugger;
    console.log('render: this.state', this.state);
    return [
      {
        tag: 'div',
        classList: ['error']
      },
      {
        tag: 'div',
        classList: ['main-content'],
        props: {},
        children: [
          {
            tag: SearchBar,
            classList: ['search-bar'],
            props: {
              whenUserInputReady: this.onUserInput
            }
          },
          {
            tag: CurrentWeather,
            props: {
              weather: this.state.currentWeather
            },
            classList: ['today-forecast']
          },
          {
            tag: WeatherForecast,
            props: {
              weather: this.state.weatherForecast
            },
            classList: ['future-forecast']
          }
        ]
      },
      {
        tag: 'div',
        classList: ['favorite-history-wrapper'],
        children: [
          {
            tag: FavouriteLocations,
            classList: ['favorite-list']
          },
          {
            tag: SearchHistory,
            classList: ['recent-list']
          }
        ]
      }
    ];
  }
}
