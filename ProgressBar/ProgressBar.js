export default class ProgressBar {
    constructor(container) {
        this.container = container;
        this.progressBar = container.querySelector(".progress-bar");
		this.progressValue = document.querySelector(".progress-value");
        this.progress = 0;
        this.progressDeg = 0;
		this.progressEndValue = 75;
        this.progressEndValuePrev;
		this.progressValueSpeed = 5;
        this.render();
    }

    setProgress(progress) {
        if (progress >= 0 && progress <= 100) {
            this.progressEndValue = parseInt(progress !== '' ? progress : 0);
            console.log(this.progressEndValue);
            this.render();
        }
    }

    render() {
        let timer = setInterval(() => {
            if(this.progressEndValue > this.progress){
                this.progress++;
            }else{
                this.progress--;
            }
            this.progressDeg = Math.round(this.progress * 3.6);

            this.progressBar.style.background = `conic-gradient(#005bff ${
                this.progressDeg
            }deg, #eff3f6 0deg)`;

            if(this.progressEndValue >= this.progressEndValuePrev){
                if (this.progress >= this.progressEndValue) {
                    clearInterval(timer);
                    this.progressEndValuePrev = this.progressEndValue;
                }
            }else{
                if (this.progress <= this.progressEndValue) {
                    clearInterval(timer);
                    this.progressEndValuePrev = this.progressEndValue;
                }
            }
        }, this.progressValueSpeed);
    }
}