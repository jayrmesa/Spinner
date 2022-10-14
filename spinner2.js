let spinner = `|/-\\|/-\\|`;
let delay = 100;

for (const char of spinner) {
    setTimeout(() => {
      process.stdout.write(`\r` + char + "  ");
    }, delay += 300)
}
setTimeout(() => process.stdout.write(`\n`), delay);