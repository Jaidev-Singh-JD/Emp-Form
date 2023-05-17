import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export class Userdata extends LitElement {
  static get properties() {
    return {
        savedData: { type: Array },
    };
  }
  
  constructor() {
    super();
    this.savedData = JSON.parse(localStorage.getItem("myFormData")) || [];; 
  }
  render() {
    return html`
    ${repeat(this.savedData, (item) =>html`
        <div class="container">
          <li>${item.name}</li>
          <li>${item.empCode}</li>
          <li>${item.email}</li>
          <li>${item.phone}</li>
          <li>${item.designation}</li>
          <li>${item.department}</li>
          <li>${item.address}</li>
          <li>${item.address1}</li>
          <li>${item.landmark}</li>
          <li>${item.country}</li>
          <li>${item.state}</li>
          <li>${item.city}</li>
          <li>${item.zipcode}</li>
        <button>Update</button>
        <button>Delete</button>
      </div>
    `)}
    `;
  }
  static get styles() {
    return css`
      .container {
        border: 2px solid black;
        justify-content: center;
        align-items: center;
        list-style: none;
        width: 30%;
        height: 30%;
        background-color: pink;
      }
    `;
  }
}
window.customElements.define("user-data", Userdata);
