import Component from '../../framework/Component';
import { formatDayName } from '../../Services/constants';
import { formatDate } from '../../Services/constants';
import { formatTime } from '../../Services/constants';

export default class WeatherForecastItem extends Component {
  constructor(host, props = {}) {
    //debugger;
    super(host, props);
  }

  render() {
    let {
      dt: dt,
      main: { temp: temp },
      weather: [{ main: main, icon: icon }]
    } = this.props;
    return [
      {
        tag: 'div',
        content: formatDayName(dt, 'short'),
        attributes: [
          {
            name: 'id',
            value: 'next-day-name'
          }
        ],
        classList: ['next-day-name']
      },
      {
        tag: 'div',
        content: formatDate(dt, { day: 'numeric', month: 'numeric' }),
        attributes: [
          {
            name: 'id',
            value: 'next-date'
          }
        ],
        classList: ['next-date']
      },
      {
        tag: 'div',
        content: formatTime(dt),
        attributes: [
          {
            name: 'id',
            value: 'next-time'
          }
        ],
        classList: ['next-time']
      },
      {
        tag: 'div',
        content: '',
        attributes: [
          {
            name: 'id',
            value: 'next-icon'
          }
        ],
        classList: ['next-icon'],
        children: [
          {
            tag: 'img',
            attributes: [
              {
                name: 'src',
                value: `http://openweathermap.org/img/w/${icon}.png`
              }
            ]
          }
          // {
          //   tag: 'i',
          //   classList: ['wi', 'wi-day-cloudy']
          // }
        ]
      },
      {
        tag: 'div',
        content: main,
        attributes: [
          {
            name: 'id',
            value: 'next-description'
          }
        ],
        classList: ['next-description']
      },
      {
        tag: 'div',
        content: Math.floor(temp),
        attributes: [
          {
            name: 'id',
            value: 'next-temperature'
          }
        ],
        classList: ['next-temperature']
      }
    ];
  }
}
