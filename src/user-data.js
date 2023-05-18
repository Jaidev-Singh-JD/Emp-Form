import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export class Userdata extends LitElement {
  static get properties() {
    return {
      savedData: { type: Array },
      index: { type: Number },
      savedName: { type: String },
      savedEmpCode: { type: String },
    };
  }

  constructor() {
    super();
    this.savedData = JSON.parse(localStorage.getItem("myFormData")) || [];
    this.index = -1;
    this.savedName = "";
    this.savedEmpCode = "";
  }
  render() {
    return html`
      ${repeat(
        this.savedData,
        (item, index) => html`
          <div id="row">
            <fieldset>
              <legend>${item.name}</legend>
              <div>
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
              </div>
            </fieldset>
            <div class="btn-holder">
              <button class="btn-update" @click=${() => this.updateitem(index)}>
                Update
              </button>
              <button class="btn-delete" @click=${() => this.deleteitem(index)}>
                Delete
              </button>
            </div>
          </div>
        `
      )}
      <dialog id="popUpForm">
        <form method="dialog">
          <input
            type="text"
            id="name"
            placeholder="Name"
            value=${this.savedName}
          />
          <input
            type="text"
            id="empCode"
            placeholder="Employee Code"
            value=${this.savedEmpCode}
          />
          <button @click=${this.cancelData}>Cancel</button>
          <button @click=${this.updateData} type="submit">Update</button>
        </form>
      </dialog>
    `;
  }

  updateitem(index) {
    this.index = index;
    const items = this.savedData[index];
    this.savedName = items.name;
    this.savedEmpCode = items.empCode;
    this.popUpForm();
  }
  popUpForm() {
    const popUp = this.renderRoot.querySelector("#popUpForm");
    popUp.showModal();
  }

  updateData(e) {
    e.preventDefault();
    const UpdatedName = this.shadowRoot.querySelector("#name").value;
    const UpdatedEmpCode = this.shadowRoot.querySelector("#empCode").value;
    if (UpdatedName && UpdatedEmpCode) {
      const items = this.savedData[this.index];
      items.name = UpdatedName;
      items.empCode = UpdatedEmpCode;
      localStorage.setItem("myFormData", JSON.stringify(this.savedData));
      window.location.reload();
      this.requestUpdate();
    }
  }

  cancelData() {
    window.location.reload();
  }

  deleteitem(index) {
    this.savedData.splice(index, 1);
    localStorage.setItem("myFormData", JSON.stringify(this.savedData));
    window.location.reload();
    this.requestUpdate();
  }
  static get styles() {
    return css`
      fieldset {
        border: none;
        list-style: none;
        width: 280px;
        height: 380px;
        background: #e6f7f4;
        font-family: "mulish", sans-serif;
        font-size: 20px;
        position: relative;
        border-radius: 6px;
      }
      /* .btn:hover {
        background: linear-gradient(to right, #74ebd5, #9face6);
      } */
      legend {
        font-size: 20px;
        background-color: #74ebd5;
        font-family: Montserrat;
        text-transform: uppercase;
        color: #000000;
        border-right:6px solid #ffffff;
        border-left:6px solid #ffffff;
      }
      #popUpForm {
        border: 20px solid black;
      }
      #row {
        display: inline-grid;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        padding: 5px;
        border-radius: 6px;
        box-sizing: border box;
        position: relative;
        /* background: linear-gradient(to right, #74ebd5, #9face6); */
      }
      .btn-update{
        background: linear-gradient(to left, #286e32, #4ddb50);
        border-radius: 6px;
        border: none;
        outline: none;
        display: block;
        font-size: 16px;
        padding: 15px 0;
        margin-top: 20px;
        width: 100%;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        color: #0a0a0a;
        transition: all 1s ease;
      }
      .btn-delete {
        background: linear-gradient(to left, #d26618, #fd2f01);
        border-radius: 6px;
        border: none;
        outline: none;
        display: block;
        font-size: 16px;
        padding: 15px 0;
        margin-top: 20px;
        width: 100%;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        color: #0a0a0a;
        transition: all 1s ease;
      }
    `;
  }
}
window.customElements.define("user-data", Userdata);
