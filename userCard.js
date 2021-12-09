const template = document.createElement('template');
template.innerHTML= `
<div>
<h3> Name </h3>
</div>
`;


class UserCard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

window.customElements.define('user-card', UserCard)