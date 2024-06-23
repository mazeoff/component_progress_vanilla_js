export default class ProgressBar {
    constructor(container) {
        this.container = container;
        this.progressBar = container.querySelector(".progress-bar");
		this.progressValue = document.querySelector(".progress-value");
        this.progress = 0;
		this.progressEndValue = 75;
		this.progressValueSpeed = 5;
        this.render();
    }

    setProgress(progress) {
        if (progress >= 0 && progress <= 100) {
            this.progressEndValue = progress;
            this.render();
        }
    }

    render() {
        // this.progressBar.style.width = `${this.progress}%`;
        this.progress = 0;
        let timer = setInterval(() => {
            this.progress += 1;

            this.progressBar.style.background = `conic-gradient(#005bff ${
                (this.progress / 100) * 360
            }deg, #eff3f6 0deg)`;

            if (this.progress >= this.progressEndValue) {
                clearInterval(timer);
            }
        }, this.progressValueSpeed);
    }
}