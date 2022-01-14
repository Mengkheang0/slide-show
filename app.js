var btns = document.getElementsByClassName('btn');
var images = ["https://coolwallpapers.me/picsup/3335825-tokyo-japan-light-night.jpg","https://images6.alphacoders.com/109/1092054.jpg","https://www.teahub.io/photos/full/154-1548993_tokyo-neon-wallpaper-hd.jpg","https://wallpaper.dog/large/5488153.jpg"]
var selections = document.getElementById('selections');

var pageCount = document.getElementsByClassName('pagecount');
var count = 0;
load();
function load()
{
    //create selections 
    for(let x= 0;x<images.length;x++)
    {
        var selectedindex;
        var selection = document.createElement('div');
        selection.className = "selection";

        selections.appendChild(selection);

        //add event every selection
        selection.addEventListener('click',function(){
            selectedindex =x;
            count = selectedindex;

            var image = document.getElementById('image');
            image.src = images[selectedindex];

            var curr = document.getElementsByClassName('active');
            curr[0].className = curr[0].className.replace(" active","");

            this.className += " active";

            pageCount[0].innerHTML = `${count+1}/${images.length}`;

        });

    }
    //add active to selection
    selections = document.getElementById('selections');
    selections.appendChild(selection);

    selections.children[0].classList.add("active");


    //backward and forward click events

    for(let x= 0;x<btns.length;x++)
    {
        btns[x].addEventListener('click',function(){

            if(this.id == "forward")
            {
                //click forward
                
                if(count <images.length-1){
                    count++;

                    var image = document.getElementById('image');
                    image.src = images[count];

                    var curr = document.getElementsByClassName('active');
                    curr[0].className = curr[0].className.replace(" active","");
        
                    selections.children[count].className += " active";
                    pageCount[0].innerHTML = `${count+1}/${images.length}`;

                }

            }else{

                //click backward 
                if(count >0)
                {
                    count--;

                    var image = document.getElementById('image');
                    image.src = images[count];


                    var curr = document.getElementsByClassName('active');
                    curr[0].className = curr[0].className.replace(" active","");
        
                    selections.children[count].className += " active";
                    pageCount[0].textContent = `${count+1}/${images.length}`;

                }
            }
        });
    }


}