export default class OzonInput {
    constructor(id, func) {
        this.input = document.querySelector(`#${id}`);
        this.func = func;
        this.validateInput();
        this.onChange();
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
        this.input.onkeydown = (e) => {
            if (e.code == 'Enter') {
                setData(e);
            }
        };
        window.addEventListener('touchstart', (e) => { 
            this.input.blur();
            setData(e);
        }, false);
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
