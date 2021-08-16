let left=0;
        let images=["img2.jpg","img3.jpg","img5.jpg","img6.png","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg"];
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
            if(i==right){
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
            if(i==left){
                document.querySelector("#prev").disabled=true;
            }
        }


        function swap(id)
            {
                var temp=document.getElementById("1").src;
                document.getElementById("1").src=document.getElementById(id).src;
                document.getElementById(id).src=temp;
            }