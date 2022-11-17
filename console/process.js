const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));