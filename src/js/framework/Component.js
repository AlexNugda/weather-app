export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this.state = {};
    this.init();
    this._render();
  }

  init() {}

  updateState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this._render();
  }

  _render() {
    this.host.innerHTML = "";
    const content = this.render();
    if (typeof content === "string") {
      this.host.innerHTML = content;
    } else {
      content
        .map(item => this._vDomPrototypeElementToHtmlElement(item)) // [string|HTMLElement] => [HTMLElement]
        .forEach(htmlElement => {
          this.host.appendChild(htmlElement);
        });
    }
  }
  /* @returns {string|[string|HTMLElement|Component]} */
  render() {
    return "OMG! They wanna see me!!!!!! Aaaaaa";
  }

  /* @param {string|HTMLElement|Object} element */

  _vDomPrototypeElementToHtmlElement(element) {
    if (typeof element === "string") {
      const htmlElement = document.createElement("div"); //TODO: textNode
      htmlElement.innerHTML = element;
      return htmlElement;
    } else {
      if (element.tag) {
        if (typeof element.tag === "function") {
          const container = document.createElement("div");
          if (element.classList) {
            container.classList.add(...element.classList);
          }

          if (element.children) {
            element.children.forEach(el => {
              const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
              container.appendChild(htmlElement);
            });
          }

          new element.tag(container, element.props);
          return container;
        } else {
          //string
          const container = document.createElement(element.tag);
          if (element.content) {
            container.innerHTML = element.content;
          }

          //ensure following element properties that should be Array
          ["classList", "attributes", "children", "eventHandlers"].forEach(
            item => {
              if (element[item] && !Array.isArray(element[item])) {
                element[item] = [element[item]];
              }
            }
          );

          if (element.classList) {
            container.classList.add(...element.classList);
          }
          if (element.attributes) {
            element.attributes.forEach(attributeSpec => {
              container.setAttribute(attributeSpec.name, attributeSpec.value);
            });
          }

          // process eventHandlers
          // if (element.eventHandlers) {
          //   Object.keys(element.eventHandlers).forEach(eventType => {
          //     console.log(element.eventHandlers[eventType]);
          //     container.addEventListener(
          //       eventType,
          //       element.eventHandlers[eventType]
          //     );
          //   });
          // }

          //process children
          if (element.children) {
            element.children.forEach(el => {
              const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
              container.appendChild(htmlElement);
            });
          }
          return container;
        }
      }
      return element;
    }
  }
}
