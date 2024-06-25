export default class OzonInput {
    constructor(id, func) {
        this.input = document.querySelector(`#${id}`);
        this.func = func;
        this.validateInput();
    }

    onChange(){
        let setData = (e) => {
            if (e.target.value == "") {
                this.input.value = 0;
            }
            this.func(e.target.value);
        };
        this.input.onblur = (e) => {
            setData(e);
        };
        this.input.ontouchstart = (e) => {
            setData(e);
            this.blur();
        };
        this.input.onkeydown = (e) => {
            if (e.code == 'Enter') {
                setData(e);
            }
        };
    }

    validateInput() {
        this.input.oninput = function (e) {
            let value = e.target.value;
            e.target.value = value.replace(/\D/g, '');
            if (value > 100) {
                e.target.value = value.slice(0, -1);
            }
        };
    }
}
