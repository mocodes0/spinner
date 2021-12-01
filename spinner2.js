process.stdout.write('hello from spinner1.js... \rheyyy\n');
Symbol= ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ',,'\r|   ','\r/   ','\r-   ','\r\\   ']
for (let i = 0;i <= Symbol.length-1 ;i++) {
setTimeout(()=>{process.stdout.write(Symbol[i]);},50*i);}
