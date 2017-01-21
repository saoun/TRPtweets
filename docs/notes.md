- setting up node
- wondering about npm d3 
- chose not to, and then use script instead
- working around server stuff for the csv, couldnt copy structure bc of github
(learnjsdata.com/read_data.html)

REFACTORING NOTES
In makeMagic()
we created a function called makeCircles which returns the circles array
and we assigned it to a variables called 'circles'
then we passed this variable to startForces()
inside startForces, we pass it to ticked();


Figure out why es6 works in 111-113 but not function(d){}

figure out force collision isn't working
and why toggle isn't working.

video help from this guy:
https://www.youtube.com/watch?v=lPr60pexvEM

stackoverflow help: 
https://stackoverflow.com/questions/41774665/why-does-event-listener-callback-function-only-work-inside-function-scope

difference: 'd=>'' has implicit return, which is why the first one doesn't work. 
var circle = svg.style('fill', function(d){
                      d.gender === "m" ? 'blue' : 'red'
                   });

var circle = svg.style('fill', d =>
  d.gender === "m" ? 'blue' : 'red'
);

STUCK FOR SO LONG. it was the fuckin return d=> on forceXsplit

once we are done with this, next step: seperating on filters
