const apolloCountdownMessage = "all engine running... LIFT-OFF!";
let countdown = 8;

while (countdown >= 1){  
    console.log(countdown);
    countdown--; /*le resta al valor del countdown del loop while*/
}
console.log(countdown);/*sin este console.log no me devolveria el countdown -= 1 (8-1=7, 7-1=6 ... 1-1=0 FIN seria infinito*/
  console.log(apolloCountdownMessage);
/* let count = 1;
while (count <= 10) {
  console.log("The count is: " + count);
  count -= 8;
}*/