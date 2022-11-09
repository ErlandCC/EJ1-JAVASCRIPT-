let x = Math.PI / 5
let tan = parseFloat(prompt("introducir tangente:"));
let cos = parseFloat(prompt("introducir coseno:"));
let sin = parseFloat(prompt("introducir seno:"));
var cosd1 = cos ** 2
var cosd2 = x / 2
var cosd3 = tan * x
var cosd4 = sin * x
var cosd5 = 2 * tan
var cosd9 = cosd5 * x
var cosd6 = cosd3 + cosd4
var cosd6 = cosd6 / cosd9
var edt = cosd1 * cosd2
if (edt == cosd6)
    document.write("<h1> LA IDENTIDAD ES CORRECTA </h1>" + edt)
else
    document.write("<h1> LA IDENTIDAD ES INCORRECTA </h1> " + edt)