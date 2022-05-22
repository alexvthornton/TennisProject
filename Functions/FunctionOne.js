import tennisData from '../tennis.json' assert {type: 'json'}
/*
write a function that returns the number of tournements played on grass (tourney_surface) between 1980 and 2000. 
hint: you'll have to pull the year from tourney_dates so look into the split() method 
*/
function tournementsOnGrassBetween1980And2000() {
    //test
    const names = [];
    for(let i = 0; i < tennisData.length; i++) {
        names.push(tennisData[i].tourney_name)
    }
    return names;
}

console.log(tournementsOnGrassBetween1980And2000())
