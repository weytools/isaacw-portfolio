export function introAnimation(){
    console.log('intro animation')
    anime({
        targets: '#topNav',
        opacity: 0,
        delay: 1000
    })
}