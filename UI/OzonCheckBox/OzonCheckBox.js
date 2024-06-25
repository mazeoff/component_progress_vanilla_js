export default class OzonCheckBox {
    constructor(id, initStatus, func) {
        this.id = id;
        this.checkbox = document.querySelector(`#${id}`);
        this.func = func;
        this.switchCheckBox(initStatus);
    }

    change() {
        this.checkbox.onchange = () => {
            this.func(this.checkbox.checked);
        };
    }

    switchCheckBox(initStatus){
        this.checkbox.checked = initStatus;
        this.func(initStatus);
    }
}
