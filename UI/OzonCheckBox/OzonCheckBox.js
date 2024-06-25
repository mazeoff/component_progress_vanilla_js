export default class OzonCheckBox {
    constructor(id, initStatus, func) {
        this.id = id;
        this.checkbox = document.querySelector(`#${id}`);
        this.func = func;
        this.switchCheckBox(initStatus);
    }


    onblur(setProgress) {
        this.input.onblur = (e) => {
            if (e.target.value == "") {
                this.input.value = 0;
            }
            setProgress(e.target.value);
        };
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
