// smooth scrolling

var navMenuAnchorTags = document.querySelectorAll('nav a');

for(var i = 1 ; i < navMenuAnchorTags.length - 1 ; i++)
{
    navMenuAnchorTags[i].addEventListener('click' , function(event)
    {
        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        
        var interval = setInterval(function()
        {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        } , 15);
    });
}




// skill bar filling 

var bars = document.querySelectorAll('.cell div');
var skillContainer = document.getElementById('skillsflex');

window.addEventListener('scroll' , checkScroll);
var flag = false;

function checkScroll()
{
    var coordinates = skillContainer.getBoundingClientRect();
    if(!flag && coordinates.top <= window.innerHeight)
    {
        flag = true;
        fillbars();
    }
    else if(coordinates.top > window.innerHeight)
        flag = false;
}

function fillbars()
{
    for(let bar of bars)
    {
        let targetWidth = bar.getAttribute('progress');
        let currWidth = 0;
        let interval = setInterval(function()
        {
            if(currWidth > targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth + '%';
        }, 10); 
    }
}