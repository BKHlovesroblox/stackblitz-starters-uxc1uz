const { exec } = require('child_process');
exec('ls | grep js', (err, stdout, stderr) => {
  if (err) {
    // Some error occurred
    console.error(err);
  } else {
    // The entire stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});

