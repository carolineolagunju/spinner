const spinner = function(spin) {
  let delay = 200;

  for (const item of spin) {
    setTimeout(() => {
      process.stdout.write(`\r${item}`);
    }, delay);
    delay += 200;
  }
};


const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
spinner(spin);