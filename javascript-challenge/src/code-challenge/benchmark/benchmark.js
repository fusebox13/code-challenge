let Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

//TODO: Properly setup up babel-node so this script can be run via command line
//Note:  Babel node should be included with babel cli, but there appears to be an issues on Windows
if (process.argv[2]) {
  const participant = process.argv[2].split('=')[1];
  
}


// // add tests
suite.add('RegExp#test', function() {
  /o/.test('Put some code here!');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('Slowest is ' + this.filter('slowest').map('name'));
})
// run async
.run({ 'async': true });