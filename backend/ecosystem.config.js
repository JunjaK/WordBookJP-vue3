module.exports = {
  apps: [{
    name: 'jp-wordbook-be',
    // package.json에 정의된 npm run start를 실행하게 해서 PM2로 관리하게 한다.
    script: 'yarn',
    args: 'dev',
    instances: '1',
    max_memory_restart: '1G',
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
  }]
}
