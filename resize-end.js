class ResizeEnd {
    constructor(element,delay=500,cb) {
        let $el = element
        this.$el = $el
        this.delay = delay
        this.cb = cb
        this.rtime = new Date();
        this.timeout = false;
        this.resizeend = this.resizeend.bind(this)
        $el.onresize= () => {
             this.rtime = new Date();
             if (this.timeout === false) {
                 this.timeout = true;
                 setTimeout(this.resizeend.bind(this), delay)
             }
        }
    }
    resizeend() {
        if (new Date() - this.rtime < this.delay) {
            setTimeout(this.resizeend, this.delay);
        } else {
            this.timeout = false;
            this.cb()
        }
    }
};

export default ResizeEnd
