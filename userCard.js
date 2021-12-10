const template = document.createElement("template");
template.innerHTML = `

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
    .info{
        padding: 0px 15px;
    }
    .info p{
        margin: 10px 0px;
    }
    .user-card-details{
        flex: 8;
    }
</style>
<div class="user-card">
        <img>
    <div class="user-card-details">
        <h2></h2>
            <div class="info">
                <p>Email : Ismaiel.altahan@gmail.com</p>
                <p>Phone : 01634554691</p>
                <button>Hide info </button>

            </div>
    </div>

</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('profileImg');
  }
}

window.customElements.define("user-card", UserCard);
