import Component from '../../framework/Component';

export default class SearchBar extends Component {
  constructor(host, props = {}) {
    super(host, props);
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    //host.addEventListener("keyup", event => this.handleSearch(event));
    host.addEventListener('submit', event => this.handleSubmit(event));
  }

  // handleSearch(event) {
  //   this.props.whenUserInputReady(event.target);
  //   console.log(event.target.value);
  // }

  handleSubmit(event) {
    event.preventDefault();
    const searchLocation = event.target.elements.search.value.trim();
    this.props.whenUserInputReady(searchLocation);
  }

  render() {
    return [
      {
        tag: 'form',
        attributes: [
          {
            name: 'action',
            value: ''
          },
          {
            name: 'id',
            value: 'search-form'
          }
        ],
        classList: ['search-form'],
        // eventHandlers: {
        //   keyup: this.handleSearch
        // },
        children: [
          {
            tag: 'input',
            attributes: [
              {
                name: 'type',
                value: 'text'
              },
              {
                name: 'id',
                value: 'search-location'
              },
              {
                name: 'name',
                value: 'search'
              },
              {
                name: 'placeholder',
                value: 'Type location...'
              },
              {
                name: 'required',
                value: ''
              },
              {
                name: 'autofocus',
                value: ''
              },
              {
                name: 'autocomplete',
                value: 'off'
              }
            ],
            classList: ['search-location']
          },
          {
            tag: 'button',
            attributes: [
              {
                name: 'type',
                value: 'submit'
              },
              {
                name: 'title',
                value: 'Search location'
              }
            ],
            classList: ['btn-search'],
            children: [
              {
                tag: 'i',
                classList: ['fas', 'fa-search']
              }
            ]
          }
        ]
      }
    ];
  }
}
