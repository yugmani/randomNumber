 // Loop 10 times
 for (var i = 0; i < 10; i++) {
    // Generate a random decimal number between 0 and 1
    var num = Math.floor(Math.random()*10)+1;

    // Display in console
    document.write("<p>"+ (i+1) + " ==> <strong> "+ num + "</strong></p>");
}