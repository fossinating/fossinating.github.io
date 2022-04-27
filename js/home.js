let events = ["wheel", "touchmove"]

function close_init_slide() {
    document.getElementsByTagName("html")[0].classList.add("init-slide-hidden")
    events.forEach(event => {
        document.removeEventListener(event, close_init_slide)
    });
}


events.forEach(event => {
    document.addEventListener(event, close_init_slide)
});