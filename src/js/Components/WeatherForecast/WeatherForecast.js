import Component from '../../framework/Component';
import { WeatherForecastItem } from '../WeatherForecastItem';

export default class WeatherForecast extends Component {
  constructor(host, props = {}) {
    //debugger;
    super(host, props);
    host.addEventListener('click', event => this.handleSearch(event));
  }

  handleSearch(event) {
    console.log(event);
  }

  render() {
    let forecastItemsFiltered = this.props.weather.list.filter((item, i) => i % 4 === 0);
    forecastItemsFiltered = forecastItemsFiltered.slice(0, forecastItemsFiltered.length - 1);

    return forecastItemsFiltered.map((forecastItem, i) => {
      return {
        tag: WeatherForecastItem,
        props: { ...forecastItem },
        classList: ['next-forecast']
      };
    });
  }
}
