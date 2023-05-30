import { LitElement, css, html } from 'lit'

export class MyNav extends LitElement {

    render() {
        return html`   
        <nav id="navbar">
            <ul>
                <img src="src/assets/omni.webp" id="logo1">
                <li id="logo">omni</label></li>
            <div id="right">
                <a href="index.html">Home</a>
                <a href="empdata.html">Saved data</a>
            </div>
            </ul>
    </nav>`
    }
    static get styles() {
        return css`
    #navbar{
        background-color:#0c0120;
        height:60px;
        padding:2px;
    }
    #logo{
        font-size:30px;
        color:whitesmoke;
        font-weight:bolder;
        font-family:Montserrat;
        margin:-2px;
        padding:-1px;
        position:absolute;
        left:105px;
        top:13px;
    }
    ul{
        list-style-type: none;
        display:flex;
    }
    a{
        text-decoration:none;
        font-family:Mulish;
        color:whitesmoke;
        float:right;
        margin:3px;
        padding:2px;
        border-radius:5px;
        cursor:pointer;
    }
    #logo1{
     width:35px;
     cursor:pointer;
     position: absolute;
     left: 50px;
     top: 13px;
    }
    #right{
        display:flex;
        position: absolute;
        right: 70px;
    }
    `
    }

}
window.customElements.define('my-nav', MyNav)
