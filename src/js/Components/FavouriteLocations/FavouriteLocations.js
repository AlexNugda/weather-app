import Component from "../../framework/Component";

export default class FavouriteLocations extends Component {
  constructor(host, props = {}) {
    super(host);
  }

  render() {
    return `
        <i class="far fa-star"></i>
        <h3 class="recent-header">favorite</h3>
        <button type="button" title="Clear the list" class="btn-delete">
        <i class="far fa-trash-alt"></i>
        </button>
        <ul id="fav-list" class="fav-recent-list">
        <li class="recent-list-item">Vinnytsya,UA</li>
        <li class="recent-list-item">Kyiv, Ukraine</li>
        </ul>
     `;
  }
}
