export default class OzonInput {
    constructor(initInputValue) {
        this.validateInput();
		this.input = document.querySelector(".input");
		this.initInputValue = initInputValue;
		this.setInput();
		// this.onblur();
    }
	setInput(){
		this.input.value = this.initInputValue;
	}

	// onblur(){
	// 	this.input.onblur = function (e) {
	// 		// return e.target.value;
	// 		this.input.value = e.target.value;
	// 		return this.input.value;
    // 	};
	// }

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

    debounce(callee, timeoutMs) {
        return function perform(...args) {
            let previousCall = this.lastCall;

            this.lastCall = Date.now();

            if (previousCall && this.lastCall - previousCall <= timeoutMs) {
                clearTimeout(this.lastCallTimer);
            }

            this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
        };
    }
}
