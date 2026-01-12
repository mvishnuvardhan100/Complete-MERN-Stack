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
  wait1(t1).then((data) => {
    console.log(data);
    return wait2();
  }).then((data) => {
    console.log(data);
    return wait3();
  }).then((data) => {
    console.log(data);
  });
}

main(1, 0.5, 1);