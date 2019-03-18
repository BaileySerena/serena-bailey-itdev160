var today = new Data();
var year = today.getFUllYear();
var hourNow = today.getHours();
var greeting;

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

if (hourNow > 18) {
  greeting = 'Good Evening!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
