function timer(seconds) {
  const interval = setTimeout(function() {
    if (seconds < 0) clearTimeout; 
    seconds--;
    process.stdout.write('\x07');
  }, time * 1000);
}
