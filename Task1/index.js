let left=0;
        let images=["./images/g1.gif","./images/g2.gif","./images/g3.gif","./images/g4.gif","./images/g5.gif","./images/g6.gif","./images/g7.gif","./images/g8.gif","./images/g9.gif","./images/g10.gif"];
        let right=images.length-1;
        let i=1;
        let defaultImages=()=>{
            document.querySelector("#activeImage").src=images[1];
            document.querySelector("#leftImage").src=images[0];
            document.querySelector("#rightImage").src=images[2];
        }
        let nextSlide=()=>{
            if(i<=right){
                i++;
                document.querySelector("#prev").disabled=false;
                document.querySelector("#activeImage").src=images[i];
                document.querySelector("#leftImage").src=images[i-1];
                document.querySelector("#rightImage").src=images[i+1];
            }
            if(i==right-1){
                document.querySelector("#next").disabled=true;
            }
        }
        let prevSlide=()=>{
            if(i>=left){
                document.querySelector("#next").disabled=false;
                document.querySelector("#activeImage").src=images[i-1];
                document.querySelector("#leftImage").src=images[i-2];
                document.querySelector("#rightImage").src=images[i];
                i--;
            }
            if(i==left+1){
                document.querySelector("#prev").disabled=true;
            }
        }


        function swap(id)
            {
                var temp=document.getElementById("1").src;
                document.getElementById("1").src=document.getElementById(id).src;
                document.getElementById(id).src=temp;
            }