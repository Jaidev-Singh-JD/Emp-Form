import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { designation } from "./assets/designation";
import { department } from "./assets/department";
import { city } from "./assets/city";
import { state } from "./assets/state";
import { country } from "./assets/country";

export class MyElement extends LitElement {
  static get properties() {
    return {
      empForm: { type: Object },
      EmailChecked: { type: String },
      PhoneChecked: { type: String },
      EmpFormData: { type: Array },
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
      designation: { value: "", isValidName: false,errorMessage: ""  },
      department: { value: "", isValidName: false,errorMessage: "" },
      country: { value: "", isValidName:false,errorMessage: "" },
      city: { value: "", isValidName:false,errorMessage: "" },
      state: { value: "", isValidName:false,errorMessage: "" },
    };
    this.EmpFormData = [];
  }

  static get styles() {
    return css`
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
  render() {
    return html`
      <div id="bod">
        <div class="container">
          <div class="header">
            <h2>EMPLOYEE FORM</h2>
          </div>
          <a target="_blank" href="doc.html">Instruction to fill the form and validation</a>
          <form @submit=${this.submit} class="form">
            <div class="form-control">
              <label for="name-input"> UserName*</label>
              <input
                type="text"
                id="name-input"
                required
                autocomplete="off"
                placeholder="Enter your Fullname "
                @input=${(e) => this.validateForm(e, "empName")}
                style=${this.empForm.name?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
              <p id="display">${this.empForm.name.errorMessage}</p>
            </div>

            <div class="form-control">
              <label for="empcode-input">Employee Code*</label>
              <input
                id="empcode-input"
                required
                placeholder="Enter your Employee code"
                @input=${(e) => this.validateForm(e, "empCode")}
                style=${this.empForm.empCode?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
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
              <input
                type="email"
                id="email-input"
                placeholder="Enter your Email Address"
                required
                @input=${(e) => this.validateForm(e, "email")}
                style=${this.empForm.email?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
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
              <input
                type="Number"
                id="phone-input"
                placeholder="Enter your phone"
                autocomplete="off"
                required
                @input=${(e) => this.validateForm(e, "phone")}
                style=${this.empForm.phone?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
              <p id="display">${this.empForm.phone.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Designation*</label>
              <select
                id="designation"
                required
                Select your option
                @input=${(e) => this.validateForm(e, "designation")}
                style=${this.empForm.designation?.errorMessage
                  ? "border: solid 4px red;"
                  : ""}
              >
                ${repeat(designation, (e) => html` <option>${e}</option>`)}
              </select>
              <p id="display">${this.empForm.designation.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Department*</label>
              <select
                id="department"
                required
                @input=${(e) => this.validateForm(e, "department")}
                style=${this.empForm.department?.errorMessage
                  ? "border: solid 4px red;"
                  : ""}
              >
                ${repeat(department, (e) => html`<option>${e}</option>`)}
              </select>
              <p id="display">${this.empForm.department.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Address line 1*</label>
              <input
                id="adline1"
                placeholder="Enter your Address"
                required
                autocomplete="off"
                @input=${(e) => this.validateForm(e, "addressLine1")}
                style=${this.empForm.address?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
            </div>
            <div class="form-control">
              <label>Address line 2</label>
              <input
                id="adline2"
                placeholder="optional"
                autocomplete="off"
                @input=${(e) => this.validateForm(e, "addressLine2")}
                style=${this.empForm.address?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
              <p id="display">${this.empForm.address.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Landmark*</label>
              <input
                id="landmark"
                required
                type="text"
                placeholder="Enter your Landmark"
                @input=${(e) => this.validateForm(e, "landmark")}
                style=${this.empForm.landmark?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
              <p id="display">${this.empForm.landmark.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Country*</label>
              <select
                id="country"
                required
                @input=${(e) => this.validateForm(e, "country")}
                style=${this.empForm.country?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              >
                ${repeat(country, (e) => html` <option>${e}</option>`)}
              </select>
              <p id="display">${this.empForm.country.errorMessage}</p>
            </div>
            <div class="form-control">
              <label>State*</label>
              <select
                id="state"
                required
                @input=${(e) => this.validateForm(e, "state")}
                style=${this.empForm.state?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              >
                ${repeat(state, (e) => html` <option>${e}</option>`)}
              </select>
              <p id="display">${this.empForm.state.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>City*</label>
              <select
                id="city"
                required
                @input=${(e) => this.validateForm(e, "city")}
                style=${this.empForm.city?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              >
                ${repeat(city, (e) => html` <option>${e}</option>`)}
              </select>
              <p id="display">${this.empForm.city.errorMessage}</p>
            </div>

            <div class="form-control">
              <label>Zip Code*</label>
              <input
                type="Number"
                id="zip"
                required
                placeholder="Enter your pincode"
                autocomplete="off"
                @input=${(e) => this.validateForm(e, "zipCode")}
                style=${this.empForm.zipcode?.errorMessage
                  ? "border: solid 3px red;"
                  : ""}
              />
              <p id="display">${this.empForm.zipcode.errorMessage}</p>
            </div>

            <button type="submit" class="btn">Submit</button>
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

  validateForm(e, type) {
    switch (type) {
      case "empName": {
        //value will be restored in the begining when entered to json
        this.empForm = {
          ...this.empForm,
          name: {
            value: `${e.target.value} `,
            isValidName: false,
          },
        };

        if (this.empForm.name.value.length > 7) {
          console.log(this.empForm.name);
          this.empForm = {
            ...this.empForm,
            name: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Username can't exceed 7 characters",
            },
          };
        } else {
          this.empForm = {
            ...this.empForm,
            name: {
              value: `${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
          console.log(this.empForm.name);
        }
        break;
      }

      case "empCode": {
        this.empForm = {
          ...this.empForm,
          empCode: {
            value: `${e.target.value} `,
            isValidName: false,
            errorMessage: "",
          },
        };

        if (this.empForm.empCode.value.length > 8) {
          this.empForm = {
            ...this.empForm,
            empCode: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Maximum length exceeded",
            },
          };
        } else if (
          (this.empForm.empCode.value.length == 8 &&
            this.empForm.empCode.value.match(/[0-9]{6}[A-Z]/)) ||
          this.empForm.empCode.value.match(/[0-9]{5}[A-Z][0-9]/) ||
          this.empForm.empCode.value.match(/[0-9]{4}[A-Z][0-9]{2}/) ||
          this.empForm.empCode.value.match(/[0-9]{3}[A-Z][0-9]{3}/) ||
          this.empForm.empCode.value.match(/[0-9]{2}[A-Z][0-9]{4}/) ||
          this.empForm.empCode.value.match(/[0-9][A-Z][0-9]{5}/) ||
          this.empForm.empCode.value.match(/[A-Z][0-9]{6}/)
        ) {
          // console.log(this.empForm.email);
          this.empForm = {
            ...this.empForm,
            empCode: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        } else {
          this.empForm = {
            ...this.empForm,
            empCode: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Enter Valid Emp Code",
            },
          };
          // console.log(this.empForm.empCode);
        }
        break;
      }

      case "email": {
        this.empForm = {
          ...this.empForm,
          email: {
            value: `${e.target.value} `,
            isValidName: false,
            errorMessage: "",
          },
        };
        // console.log(this.empForm.email);

        const personalmailformat = /(@gmail.com)/;
        const officialmailformat = /(@annalect.com)/;
        let changevalue = this.EmailChecked;
        // console.log(changevalue);

        if (
          changevalue === "official" &&
          this.empForm.email.value.match(officialmailformat)
        ) {
          // console.log(this.empForm.email);
          this.empForm = {
            ...this.empForm,
            email: {
              value: `official: ${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        } else if (
          changevalue === "personal" &&
          this.empForm.email.value.match(personalmailformat)
        ) {
          this.empForm = {
            ...this.empForm,
            email: {
              value: `Personal:${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
          // console.log(this.empForm.email);
        } else {
          this.empForm = {
            ...this.empForm,
            email: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Invalid",
            },
          };
          // console.log(this.empForm.email);
        }
        break;
      }

      case "phone": {
        //value will be restored in the begining when entered to json
        let changevaluep = this.PhoneChecked;
        // console.log(changevaluep);
        this.empForm = {
          ...this.empForm,
          phone: {
            value: `${e.target.value} `,
            isValidName: false,
          },
        };

        if (
          changevaluep === "primary" &&
          this.empForm.phone.value.length == 11 &&
          this.empForm.phone.value.length <= 12
        ) {
          // console.log(this.empForm.phone);
          this.empForm = {
            ...this.empForm,
            phone: {
              value: `Primary:${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
        } else if (
          changevaluep === "secondary" &&
          this.empForm.phone.value.length == 11 &&
          this.empForm.phone.value.length <= 12
        ) {
          // console.log(this.empForm.phone);
          this.empForm = {
            ...this.empForm,
            phone: {
              value: `Secondary:${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
        } else if (
          changevaluep === "emergency" &&
          this.empForm.phone.value.length == 11 &&
          this.empForm.phone.value.length <= 12
        ) {
          // console.log(this.empForm.phone);
          this.empForm = {
            ...this.empForm,
            phone: {
              value: `Emergency:${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
        } else {
          this.empForm = {
            ...this.empForm,
            phone: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Invalid",
            },
          };
          // console.log(this.empForm.phone);
        }
        break;
      }

      case "designation": {
        this.empForm = {
          ...this.empForm,
          designation: {
            value: `${e.target.value} `,
          },
        };
        const designationFormat = /--Enter Your Designation--/;
        if (
          this.empForm.designation.value.match(designationFormat)
        ) {
          this.empForm = {
            ...this.empForm,
            designation: {
              value: "",
              isValidName: false,
              errorMessage: "Enter valid Designation name",
            },
          };
        } else{
          this.empForm = {
            ...this.empForm,
            designation: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
        break;
      }

      case "department": {
        this.empForm = {
          ...this.empForm,
          department: {
            value: `${e.target.value} `,
          },
        };
        const departmentFormat = /--Enter Your Department--/;
        if (
          this.empForm.department.value.match(departmentFormat)
        ) {
          this.empForm = {
            ...this.empForm,
            department: {
              value: "",
              isValidName: false,
              errorMessage: "Enter valid department name",
            },
          };
        } else{
          this.empForm = {
            ...this.empForm,
            department: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
        break;
      }

      case "addressLine1":
        {
          this.empForm = {
            ...this.empForm,
            address: {
              value: `${e.target.value}`,
            },
          };
        }
        if (
          this.empForm.address.value === "" ||
          this.empForm.address.value.length > 80
        ) {
          // console.log(this.empForm.address);
          this.empForm = {
            ...this.empForm,
            address: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Please enter a valid Address",
            },
          };
        } else {
          this.empForm = {
            ...this.empForm,
            address: {
              value: `${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
          // console.log(this.empForm.address);
          break;
        }

      case "addressLine2": {
        this.empForm = {
          ...this.empForm,
          address1: {
            value: `Optional Address:${e.target.value} `,
          },
        };
        break;
      }

      case "landmark":
        {
          this.empForm = {
            ...this.empForm,
            landmark: {
              value: `${e.target.value}`,
            },
          };
        }
        if (
          this.empForm.landmark.value === "" ||
          this.empForm.landmark.value.length > 50
        ) {
          // console.log(this.empForm.landmark);
          this.empForm = {
            ...this.empForm,
            landmark: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "Please enter a valid Landmark",
            },
          };
        } else {
          this.empForm = {
            ...this.empForm,
            landmark: {
              value: `${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
          // console.log(this.empForm.landmark);
          break;
        }

      case "country": {
        this.empForm = {
          ...this.empForm,
          country: {
            value: `${e.target.value} `,
          },
        };
        const countryFormat = /--Enter Your Country--/;
        if (
          this.empForm.country.value.match(countryFormat)
        ) {
          this.empForm = {
            ...this.empForm,
            country: {
              value: "",
              isValidName: false,
              errorMessage: "Invalid country name",
            },
          };
        } else{
          this.empForm = {
            ...this.empForm,
            country: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
        break;
      }

      case "state": {
        this.empForm = {
          ...this.empForm,
          state: {
            value: `${e.target.value} `,
          },
        };
        const stateFormat = /--Enter Your State--/;
        if (
          this.empForm.state.value.match(stateFormat)
        ) {
          this.empForm = {
            ...this.empForm,
            state: {
              value: "",
              isValidName: false,
              errorMessage: "Enter valid State name",
            },
          };
        } else{
          this.empForm = {
            ...this.empForm,
            state: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
        break;
      }


      case "city": {
        this.empForm = {
          ...this.empForm,
          city: {
            value: `${e.target.value} `,
          },
        };
        const cityFormat = /--Enter Your City--/;
        if (
          this.empForm.city.value.match(cityFormat)
        ) {
          this.empForm = {
            ...this.empForm,
            city: {
              value: "",
              isValidName: false,
              errorMessage: "Enter valid City name",
            },
          };
        } else{
          this.empForm = {
            ...this.empForm,
            city: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
        break;
      }

      case "zipCode": {
          this.empForm = {
            ...this.empForm,
            zipcode: {
              value: `${e.target.value}`,
            },
          };
        if (
          this.empForm.zipcode.value.length == 6 &&
          this.empForm.zipcode.value.length <= 8
        ) {
          // console.log(this.empForm.zipcode);
          this.empForm = {
            ...this.empForm,
            zipcode: {
              value: `${e.target.value} `,
              isValidName: true,
              errorMessage: "",
            },
          };
        } else {
          this.empForm = {
            ...this.empForm,
            zipcode: {
              value: `${e.target.value} `,
              isValidName: false,
              errorMessage: "please enter a valid Zip Code",
            },
          };
          break;
        }
      }
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
      let empdata = {
        name: this.empForm.name.value,
        empCode: this.empForm.empCode.value,
        email: this.empForm.email.value,
        phone: this.empForm.phone.value,
        designation: this.empForm.designation.value,
        department: this.empForm.department.value,
        address: this.empForm.address.value,
        address1: this.empForm.address1.value,
        landmark: this.empForm.landmark.value,
        country: this.empForm.country.value,
        state: this.empForm.state.value,
        city: this.empForm.city.value,
        zipcode: this.empForm.zipcode.value,
      };
      this.EmpFormData.push(empdata);
      const form = this.renderRoot.querySelector("form");
      localStorage.setItem("myFormData", JSON.stringify(this.EmpFormData));
      this.empForm.address1.value=""
      form.reset();
      alert("Form submitted Successfully into local storage");
    }
  }
}

window.customElements.define("my-element", MyElement);
