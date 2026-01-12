function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait-1 is over");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait-2 is over");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait-3 is over");
    }, t * 1000);
  });
}

function main(t1, t2, t3) {
  return Promise.all([
    wait1(t1),
    wait2(t2),
    wait3(t3)
  ]);
}

main(1, 0.5, 1).then((data) => {
  data.forEach((val) => {
    console.log(val);
  });
});