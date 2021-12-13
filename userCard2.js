import { html, render } from "lit-html";

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.toggleBtn = true;

    const template = html`
    <style>
    .user-card{
        margin: 10px;
        width: 500px;
        display: flex;
        flex-direction: raw;
        border: 1px solid gray;
        border-radius: 5px
    }
    h2{
        color: gray;
        padding: 5px 10px 0px 10px;
        margin: 0px;
    }
    .user-card img{
        width: 100%;
        flex: 3;
    }
    .info p{
        margin: 10px 0px;
    }
    .user-card-details{
        flex: 7;
        padding: 0px 15px;
    }

    #toggle-info{
        background-color: #008CBA;
        border: none;
        border-radius: 5px;
        padding: 10px;
        color: white;
        cursor: pointer;
    }
</style>
<div class="user-card">
        <img src=${this.getAttribute("profileImg")}>
    <div class="user-card-details">
        <h2>${this.getAttribute("name")}</h2>
            <div class="info">
                <p>Email : <slot name="email"></p>
                <p>Phone : <slot name="phone"></p>
            </div>
            <button id="toggle-info">Hide info</button>
    </div>

</div>
    `;

    render(template, this.shadowRoot);
  }

  toggleInfo() {
    this.toggleBtn = !this.toggleBtn;
    const toggleInfo = this.shadowRoot.querySelector("#toggle-info");
    const info = this.shadowRoot.querySelector(".info");

    if (this.toggleBtn) {
      info.style.display = "block";
      toggleInfo.innerText = "Hide Info";
      toggleInfo.style.backgroundColor = "#008CBA";
    } else {
      info.style.display = "none";
      toggleInfo.innerText = "Show Info";
      toggleInfo.style.backgroundColor = "#f44336";
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo());
  }
}

window.customElements.define("user-card-2", UserCard);
