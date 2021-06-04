function rnorm(){
    const val = Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random())+0.5
    const pos = 0.1 * val + 0.5
    if (0.9 > pos && 0.1 < pos) {
        return val;
    } else if(0.9 > pos) {
        return 0.9
    } else {
        return 0.1
    }
}
