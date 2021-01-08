// HTML
var bar = new ProgressBar.Circle(html, {
    color: '#ba0f22',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 4000,
    easing: 'bounce',
    strokeWidth: 4,
    from: {color: '#ba0f22', a:0},
    to: {color: '#ba0f22', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0

// CSS
var bar2 = new ProgressBar.Circle(css, {
  color: '#ba0f22',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4000,
  easing: 'bounce',
  strokeWidth: 4,
  from: {color: '#ba0f22', a:0},
  to: {color: '#ba0f22', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar2.animate(0.9);  // Number from 0.0 to 1.0

// JAVASCRIPT
var bar3 = new ProgressBar.Circle(js, {
  color: '#ba0f22',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4000,
  easing: 'bounce',
  strokeWidth: 4,
  from: {color: '#ba0f22', a:0},
  to: {color: '#ba0f22', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar3.animate(0.8);  // Number from 0.0 to 1.0

// REACT
var bar4 = new ProgressBar.Circle(react, {
  color: '#ba0f22',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4000,
  easing: 'bounce',
  strokeWidth: 4,
  from: {color: '#ba0f22', a:0},
  to: {color: '#ba0f22', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar4.animate(0.9);  // Number from 0.0 to 1.0

// ANGULAR
var bar5 = new ProgressBar.Circle(angular, {
  color: '#ba0f22',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4000,
  easing: 'bounce',
  strokeWidth: 4,
  from: {color: '#ba0f22', a:0},
  to: {color: '#ba0f22', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar5.animate(0.9);  // Number from 0.0 to 1.0

// VUE
var bar7 = new ProgressBar.Circle(vue, {
  color: '#ba0f22',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4000,
  easing: 'bounce',
  strokeWidth: 4,
  from: {color: '#ba0f22', a:0},
  to: {color: '#ba0f22', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar7.animate(0.9);  // Number from 0.0 to 1.0

// cssframework
var bar6 = new ProgressBar.Circle(cssframework, {
  color: '#ba0f22',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 4000,
  easing: 'bounce',
  strokeWidth: 4,
  from: {color: '#ba0f22', a:0},
  to: {color: '#ba0f22', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar6.animate(1.0);  // Number from 0.0 to 1.0