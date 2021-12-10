const template = document.createElement("template");
template.innerHTML = `

<style>
    .user-card{
        width: 500px;
        display: flex;
        flex-direction: raw;
        border: 1px solid gray;
        border-radius: 5px
    }
    h3{
        color: gray;
        padding: 0px 10px;
        margin: 0px;
    }
    .user-card img{
        width: 100%;
        flex: 3;
    }
    .info{
        padding: 0px 15px;
    }
    .user-card-details{
        flex: 8;
    }
</style>
<div class="user-card">
        <img src="https://randomuser.me/api/portraits/men/1.jpg">
    <div class="user-card-details">
        <h3>Name : Ismaiel Altahan</h3>
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
  }
}

window.customElements.define("user-card", UserCard);
