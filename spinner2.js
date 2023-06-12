const spinner = function(spin) {
  let delay = 200;

  for (let i = 0; i < spin.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spin[i]}`);
    }, delay);
    delay += 200;
  }
};


const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
spinner(spin);