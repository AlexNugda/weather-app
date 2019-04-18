import Component from "../../framework/Component";

export default class SearchHistory extends Component {
  constructor(host, props = {}) {
    super(host);
  }

  render() {
    return `
        <i class="fas fa-history"></i>
        <h3 class="recent-header">recently viewed</h3>
        <button type="button" title="Clear the list" class="btn-delete">
        <i class="far fa-trash-alt"></i>
        </button>
        <ul id="fav-list" class="fav-recent-list">
        <li class="recent-list-item">Kyiv, Ukraine</li>
        <li class="recent-list-item">Moscow, Russia</li>
        <li class="recent-list-item">Vienna, Austria</li>
        </ul>
     `;
  }
}
