function f1(err, data) {
  console.log('[f1]', 'err:', err, 'data:', data);
  if (err) {
    console.error('[f1] got error:', err);
  } else {
    console.log('[f1] sucess got data:', data);
  }
}

function f2(n, cb) {
  console.log('[f2] n:', n);
  console.log('[f2] do something and call callback function...')
  cb(null, n * 2);
}

console.log('1');
f2(6, f1);
