import Component from '../../framework/Component';
import { formatDayName } from '../../Services/constants';
import { formatDate } from '../../Services/constants';

export default class CurrentWeather extends Component {
  constructor(host, props = {}) {
    super(host, props);
  }

  //   init() {

  //   }

  render() {
    const {
      dt,
      name,
      main: { temp: temp, humidity: humidity, pressure: pressure },
      weather: [{ description: description, icon: icon }],
      wind: { speed: speed }
    } = this.props.weather;
    //debugger;
    return [
      {
        tag: 'div',
        classList: ['city'],
        children: [
          {
            tag: 'div',
            //content: "Vinnytsya,UA",
            content: name,
            attributes: [
              {
                name: 'id',
                value: 'city-name'
              }
            ],
            classList: ['city-name']
          },
          {
            tag: 'button',
            attributes: [
              {
                name: 'type',
                value: 'button'
              },
              {
                name: 'title',
                value: 'Add to favorite'
              }
            ],
            classList: ['btn-star'],
            children: [
              {
                tag: 'i',
                classList: ['far', 'fa-star']
              }
            ]
          }
        ]
      },

      {
        tag: 'div',
        classList: ['date-info'],
        children: [
          {
            tag: 'div',
            content: formatDayName(dt),
            classList: ['current-day'],
            attributes: [
              {
                name: 'id',
                value: 'current-day'
              }
            ]
          },
          {
            tag: 'div',
            content: formatDate(dt, { day: 'numeric', month: 'numeric', year: 'numeric' }),
            classList: ['current-date'],
            attributes: [
              {
                name: 'id',
                value: 'current-day'
              }
            ]
          }
        ]
      },

      {
        tag: 'div',
        classList: 'forecast',
        children: [
          {
            tag: 'div',
            classList: ['forecast-general'],
            children: [
              {
                tag: 'div',
                classList: ['current-icon-big'],
                attributes: [
                  {
                    name: 'id',
                    value: 'current-icon'
                  }
                ],
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
                content: description,
                classList: ['general-description'],
                attributes: [
                  {
                    name: 'id',
                    value: 'general-description'
                  }
                ]
              },
              {
                tag: 'div',
                classList: ['temperature'],
                children: [
                  {
                    tag: 'span',
                    content: Math.floor(temp),
                    classList: ['temperature-value']
                  },
                  {
                    tag: 'input',
                    attributes: [
                      {
                        name: 'id',
                        value: 'temperature-unit-celsius'
                      },
                      {
                        name: 'type',
                        value: 'radio'
                      },
                      {
                        name: 'name',
                        value: 'temperature-unit'
                      },
                      {
                        name: 'value',
                        value: 'celsius'
                      },
                      {
                        name: 'checked',
                        value: 'checked'
                      }
                    ],
                    classList: ['hide-input-radio', 'temp-switch-ctrl']
                  },
                  {
                    tag: 'label',
                    attributes: [
                      {
                        name: 'for',
                        value: 'temperature-unit-celsius'
                      }
                    ],
                    classList: ['unit-switch', 'temp-unit-switch'],
                    children: [
                      {
                        tag: 'span',
                        children: [
                          {
                            tag: 'i',
                            classList: ['wi', 'wi-celsius']
                          }
                        ]
                      }
                    ]
                  },
                  {
                    tag: 'input',
                    attributes: [
                      {
                        name: 'id',
                        value: 'temperature-unit-fahrenheit'
                      },
                      {
                        name: 'type',
                        value: 'radio'
                      },
                      {
                        name: 'name',
                        value: 'temperature-unit'
                      },
                      {
                        name: 'value',
                        value: 'fahrenheit'
                      }
                    ],
                    classList: ['hide-input-radio', 'temp-switch-ctrl']
                  },
                  {
                    tag: 'label',
                    attributes: [
                      {
                        name: 'for',
                        value: 'temperature-unit-fahrenheit'
                      }
                    ],
                    classList: ['unit-switch', 'temp-unit-switch'],
                    children: [
                      {
                        tag: 'span',
                        children: [
                          {
                            tag: 'i',
                            classList: ['wi', 'wi-fahrenheit']
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            tag: 'div',
            classList: ['forecast-extended'],
            children: [
              {
                tag: 'div',
                classList: ['forecast-wrapper'],
                children: [
                  {
                    tag: 'span',
                    classList: ['icon-wrap'],
                    children: [
                      {
                        tag: 'i',
                        classList: ['wi', 'wi-humidity']
                      }
                    ]
                  },
                  {
                    tag: 'span',
                    content: 'humidity:',
                    classList: ['forecast-item']
                  },
                  {
                    tag: 'span',
                    content: humidity,
                    attributes: [
                      {
                        name: 'id',
                        value: 'humidity-value'
                      }
                    ],
                    classList: ['humidity-value']
                  },
                  {
                    tag: 'span',
                    content: '%',
                    attributes: [
                      {
                        name: 'id',
                        value: 'humidity-unit'
                      }
                    ],
                    classList: ['unit', 'humidity-unit']
                  }
                ]
              },
              {
                tag: 'div',
                classList: ['forecast-wrapper'],
                children: [
                  {
                    tag: 'span',
                    classList: ['icon-wrap'],
                    children: [
                      {
                        tag: 'i',
                        classList: ['wi', 'wi-barometer']
                      }
                    ]
                  },
                  {
                    tag: 'span',
                    content: 'pressure:',
                    classList: ['forecast-item']
                  },
                  {
                    tag: 'span',
                    content: pressure,
                    attributes: [
                      {
                        name: 'id',
                        value: 'pressure-value'
                      }
                    ],
                    classList: ['pressure-value']
                  },
                  {
                    tag: 'span',
                    content: 'atm',
                    attributes: [
                      {
                        name: 'id',
                        value: 'pressure-unit'
                      }
                    ],
                    classList: ['unit', 'pressure-unit']
                  }
                ]
              },
              {
                tag: 'div',
                classList: ['forecast-wrapper'],
                children: [
                  {
                    tag: 'span',
                    classList: ['icon-wrap'],
                    children: [
                      {
                        tag: 'i',
                        classList: ['wi', 'wi-strong-wind']
                      }
                    ]
                  },
                  {
                    tag: 'span',
                    content: 'wind:',
                    classList: ['forecast-item']
                  },
                  {
                    tag: 'span',
                    content: speed,
                    attributes: [
                      {
                        name: 'id',
                        value: 'wind-value'
                      }
                    ],
                    classList: ['wind-value']
                  },
                  {
                    tag: 'span',
                    content: 'mph',
                    attributes: [
                      {
                        name: 'id',
                        value: 'wind-unit'
                      }
                    ],
                    classList: ['unit', 'wind-unit']
                  },
                  {
                    tag: 'span',
                    attributes: [
                      {
                        name: 'id',
                        value: 'wind-direction'
                      }
                    ],
                    classList: ['unit', 'wind-direction-unit', 'icon-wrap'],
                    children: [
                      {
                        tag: 'i',
                        classList: ['wi', 'wi-wind', 'wi-from-e']
                      }
                    ]
                  }
                ]
              },
              {
                tag: 'div',
                classList: ['forecast-wrapper'],
                children: [
                  {
                    tag: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'radio'
                      },
                      {
                        name: 'name',
                        value: 'system-of-units'
                      },
                      {
                        name: 'id',
                        value: 'units-metric'
                      },
                      {
                        name: 'value',
                        value: 'metric'
                      },
                      {
                        name: 'checked',
                        value: 'checked'
                      }
                    ],
                    classList: ['hide-input-radio', 'units-switch-ctrl']
                  },
                  {
                    tag: 'label',
                    attributes: [
                      {
                        name: 'for',
                        value: 'units-metric'
                      }
                    ],
                    classList: ['unit-switch'],
                    children: [
                      {
                        tag: 'span',
                        content: 'metric'
                      }
                    ]
                  },
                  {
                    tag: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'radio'
                      },
                      {
                        name: 'name',
                        value: 'system-of-units'
                      },
                      {
                        name: 'id',
                        value: 'units-imperial'
                      },
                      {
                        name: 'value',
                        value: 'imperial'
                      }
                    ],
                    classList: ['hide-input-radio', 'units-switch-ctrl']
                  },
                  {
                    tag: 'label',
                    attributes: [
                      {
                        name: 'for',
                        value: 'units-imperial'
                      }
                    ],
                    classList: ['unit-switch'],
                    children: [
                      {
                        tag: 'span',
                        content: 'imperial'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}
