export default class OzonInput {
    constructor(id) {
        this.input = document.querySelector(`#${id}`);
        this.validateInput();
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
        this.input.onkeyup = function (e) {
            let value = e.target.value;
            if (!regex.test(value) || value > 100) {
                e.target.value = e.target.value.slice(0, -1);
            }
            return value;
        };
    }
}
