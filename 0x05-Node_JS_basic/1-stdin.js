// Using Process stdin to read input from a user

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString();
  process.stdout.write(`Your name is: ${name}`);
  process.stdin.pause();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
