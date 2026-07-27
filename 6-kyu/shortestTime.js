// function shorterestTime(n,m,speeds) {
//     if (n === 0 ){
//         let time = 0
//     }
//     const [a,b,c,d] = speeds;
//     Both = (1*d) + b + c + (m*a) + b
//     stairs = d*n;
//     elevator = ((Math.abs(n-m))*a) + b + c + (n*a) + b
//     time = Math.min(stairs,elevator,Both);
//   return time;
// }
function shorterestTime(n, m, speeds) {
    if (n === 0) return 0;

    const [a, b, c, d] = speeds;
    let stairs = d * n;
    let elevator = (Math.abs(n - m) * a) + b + c + (n * a) + b;
    let time = Math.min(stairs, elevator);

    for (let k = 1; k < n; k++) {
        let x = n - k; // floor where John catches the elevator after walking k floors
        let mixed = (k * d) + (Math.abs(m - x) * a) + b + c + (x * a) + b;
        time = Math.min(time, mixed);
    }

    return time;
}
console.log(shorterestTime(4,5,[1,2,3,10]))
console.log(shorterestTime(0,5,[1,2,3,10]))
console.log(shorterestTime(4,4,[1,2,3,10]))
console.log(shorterestTime(1,1,[1,2,3,10]))
console.log(shorterestTime(1,1,[2,3,4,10]))
console.log(shorterestTime(4,3,[1,2,3,10]))
console.log(shorterestTime(4,3,[2,3,4,5]))
console.log(shorterestTime(7,6,[3,1,1,4]))
