const shell = require('shelljs');

if (shell.ls('localhost-*.pem').length !== 2) {
  shell.chmod('+x', './bin/cert/create-cert.sh');
  shell.exec('./bin/cert/create-cert.sh');
}
