function sleepSync(milliseconds) {
    const start = Date.now();
    const expire = start + milliseconds;
    while (Date.now() < expire) {}
}


//  2sn senkron 
function work() {
    sleepSync(20);
    for(let i =0; i<2; i++){
        console.log(i)
    }
}


console.time('Workflow');

for (let i = 0; i <= 10; i++) {
    work();
}

console.timeEnd('Workflow');


//yukarıdaki mantıgı engellemek için aşağıdaki kod parçası kullanıldı
function doWork() {
    for (let i = 0; i <= 10; i++) {
        work();
    }
    console.log('Workflow finished.');
}

doWork();
console.log('Hello world!');