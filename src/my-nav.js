import { LitElement, css, html } from 'lit'
import litlogo from './assets/icons8-joyent.svg'

export class MyNav extends LitElement {

    render() {
        return html`   
        <nav id="navbar">
            <ul>
                <img src=${litlogo} id="logo1">
                <li id="logo">Omni</label></li>
            <div id="right">
                <a href="index.html">Home</a>
                <a href="empdata.html">Saved Data</a>
            </div>
            </ul>
    </nav>`
    }
    static get styles() {
        return css`
    #navbar{
        background-color:#66c2ff;
        height:60px;
        padding:2px;
    }
    #logo{
        font-size:30px;
        color:whitesmoke;
        font-weight:bolder;
        font-style:sans-serif;
        
    }
    ul{
    list-style-type: none;
    display:flex;
    }
    a{
        text-decoration:none;
        float:right;
        margin:10px;
        border: 2px solid blue;
        padding:2px;
        border-radius:5px;
    }
    #logo1{
        margin-top:-25px;
        padding:12px;
    }
    #right{
        display:flex;
        position: absolute;
        right: 100px;
    }
    `
    }

}
window.customElements.define('my-nav', MyNav)
