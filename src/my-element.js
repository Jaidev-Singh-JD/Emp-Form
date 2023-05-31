import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { designation } from "./assets/designation";
import { department } from "./assets/department";
import { city } from "./assets/city";
import { state } from "./assets/state";
import { country } from "./assets/country";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import { serialize } from "@shoelace-style/shoelace/dist/utilities/form.js";

export class MyElement extends LitElement {
  static get properties() {
    return {
      empForm: { type: Object },
      EmailChecked: { type: String },
      PhoneChecked: { type: String },
      EmpFormData: { type: Array },
      isEditing: { type: Boolean },
      editData: { type: Object },
      savedData: { type: Array },
    };
  }

  constructor() {
    super();

    this.empForm = {
      name: { value: "", isValidName: false, errorMessage: "" },
      empCode: { value: "", isValidName: false, errorMessage: "" },
      email: { value: "", isValidName: false, errorMessage: "" },
      phone: { value: "", isValidName: false, errorMessage: "" },
      address: { value: "", isValidName: false, errorMessage: "" },
      address1: { value: "", isValidName: true },
      landmark: { value: "", isValidName: false, errorMessage: "" },
      zipcode: { value: "", isValidName: false, errorMessage: "" },
      designation: { value: "", isValidName: false, errorMessage: "" },
      department: { value: "", isValidName: false, errorMessage: "" },
      country: { value: "", isValidName: false, errorMessage: "" },
      city: { value: "", isValidName: false, errorMessage: "" },
      state: { value: "", isValidName: false, errorMessage: "" },
    };
    this.EmpFormData = [];
    this.isEditing = false;
  }

  static get styles() {
    return css`
    sl-input,sl-select{
      --sl-input-focus-ring-color:hsl(74, 73%, 51%);
    }
    #bod{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-sizing:border box;
      background: linear-gradient(45deg,#66a924,	#74ebd5,#242734,#9face6,#0b2822)0 0 /1000% no-repeat;
      animation: animate 20s ease infinite;
    }
      @keyframes animate{
        0%{
        background-position: 0 30%, 0 0;
      }
      50%{
        background-position: 100% 70%, 0 0;
      }
      100%{
        background-position: 0 30%, 0 0;
      }  
    }
    
    
    .header h2{
      color:#222;
      font-family: 'Montserrat', sans-serif;
      font-size:30px;
      text-transform:uppercase;
      text-align:center;
    }
    .header {
      background:linear-gradient(to left,#74ebd5,	#9face6);
      padding:10px 0;
    }
    .container{
      background-color: #fff;
     border-radius:10px;
     -webkit-border-radius:10px;
     overflow:hidden;
     width:50%;
     margin:5px auto;
     box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12. ;
     background:#e9f6f4;
    }
    .form{
      padding: 40px;
    }
    .form-control{
      margin-bottom:20px;
      position:relative;
    }
    .form-control label{
      display:block;
      margin-bottom:5px;
      font-weight:bold;
      font-family: 'Mulish', sans-serif;
      font-size:18px;
      padding:2px;
    }
    .form-control input{
      width:100%
      border:2px solid #f0f0f0
      border-radius:5px;
      display:block;
      font-family: 'Mulish', sans-serif;
      font-size:14px;
      padding:12px;
    }
    .form-control input:focus{
      outline:0;
      border-color:#777
    }
    .form .btn {
      background:linear-gradient(to left,#74ebd5,	#9face6);
      border-radius:6px;
      border:none;
      outline:none;
      display:block;
      font-size:16px;
      padding:15px 0;
      margin-top:20px;
      width:101%;
      font-weight:bold;
      text-transform:uppercase;
      cursor:pointer;
      color:#000000;
      transition:all 1s ease;
    }
    .form .btn:hover{
      background:linear-gradient(to right,#74ebd5,	#9face6);
    }
    .radio,.radio1{
      display:inline-flex;
      align-items:center;
      font-family:sans-serif;
    }
    .radio label{
      font-family:"mulish",sans-serif;
      font-size:14px;
      font-weight:lighter;
    }
    .radio1 label{
      font-family:"mulish",sans-serif;
      font-size:14px;
      font-weight:lighter;
    }
    .radio input{
      margin:10px 20px 15px;
    }
    .radio1 input{
      margin:10px 20px 15px;
    }
    #display{
      color:red
    }
    input{
      width:96.5%;
    }
    #country,#state,#city,#department,#designation{
      width:101%;
      height:30px; 
    }
    select{
      border:2px solid #f0f0f0
      border-radius:5px;
    }
    select input:focus{
      outline:0;
      border-color:#1e1e1e
    }
    a{
      align-items:center;
      justify-content:center;
      display:flex;
    }
`;
  }

  // loop to get the data in the input field
  firstUpdated() {
    if (this.isEditing) {
      console.log("is editing");
      console.log("from form component", this.editData);
      console.log(this.editData);
      const fields = {
        "#name-input": "name",
        "#empcode-input": "empCode",
        "#email-input": "email",
        "#adline1": "address",
        "#adline2": "address1",
        "#landmark": "landmark",
        "#designation": "designation",
        "#department": "department",
        "#country": "country",
        "#city": "city",
        "#state": "state",
      };

      for (const fieldId in fields) {
        const inputField = this.renderRoot.querySelector(fieldId);
        inputField.value = this.editData[fields[fieldId]];
        // console.log(fields[fieldId]);
      }
      this.renderRoot.querySelector("#phone-input").value = this.editData.phone;
      // console.log(this.editData.phone);
      this.renderRoot.querySelector("#zip").value = Number(
        this.editData.zipcode
      );
      // run a function to pre-fill form
    } else {
      console.log("creating new");
    }
  }

  decider(e, type) {
    if (this.isEditing) {
      this.editData[type] = e.target.value;
      this.validateForm(e, type);
    } else {
      this.validateForm(e, type);
      // console.log(e.target.value);
    }
  }

  error_false(type, error) {
    this.empForm = {
      ...this.empForm,
      [type]: {
        isValidName: false,
        errorMessage: error,
      },
    };
  }
  error_true(type, error) {
    this.empForm = {
      ...this.empForm,
      [type]: {
        isValidName: true,
        errorMessage: error,
      },
    };
  }

  test() {
    console.log("here");
  }

  render() {
    return html`
      <div id="bod">
        <div class="container">
          <div class="header">
            <h2>EMPLOYEE FORM</h2>
          </div>
          <a target="_blank" href="doc.html"
            >Instruction to fill the form and validation</a
          >
          <form
            class="form"
            @submit=${this.isEditing ? this.updateData : this.submit}
          >
            <div class="form-control">
              <label for="name-input"> UserName*</label>
              <sl-input
                type="text"
                id="name-input"
                required
                autocomplete="off"
                name="name"
                placeholder="Enter your Fullname "
                @input=${(e) => this.decider(e, "name")}
                style=${
                  this.empForm.name?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
                placeholder="Clearable"
                clearable
              ></sl-input>
              <p id="display">${this.empForm.name.errorMessage}</p>
            </div>

            <div class="form-control">
              <label for="empcode-input">Employee Code*</label>
              <sl-input
                id="empcode-input"
                required
                placeholder="Enter your Employee code"
                name="empCode"
                type="email"
                @input=${(e) => this.decider(e, "empCode")}
                style=${
                  this.empForm.empCode?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
                   placeholder="Clearable"
                clearable
              /></sl-input>
              <p id="display">${this.empForm.empCode.errorMessage}</p>
            </div>

            <div class="form-control">
              <label for="email-input">Email*</label>
              <div class="radio">
                <label for="personal">Personal</label><br />
                <input
                  type="radio"
                  value="personal"
                  name="email"
                  @change=${this.handleRadioChange}
                />
                <label for="official">Official</label><br />
                <input
                  type="radio"
                  value="official"
                  name="email"
                  @change=${this.handleRadioChange}
                />
              </div>
              <sl-input
                id="email-input"
                placeholder="Enter your Email Address"
                required
                @input=${(e) => this.decider(e, "email")}
                style=${
                  this.empForm.email?.errorMessage
                  ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              ></sl-input>
              <p id="display">${this.empForm.email.errorMessage}</p>
            </div>

            <div class="form-control">
              <label for="phone-input">Phone Number*</label>
              <div class="radio1">
                <label for="primary">Primary</label><br />
                <input
                  type="radio"
                  value="primary"
                  name="phone"
                  @change=${this.handleRadio1Change}
                />
                <label for="secondary">Secondary</label><br />
                <input
                  type="radio"
                  value="secondary"
                  name="phone"
                  @change=${this.handleRadio1Change}
                />
                <label for="emergency">Emergency</label><br />
                <input
                  type="radio"
                  value="emergency"
                  name="phone"
                  @change=${this.handleRadio1Change}
                />
              </div>
              ${
                !this.isEditing
                  ? html`<sl-input
                        type="Number"
                        id="phone-input"
                        placeholder="Enter your phone"
                        autocomplete="off"
                        required
                        @input=${(e) => this.decider(e, "phone")}
                        style=${this.empForm.phone?.errorMessage
                          ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                          : ""}
                      ><sl-input>
                      <p id="display">${this.empForm.phone.errorMessage}</p>`
                  : html`<sl-input
                        id="phone-input"
                        placeholder="Enter your phone"
                        autocomplete="off"
                        required
                        @input=${(e) => this.decider(e, "phone")}
                        style=${this.empForm.phone?.errorMessage
                          ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                          : ""}
                      ></sl-input>
                      <p id="display">${this.empForm.phone.errorMessage}</p>`
              }
            </div>

            <div class="form-control">
            <label>Designation*</label>
              <sl-select
                id="designation"
                required
                placeholder="Choose your designation"
                name="designation"
                @click=${(e) => this.decider(e, "designation")}
              >
                ${repeat(
                  designation,
                  (e) => html` <sl-option value=${e}>${e}</sl-option>`
                )}
              </sl-select>
            </div>

            <div class="form-control">
              <label>Department*</label>
              <sl-select
                id="department"
                required
                name="department"
                placeholder="Choose your department"
                @click=${(e) => this.decider(e, "department")}
                style=${
                  this.empForm.department?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              >
                ${repeat(department, (e) => html`<sl-option value="${e}">${e}</sl-option>`)}
              </sl-select>
            </div>

            <div class="form-control">
              <label>Address line 1*</label>
              <sl-input
                id="adline1"
                placeholder="Enter your Address"
                required
                name="address"
                autocomplete="off"
                placeholder="clearable"
                clearable
                @input=${(e) => this.decider(e, "address")}
                style=${
                  this.empForm.address?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              ></sl-input>
              <p id="display">${this.empForm.address.errorMessage}</p>
            </div>
            <div class="form-control">
              <label>Address line 2</label>
              <sl-input
                id="adline2"
                placeholder="optional"
                autocomplete="off"
                name="address1"
                @input=${(e) => this.decider(e, "address1")}
              ></sl-input>
            </div>

            <div class="form-control">
              <label>Landmark*</label>
              <sl-input
                id="landmark"
                required
                type="text"
                name="landmark"
                placeholder="Enter your Landmark"
                autocomplete="off"
                @click=${(e) => this.decider(e, "landmark")}
                style=${
                  this.empForm.landmark?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0, 84% 54%)"
                    : ""
                }
              /></sl-input>
              <p id="display">${this.empForm.landmark.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Country*</label>
              <sl-select
                id="country"
                required
                name="country"
                placeholder="Choose your country"
                @click=${(e) => this.decider(e, "country")}
               
              >
                ${repeat(country, (e) => html` <sl-option value=${e}>${e}</sl-option>`)}
              </sl-select>
              <p id="display">${this.empForm.country.errorMessage}</p>
            </div>
            <div class="form-control">
              
            <label>State*</label>
              <sl-select
                id="state"
                required
                name="state"
                placeholder="Choose your state"
                @click=${(e) => this.decider(e, "state")}
              >
                ${repeat(state, (e) => html` <sl-option value=${e}>${e}</sl-option>`)}
              </sl-select>
              <p id="display">${this.empForm.state.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>City*</label>
              <sl-select
                id="city"
                required
                name="city"
                placeholder="Choose your city"
                @click=${(e) => this.decider(e, "city")}
              >
                ${repeat(city, (e) => html` <sl-option value=${e}>${e}</sl-option>`)}
              </sl-select>
              <p id="display">${this.empForm.city.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Zip Code*</label>
              <sl-input
                type="Number"
                id="zip"
                required
                placeholder="Enter your pincode"
                autocomplete="off"
                name= "zipcode"
                @input=${(e) => this.decider(e, "zipcode")}
                style=${
                  this.empForm.zipcode?.errorMessage
                  ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              ></sl-input>
              <p id="display">${this.empForm.zipcode.errorMessage}</p>
            </div>

            ${
              !this.isEditing
                ? html`<button class="btn" type="submit">Submit</button>`
                : html`<button class="btn" type="submit">Update</button>`
            }
            <slot></slot>
          </form>
        </div>
      </div>
    `;
  }

  handleRadioChange(e) {
    this.EmailChecked = e.target.value;
    // console.log(this.EmailChecked)

    this.validateForm(e, "email");
  }

  handleRadio1Change(e) {
    this.PhoneChecked = e.target.value;
    // console.log(this.PhoneChecked)

    this.validateForm(e, "phone");
  }

  updateData(e) {
    e.preventDefault();
    if (
      this.empForm.name.errorMessage === "" &&
      this.empForm.empCode.errorMessage === "" &&
      this.empForm.email.errorMessage === "" &&
      this.empForm.phone.errorMessage === "" &&
      this.empForm.department.errorMessage === "" &&
      this.empForm.address.errorMessage === "" &&
      this.empForm.landmark.errorMessage === "" &&
      this.empForm.zipcode.errorMessage === ""
    ) {
      localStorage.setItem("myFormData", JSON.stringify(this.savedData));
      window.location.reload();
    }
  }

  validateForm(e, type) {
    switch (type) {
      case "name":
        {
          //value will be restored in the begining when entered to json

          if (e.target.value.length > 7) {
            this.error_false("name", "Username can't exceed 7 characters");
          } else {
            this.error_true("name", "");
          }
        }
        break;

      case "empCode":
        {
          if (e.target.value.length > 8) {
            this.error_false("empCode", "Length Cant exceed 8 characters");
          } else if (
            (e.target.value.length == 8 &&
              e.target.value.match(/[0-9]{6}[A-Z]/)) ||
            e.target.value.match(/[0-9]{5}[A-Z][0-9]/) ||
            e.target.value.match(/[0-9]{4}[A-Z][0-9]{2}/) ||
            e.target.value.match(/[0-9]{3}[A-Z][0-9]{3}/) ||
            e.target.value.match(/[0-9]{2}[A-Z][0-9]{4}/) ||
            e.target.value.match(/[0-9][A-Z][0-9]{5}/) ||
            e.target.value.match(/[A-Z][0-9]{6}/)
          ) {
            this.error_true("empCode", "");
          } else if (e.target.value.length == "") {
            this.error_false("empCode", "Can't be empty");
          }
        }
        break;

      case "email":
        {
          const personalmailformat = /(@gmail.com)/;
          const officialmailformat = /(@annalect.com)/;
          let changevalue = this.EmailChecked;
          // console.log(changevalue);

          if (
            changevalue === "official" &&
            e.target.value.match(officialmailformat)
          ) {
            this.error_true("email", "");
          } else if (
            changevalue === "personal" &&
            e.target.value.match(personalmailformat)
          ) {
            this.error_true("email", "");
            // console.log(this.empForm.email);
          } else if (changevalue === "personal" ||changevalue === "official"){
            this.error_false("email", "Please Enter your Email");
          }
          else {
            this.error_false("email", "Invalid");
            // console.log(this.empForm.email);
          }
        }
        break;

      case "phone":
        {
          //value will be restored in the begining when entered to json
          let changevaluep = this.PhoneChecked;
          // console.log(changevaluep);

          if (
            changevaluep === "primary" &&
            e.target.value.length == 10 &&
            e.target.value.length <= 11
          ) {
            this.error_true("phone", "");
          } else if (
            changevaluep === "secondary" &&
            e.target.value.length == 10 &&
            e.target.value.length <= 11
          ) {
            this.error_true("phone", "");
          } else if (
            changevaluep === "emergency" &&
            e.target.value.length == 10 &&
            e.target.value.length <= 11
          ) {
            this.error_true("phone", "");
          } else {
            this.error_false("phone", "Invalid");
            // console.log(this.empForm.phone);
          }
        }
        break;

      case "designation":
        {
          const designationFormat = /--Enter Your Designation--/;
          if (e.target.value.match(designationFormat)) {
            this.error_false("designation", "Enter valid designation Name");
          } else {
            this.error_true("desgination", "");
          }
        }
        break;

      case "department":
        {
          const departmentFormat = /--Enter Your Department--/;
          if (e.target.value.match(departmentFormat)) {
            this.error_false("designation", "Enter valid department Name");
          } else {
            this.error_true("department", "");
          }
        }
        break;

      case "address":
        {
          if (e.target.value === "" || e.target.value.length > 80) {
            // console.log(this.empForm.address);
            this.error_false("address", "Enter valid Address");
          } else {
            this.error_true("address", "");
            // console.log(this.empForm.address);
          }
        }
        break;
      case "landmark":
        {
          if (e.target.value.length > 50) {
            this.error_false("landmark", "Invalid");
          } else {
            this.error_true("landmark", "");
          }
        }
        break;

      case "country":
        {
          const countryFormat = /--Enter Your Country--/;
          if (e.target.value.match(countryFormat)) {
            this.error_false("country", "Invalid country Name");
          } else {
            this.error_true("country", "");
          }
        }
        break;

      case "state":
        {
          const stateFormat = /--Enter Your State--/;
          if (e.target.value.match(stateFormat)) {
            this.error_false("state", "Invalid state Name");
          } else {
            this.error_true("state", "");
          }
        }
        break;

      case "city":
        {
          const cityFormat = /--Enter Your City--/;
          if (e.target.value.match(cityFormat)) {
            this.error_false("city", "Enter valid city name");
          } else {
            this.error_true("city", "");
          }
        }
        break;

      case "zipcode":
        {
          if (e.target.value.length == 6 && e.target.value.length <= 7) {
            this.error_true("zipcode", "");
          } else if(e.target.value.length >=7){
            this.error_false("zipcode", "Length must be 6");
          }else {
            this.error_false("zipcode", "Invalid zipcode");
          }
        }
        break;
    }
  }

  submit(e) {
    e.preventDefault();
    if (
      this.empForm.name.isValidName === true &&
      this.empForm.empCode.isValidName === true &&
      this.empForm.email.isValidName === true &&
      this.empForm.phone.isValidName === true &&
      this.empForm.department.isValidName === true &&
      this.empForm.address.isValidName === true &&
      this.empForm.landmark.isValidName === true &&
      this.empForm.zipcode.isValidName === true
    ) {
      const form = this.renderRoot.querySelector("form");
      const data = serialize(form);
      console.log(data);

      // All form control data is available in a plain object
      const Data = JSON.parse(localStorage.getItem("myFormData")) || [];
      Data.push(data);
      localStorage.setItem("myFormData", JSON.stringify(Data));
      // const form = this.renderRoot.querySelector("form");
      this.empForm.address1.value = "";
      form.reset();
      alert("Form submitted Successfully into local storage");
    }
  }
}

window.customElements.define("my-element", MyElement);
