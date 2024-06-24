export default class OzonInput {
    constructor(initInputValue) {
        this.validateInput();
        this.input = document.querySelector(".input");
        this.initInputValue = initInputValue;
        this.setInput();
    }
    setInput() {
        this.input.value = this.initInputValue;
    }

    onblur(setProgress) {
        this.input.onblur = function (e) {
            if (e.target.value == "") {
                this.input.value = 0;
            }
            setProgress(e.target.value);
        };
    }

    validateInput() {
        const regex = /^\d+$/;
        var input = document.querySelector(".input");
        input.onkeyup = function (e) {
            let value = e.target.value;
            if (!regex.test(value) || value > 100) {
                e.target.value = e.target.value.slice(0, -1);
            }
            return value;
        };
    }
}
