import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export class Userdata extends LitElement {
  static get properties() {
    return {
      savedData: { type: Array },
      index: { type: Number },
      savedName: { type: String },
      savedEmpCode: { type: String },
      savedEmail: { type: String },
      ascending:{type:Boolean},
    };
  }

  constructor() {
    super();
    this.savedData = JSON.parse(localStorage.getItem("myFormData")) || [];
    this.index = -1;
    this.savedName = "";
    this.savedEmpCode = "";
    this.ascending=false
  }
  render() {
    return html`
      <button class="btn-sort" @click=${this.sortitem}>Sort</button>
      ${repeat(
        this.savedData,
        (item, index) => html`
          <div id="row">
            <fieldset>
              <legend>${item.name}
              </legend>
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
            value=${this.savedName}
          />
          <input
            type="text"
            id="empCode"
            value=${this.savedEmpCode}
          />
          <input
            type="email"
            id="email"
            value=${this.savedEmail}
          />
          <button @click=${this.cancelData}>Cancel</button>
          <button @click=${this.updateData} type="submit">Update</button>
        </form>
      </dialog>
    `;
  }
  sortitem(){
    this.ascending=!this.ascending;
    const multiplier =this.ascending ? 1:-1;
    this.savedData.sort((x,y)=>{
      const name1 =x.name.toLowerCase();
      const name2 =y.name.toLowerCase();
      if (name1 < name2){
        return -1 *multiplier;
      }
      if(name1 > name2){
        return 1 *multiplier;
      }
    })
    this.requestUpdate()
  }

  updateitem(index) {
    this.index = index;
    const items = this.savedData[index];
    this.savedName = items.name;
    this.savedEmpCode = items.empCode;
    this.savedEmail = items.email;
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
    const UpdatedEmail = this.shadowRoot.querySelector("#email").value;
    if (UpdatedName && UpdatedEmpCode) {
      const items = this.savedData[this.index];
      items.name = UpdatedName;
      items.empCode = UpdatedEmpCode;
      items.email = UpdatedEmail;
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
        width: 375px;
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
        background-color: #000000;
        font-family: Montserrat;
        text-transform: uppercase;
        color: #ffffff;
        border-right:6px solid #000000;
        border-left:6px solid #000000;
      }
      #popUpForm {
        border: 20px solid black;
      }
      #row {
        display: inline-block;
        width:410px;
        align-items: center;
        margin: 10px;
        padding: 5px;
        border-radius: 6px;
        box-sizing: border box;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12. ;
        position: relative;
        /* background: linear-gradient(to right, #74ebd5, #9face6); */
        background:#000;
      }
      .btn-update{
        /* background: linear-gradient(to left, #16bc00, #003e01); */
        background:green;
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
        color: #ffffff;
        transition: all 1s ease;
      }
      .btn-delete {
        /* background: linear-gradient(to left, #da0000, #561709); */
        background:red;
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
        color: #ffffff;
        transition: all 1s ease;
      }
      .btn-sort{
        position:absolute;
        top:30px;
        right:20px;

      }
    `;
  }
}
window.customElements.define("user-data", Userdata);
