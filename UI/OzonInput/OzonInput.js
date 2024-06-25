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

    change(func){
        function setData(event){
            if (event.target.value == "") {
                this.input.value = 0;
            }
            func(event.target.value);
        }
        this.input.onkeydown = (e) => {
            if (e.code == 'Enter') {
                setData(e);
            }
        };
        this.input.onblur = (e) => {
            setData(e);
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
