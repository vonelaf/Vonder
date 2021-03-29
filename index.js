function Vonder(o) {
    if(o.elem !== undefined) {
        this.elem = document.querySelector(o.elem)
        if(o.data !== undefined) {
            let line = this.elem.innerHTML
            if(/\{(.*)\}/gim.test(line)) {
                let str = line.replace(/\{(.*)\}/gm, '$1')
                this.elem.innerHTML = o.data[str]
            }
        }
        if(o.events !== undefined) {

            if(this.elem.getAttribute('v-click') !== undefined) {
                this.elem.addEventListener('click', o.events[this.elem.getAttribute('v-click')])
            }
            if(this.elem.getAttribute('v-contextmenu')!== undefined) {
                this.elem.addEventListener('contextmenu', o.events[this.elem.getAttribute('v-contextmenu')])
            }
            if(this.elem.getAttribute('v-mouseover') !== undefined) {
                this.elem.addEventListener('mouseover', o.events[this.elem.getAttribute('v-mouseover')])
            }
            if(this.elem.getAttribute('v-mouseout') !== undefined) {
                this.elem.addEventListener('mouseout', o.events[this.elem.getAttribute('v-mouseout')])
            }
            if(this.elem.getAttribute('v-mousedown') !== undefined) {
                this.elem.addEventListener('mousedown', o.events[this.elem.getAttribute('v-mousedown')])
            }
            if(this.elem.getAttribute('v-mouseup') !== undefined) {
                this.elem.addEventListener('mouseup', o.events[this.elem.getAttribute('v-mouseup')])
            }
            if(this.elem.getAttribute('v-mousemove') !== undefined) {
                this.elem.addEventListener('mousemove', o.events[this.elem.getAttribute('v-mousemove')])
            }
            if(this.elem.getAttribute('v-transitionenv') !== undefined) {
                this.elem.addEventListener('transitionend', o.events[this.elem.getAttribute('v-transitionend')])
            }
        
        }
    }
}