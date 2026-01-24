function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait-1 completed");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait-2 completed");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait-3 completed");
    }, t * 1000);
  });
}


wait1(1).then((data) => {
  console.log(data);
  return wait2(1)
}).then((data) => {
  console.log(data);
  return wait3(1);
}).then((data) => {
  console.log(data);
});

