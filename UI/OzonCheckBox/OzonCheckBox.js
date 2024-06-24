export default class OzonCheckBox {
    constructor(id, initStatus) {
        this.id = id;
        this.checkbox = document.querySelector(`#${id}`);
        this.initStatus = initStatus;
    }


    onblur(setProgress) {
        this.input.onblur = (e) => {
            if (e.target.value == "") {
                this.input.value = 0;
            }
            setProgress(e.target.value);
        };
    }

    change(func) {
        this.checkbox.onchange = (e) => {
            func(this.checkbox.checked);
        };
    }
}
