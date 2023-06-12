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
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import "@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js";
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
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
      progress: { type: Number },
      progress1: { type: Number },
      progress2: { type: Number },
      progress3: { type: Number },
      progress4: { type: Number },
      progress5: { type: Number },
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
    this.progress = 0;
    this.progress1 = 0;
    this.progress2 = 0;
    this.progress3 = 0;
    this.progress4 = 0;
    this.progress5 = 0;
  }

  static get styles() {
    return css`
    sl-input,sl-select{
      width: 98.5%;
      --sl-input-focus-ring-color:hsl(74, 73%, 51%);
    }
    .select--standard .select__combobox {
      border-bottom: solid var(4px) var(#fff);
    }
    sl-option::part(base){
      font-size:12px;
    }
    sl-select::part(combobox){
      border-bottom: 0px solid #0186a7;
      font-size:12px;
      border-bottom: 2px solid #0186a7;
      border-radius:5px;
    }
    sl-input::part(input){
        border-bottom: 2px solid #0186a7;
        border-radius:5px;
        font-size:14px;
      }
      .form sl-tooltip::part(body){
        background-color: #e6d48c;
        outline:#e7fb32;
        color: #000;
      }
      sl-tooltip::part(body){
        background-color: #119231;
        outline:#119231;
        text-color: #fff;
      }
    .progress sl-progress-ring{
      color:#000000;
      font-size:30px;
      position:absolute;
      right:50px;
      top:120px;
      background-color:#ffffff;
      border-radius:50%;
    }
    .progress label{
      position:absolute;
      font-size:30px;
      right:20px;
      top:70px;
      color:#000000;
    }
    #bod{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-sizing:border-box;
      padding:16px 0px;
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
      font-size:25px;
      text-transform:uppercase;
      text-align:center;
    }
    .header {
      background:linear-gradient(to left,#d1cdcb,	#1b05e1);
      padding:1px 0;
    }
    .container{
      background-color: #fff;
     border-radius:10px;
     -webkit-border-radius:10px;
     overflow-x:hidden;
     width:56.7%;
     min-height:553px;
     box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12. ;
     background:#e8faf7;
    }
    .form{
      padding: 12px 12px;
      position:relative;
      background-color:#e8faf7;
    }
    .form-control label{
      display:block;
      font-weight:bold;
      font-family: 'Mulish', sans-serif;
      font-size:14px;
      padding:2px;
    }
    .form .btn {
      background:linear-gradient(to left,#74ebd5,	#9face6);
      border-radius:6px;
      border:none;
      outline:none;
      display:block;
      font-size:12px;
      padding:12px 0;
      margin:11px 0px;
      width:30%;
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
      font-size:12px;
      font-weight:lighter;
    }
    .radio1 label{
      font-family:"mulish",sans-serif;
      font-size:12px;
      font-weight:lighter;
    }
    .radio input{
      margin:10px 10px 10px;
      cursor:pointer;
    }
    .radio1 input{
      margin:10px 10px 10px;
      cursor:pointer;
    }
    #display{
      color:red
    }
    select{
      border:2px solid #f0f0f0
      border-radius:5px;
     
    }
    select input:focus{
      outline:0;
      border-color:#1e1e1e
    }
    

    .part1{
      box-shadow:0 -1px 5px -1px #fff;
      background-color:#e8eded;
      margin:-30px -37px;
      padding:0px 20px;
      width:330px;
      height:350px;
      border-radius:10px;
      border-top-left-radius:0px;
      border-top-right-radius:0px;
      /* display:none; */
    } 
    .part2{
      background-color:#e8eded;
      margin:-30px -37px;
      padding:0px 20px;
      width:330px;
      height:350px;
      border-radius:10px;
      border-top-left-radius:0px;
      border-top-right-radius:0px;
      /* display:none; */
    }
    .part1 label{
      padding:8px;
    }
    .part2 label{
      padding:8px;
    }
    .part3 label{
      padding:8px;
    }
    .part3{
      background-color:#e8eded;
      margin:-30px -37px;
      padding:0px 20px;
      width:330px;
      height:350px;
      border-radius:10px;
      border-top-left-radius:0px;
      border-top-right-radius:0px;
    }
    
    .part3 #zip{
      width:160px;
      /* padding:0px 5px; */
      margin:0px 1.5px;
      height:100%;
    }
    .part3 #city{
      width:160px;
      /* padding:0px 5px; */
      margin:0px 1.5px;
    }
    .btn-box{
      display:flex;
      gap:5px;
      background-color:#e8eded;
      margin:0px -20px;
      padding:0px 20px;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px; 
      border-bottom:-20px;
    }
    h3{
      text-align:center;
      font-family:Mulish;
    }
    sl-progress-bar::part(base){
      border-radius:0px;
      background:#e9f6f4;
    }
    span{
      color:red;
      font-weight:bolder;
      font-size:16px;
    }
    .empform .step-row{
      margin-right:30px;
      width:370px;
      display:flex;
      height:40px;
      align-items:center;
      position:relative;
      overflow:hidden;
      border-top-left-radius:10px;
      border-top-right-radius:10px;
      border-bottom:2px ridge #28282e;
      background-color:#e8eded;
    }
    .empform .test{
      background-color:black;
      margin-left:24px;
    }
    
    .step-col{
      text-align:center;
      width:133.3px;
      position:relative;
    }
    #step-progress{
      position:absolute;
      width:123.3px;
      height:100%;
      background:linear-gradient(to left,#74ebd5,	#9face6);
      transition:1s;
    }
    #step-progress::after{
      content:'';
      height:0;
      width:0;
      border-top:20px solid transparent;
      border-bottom:20px solid transparent;
      position:absolute;
      right:-20px;
      top:0;
      border-left:20px solid #74ebd5;   
    }
    .visible{
      display:block;
    }
    .invisible{
      display:none;
    }
    .part1 sl-icon{
      color:#02717d;
      margin:-2px 5px;
    }
    .part2 sl-icon{
      color:#02717d;
      margin:-2px 5px;
    }
    .part3 sl-icon{
      color:#02717d;
      margin:-2px 5px;
    }
    small{
      font-family:"mulish"
    }
    .grid{
      display:flex;
    }
    .grid1{
      display:flex;  
    }
    .wrap{
      display:flex;
    }
    #emp{
      padding:80px 20px;
      background-color: transparent;
     width:80%;
    }
    .alert{
      z-index:2;
      width:58%;
      position:absolute;
    }
    a{
      cursor:help;
    }
    sl-progress-bar{
      padding-bottom:3px;
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
      console.log(this.editData.phone);
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
      console.log(e.target.value);
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
  progressOne() {
    if (this.empForm.name.isValidName === true) {
      this.progress1 = 20;
      this.finalprogress();
      console.log("in name");
    } else {
      this.progress1 = 0;
      this.finalprogress();
    }
  }
  progressTwo() {
    if (this.empForm.empCode.isValidName === true) {
      this.progress2 = 20;
      this.finalprogress();
    } else {
      this.progress2 = 0;
      this.finalprogress();
    }
  }
  progressThree() {
    if (this.empForm.address.isValidName === true) {
      this.progress3 = 20;
      this.finalprogress();
    } else {
      this.progress3 = 0;
      this.finalprogress();
    }
  }
  progressFour() {
    if (this.empForm.landmark.isValidName === true) {
      this.progress4 = 20;
      this.finalprogress();
    } else {
      this.progress4 = 0;
      this.finalprogress();
    }
  }
  progressFive() {
    if (this.empForm.zipcode.isValidName === true) {
      this.progress5 = 20;
      this.finalprogress();
    } else {
      this.progress5 = 0;
      this.finalprogress();
    }
  }
  finalprogress() {
    this.progress =
      Number(this.progress1) +
      Number(this.progress2) +
      Number(this.progress3) +
      Number(this.progress4) +
      Number(this.progress5);
    console.log(this.progress);
  }
  next() {
    let part1 = this.renderRoot.querySelector(".part1");
    let part2 = this.renderRoot.querySelector(".part2");
    let progress = this.renderRoot.querySelector("#step-progress");
    part2.classList.add("visible");
    part1.classList.add("invisible");
    part2.classList.remove("invisible");
    progress.style.width = "266.6px";
  }
  back1() {
    let part1 = this.renderRoot.querySelector(".part1");
    let part2 = this.renderRoot.querySelector(".part2");
    let progress = this.renderRoot.querySelector("#step-progress");
    part2.classList.remove("visible");
    part2.classList.add("invisible");
    part1.classList.remove("invisible");
    part1.classList.add("visible");
    progress.style.width = "133.3px";
  }
  next2() {
    let part2 = this.renderRoot.querySelector(".part2");
    let part3 = this.renderRoot.querySelector(".part3");
    let progress = this.renderRoot.querySelector("#step-progress");
    part2.classList.remove("visible");
    part2.classList.add("invisible");
    part3.classList.remove("invisible");
    part3.classList.add("visible");
    progress.style.width = "370px";
  }
  back2() {
    let part2 = this.renderRoot.querySelector(".part2");
    let part3 = this.renderRoot.querySelector(".part3");
    let progress = this.renderRoot.querySelector("#step-progress");
    part3.classList.remove("visible");
    part3.classList.add("invisible");
    part2.classList.remove("invisible");
    part2.classList.add("visible");
    progress.style.width = "246.6px";
  }
  render() {
    return html`
      <div id="bod"> 
        <div class="container">
          <div class="header">
            <div class="alert">
            <sl-alert duration="1000" variant="danger">
              <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
              <strong>Fill all *Mandatory fields first</strong>
              </sl-alert>
  </div>
            <h2>EMPLOYEE FORM <sl-tooltip placement="right" content="Instructions to fill the form "><a style="font-size: 16px;" target="_blank" href="doc.html"
            ><sl-icon name="info-circle"></sl-icon></a></sl-tooltip></h2>        
          </div>
          ${!this.isEditing?html`<sl-progress-bar value=${this.progress} class="progress-bar-values">${
      this.progress
    }%</sl-progress-bar>`:""}
          <div class="wrap">
            <div class="empimg">
            <img src="src/assets/emp.gif" id="emp" width="">
            </div>
            <div class="empform">
          <div class="step-row">
            <div id="step-progress"></div>
            <div class="step-col"><small>Step 1</small></div>
            <div class="step-col"><small>Step 2</small></div>
            <div class="step-col"><small>Step 3</small></div>
          </div>
          <div class="test">
          <form
            class="form"
            @submit=${this.isEditing ? this.updateData : this.submit}
          >
          <div class="part1">
            <h3><sl-icon name="person-bounding-box"></sl-icon>PERSONAL DETAILS </h3>
            <div class="form-control">  
              <label for="name-input"> Fullname <span>*</span></label>
              <sl-tooltip hoist placement="right" content=${
                this.empForm.name?.errorMessage
                  ? this.empForm.name.errorMessage
                  : "Your fullname"
              }>
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
            </sl-tooltip>
            </div>

            
            <div class="form-control">
              <label for="email-input">Email <span>*</span></label>
              <div class="radio">
                <label for="personal">Personal</label><br />
                <input
                  type="radio"
                  name="email1"
                  value="personal"
                  @change=${this.handleRadioChange}
                />
                <label for="official">Official</label><br />
                <input
                  type="radio"
                  name="email1"
                  value="official"
                  @change=${this.handleRadioChange}
                />
              </div>
              <sl-tooltip hoist placement="right" content=${
                this.empForm.email?.errorMessage
                  ? this.empForm.email.errorMessage
                  : "Your email address personal/official"
              }>
              <sl-input
                id="email-input"
                name="email"
                placeholder="Enter your Email Address"
                required
                @input=${(e) => this.decider(e, "email")}
                style=${
                  this.empForm.email?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              ></sl-input>
            </sl-tooltip>
            </div>

            <div class="form-control">
              <label for="phone-input">Phone Number <span>*</span></label>
              <div class="radio1">
                <label for="primary">Primary</label><br />
                <input
                  type="radio"
                  value="primary"
                  name="phone1"
                  @change=${this.handleRadio1Change}
                  />
                <label for="secondary">Secondary</label><br />
                <input
                  type="radio"
                  name="phone1"
                  value="secondary"
                  @change=${this.handleRadio1Change}
                />
                <label for="emergency">Emergency</label><br />
                <input
                  type="radio"
                  value="emergency"
                  name="phone1"
                  @change=${this.handleRadio1Change}
                />
              </div>
              ${
                !this.isEditing
                  ? html`
                      <sl-tooltip
                        hoist
                        placement="right"
                        content=${this.empForm.phone?.errorMessage
                          ? this.empForm.phone.errorMessage
                          : "Your 10 digit Phone number"}
                      >
                        <sl-input
                          type="Number"
                          id="phone-input"
                          name="phone"
                          placeholder="Enter your phone"
                          autocomplete="off"
                          required
                          @input=${(e) => this.decider(e, "phone")}
                          style=${this.empForm.phone?.errorMessage
                            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                            : ""}
                        ></sl-input>
                      </sl-tooltip>
                    `
                  : html`
                      <sl-tooltip
                        hoist
                        placement="right"
                        content=${this.empForm.phone?.errorMessage
                          ? this.empForm.phone.errorMessage
                          : "Your 10 digit Phone number"}
                        ><sl-input
                        name="phone"
                          id="phone-input"
                          placeholder="Enter your phone"
                          autocomplete="off"
                          required
                          @input=${(e) => this.decider(e, "phone")}
                          style=${this.empForm.phone?.errorMessage
                            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                            : ""}
                        ></sl-input>
                      </sl-tooltip>
                    `
              }
            </div>
            <div class="btn-box">
                <button @click=${
                  this.next
                } class ="btn" type="button" id="next1">Next</button>
            </div>
            </div>
            <div class="part2 invisible" >
              <h3> <sl-icon name="briefcase"></sl-icon>WORK DETAILS</h3>
            <div class="form-control">
              <label for="empcode-input">Employee Code <span>*</span></label>
              <sl-tooltip hoist  placement="right" content=${
                this.empForm.empCode?.errorMessage
                  ? this.empForm.empCode.errorMessage
                  : "Your Employee Code"
              }>
              <sl-input
                id="empcode-input"
                required
                placeholder="Enter your Employee code"
                name="empCode"
                @input=${(e) => this.decider(e, "empCode")}
                style=${
                  this.empForm.empCode?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
                   placeholder="Clearable"
                clearable
              /></sl-input>
              </sl-tooltip>
            </div>
            <div class="form-control">
            <label>Designation <span>*</span></label>
            <sl-tooltip hoist  placement="right" content="Your Designation">
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
              </sl-tooltip>
            </div>

            <div class="form-control">
              <label>Department <span>*</span></label>
              <sl-tooltip hoist placement="right" content="Your Department">
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
                ${repeat(
                  department,
                  (e) => html`<sl-option value="${e}">${e}</sl-option>`
                )}
              </sl-select>
              </sl-tooltip>
            </div>
            
            <div class="form-control">
              <label>Work Address</label>
              <sl-tooltip  hoist placement="right" content="Your Work Address"}>
              <sl-input
                id="adline2"
                placeholder="Enter your work address"
                autocomplete="off"
                name="address1"
                @input=${(e) => this.decider(e, "address1")}
              ></sl-input>
                </sl-tooltip>
            </div>
            <div class="btn-box">
              <button @click=${
                this.back1
              } class="btn" type="button" id="back1">Back</button>
              <button @click=${
                this.next2
              } class="btn" type="button" id="next2">Next</button>
            </div>
          </div>
          <div class="part3 invisible">
          <h3> <sl-icon name="house"></sl-icon>ADDRESS DETAILS</h3>
            <div class="form-control">
              <label>Address <span>*</span></label>
              <sl-tooltip  hoist placement="right" content=${
                this.empForm.address?.errorMessage
                  ? this.empForm.address.errorMessage
                  : "Your Address"
              }>
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
              </sl-tooltip>
            </div>
            <div class="form-control">
              <label>Landmark <span>*</span></label>
              <sl-tooltip  hoist placement="right" content=${
                this.empForm.landmark?.errorMessage
                  ? this.empForm.landmark.errorMessage
                  : "Your landmark"
              }>
              <sl-input
                id="landmark"
                required
                type="text"
                name="landmark"
                placeholder="Enter your Landmark"
                autocomplete="off"
                @input=${(e) => this.decider(e, "landmark")}
                style=${
                  this.empForm.landmark?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              /></sl-input>
              </sl-tooltip>
            </div>
                <div class="grid">
            <div class="form-control">
              <label>Country <span>*</span></label>
              <sl-tooltip  hoist  placement="left" content="Your Country">
              <sl-select 
                id="country"
                required
                name="country"
                placeholder="Choose your country"
                @click=${(e) => this.decider(e, "country")}
               
              >
                ${repeat(
                  country,
                  (e) => html` <sl-option value=${e}>${e}</sl-option>`
                )}
              </sl-select>
                </sl-tooltip>
            </div>
            <div class="form-control">
              
            <label>State <span>*</span></label>
            <sl-tooltip  hoist placement="right" content="Your State">
              <sl-select
                id="state"
                required
                name="state"
                placeholder="Choose your state"
                @click=${(e) => this.decider(e, "state")}
              >
                ${repeat(
                  state,
                  (e) => html` <sl-option value=${e}>${e}</sl-option>`
                )}
              </sl-select>
                </sl-tooltip>
            </div>
                </div>
                <div class=grid1>
            <div class="form-control">
              <label>City <span>*</span></label>
              <sl-tooltip  hoist placement="left" content="Your City">
              <sl-select
                id="city"
                required
                name="city"
                placeholder="Choose your city"
                @click=${(e) => this.decider(e, "city")}
              >
                ${repeat(
                  city,
                  (e) => html` <sl-option value=${e}>${e}</sl-option>`
                )}
              </sl-select>
                </sl-tooltip>
            </div>

            <div class="form-control">
              <label>Zip <span>*</span></label>
              <sl-tooltip  hoist placement="right" content=${
                this.empForm.zipcode?.errorMessage
                  ? this.empForm.zipcode.errorMessage
                  : "Your Zip"
              }>
              <sl-input
                type="Number"
                id="zip"
                required
                placeholder="Enter your zip"
                autocomplete="off"
                name= "zipcode"
                @input=${(e) => this.decider(e, "zipcode")}
                style=${
                  this.empForm.zipcode?.errorMessage
                    ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
                    : ""
                }
              ></sl-input>
              </sl-tooltip>
            </div>
              </div>
                <div class=btn-box>
            ${
              !this.isEditing
                ? html`<button
                      @click=${this.back2}
                      class="btn"
                      type="button"
                      id="back2"
                    >
                      Back
                    </button>
                    <button class="btn" type="submit">Submit</button>`
                : html`
                <button
                      @click=${this.back2}
                      class="btn"
                      type="button"
                      id="back2"
                    >
                      Back
                    </button>
                    <button class="btn" type="submit">Update</button>
                    <slot></slot> `
            }
            </div>
            
          </div>
          </form>
          </div>
          </div>
        </div>
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
    console.log(this.PhoneChecked)

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
    const value = e.target.value;

    const validationRules = {
      name: {
        condition: value.length > 0 && value.length <= 7,
        error: `⚠ Username can't exceed 7 characters`,
        emptyError: "⚠ Can't be blank",
        success: "",
      },
      empCode: {
        condition:
          value.length > 0 &&
          value.length <= 7 &&
          ((value.length === 7 && value.match(/[0-9]{6}[A-Z]/)) ||
            value.match(/[0-9]{5}[A-Z][0-9]/) ||
            value.match(/[0-9]{4}[A-Z][0-9]{2}/) ||
            value.match(/[0-9]{3}[A-Z][0-9]{3}/) ||
            value.match(/[0-9]{2}[A-Z][0-9]{4}/) ||
            value.match(/[0-9][A-Z][0-9]{5}/) ||
            value.match(/[A-Z][0-9]{6}/)),
        error: " ⚠ Enter a valid format Match for {24248J2} format *one Alphabet ",
        emptyError: " ⚠ Can't be blank",
        success: "",
      },
      email: {
        condition:
          value.length > 0 &&
          ((this.EmailChecked === "official" && value.match(/^[^\s@]+@annalect\.com$/)) ||
            (this.EmailChecked === "personal" && value.match(/^[^\s@]+@gmail\.com$/))),
        error:
          this.EmailChecked === "official"
            ? "⚠ Match official email format"
            : "⚠ Match personal email format",
        emptyError: "⚠ Can't be blank",
        success: "",
      },
      phone: {
        condition:
          (this.PhoneChecked === "primary" ||
            this.PhoneChecked === "secondary" ||
            this.PhoneChecked === "emergency") &&
          value.length === 10,
        error: "⚠ Invalid",
        emptyError: "⚠ Can't be blank",
        success: "",
      },
      address: {
        condition: value.length > 0 && value.length <= 80,
        error: "⚠ Enter valid Address",
        emptyError: "⚠ Can't be blank",
        success: "",
      },
      landmark: {
        condition:
          value.length === 0 || (value.length > 0 && value.length <= 5),
        error: "⚠ Length can't exceed 5",
        emptyError: "⚠ Can't be blank",
        success: "",
      },

      zipcode: {
        condition: value.length > 0 && value.length === 6,
        error: "⚠ Length must be 6",
        emptyError: "⚠ Can't be blank",
        success: "",
      },
    };

    const rule = validationRules[type];

    if (value.length === 0) {
      this.error_false(type, rule.emptyError);
    } else if (rule && rule.condition) {
      this.error_true(type, rule.success);
    } else if (rule) {
      this.error_false(type, rule.error);
    }

    if (type === "name") {
      this.progressOne();
    } else if (type === "empCode") {
      this.progressTwo();
    } else if (type === "address") {
      this.progressThree();
    } else if (type === "landmark") {
      this.progressFour();
    } else if (type === "zipcode") {
      this.progressFive();
    }
  }
  submit(e) {
    e.preventDefault();
    if (
      this.empForm.name.isValidName === true &&
      this.empForm.empCode.isValidName === true &&
      this.empForm.email.isValidName === true &&
      this.empForm.phone.isValidName === true &&
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
    } else {
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.show();
    }
  }
}

window.customElements.define("my-element", MyElement);
