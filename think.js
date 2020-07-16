window.onload=function(){
    var i=0;
    var x=document.getElementById("demo");
    function change(){
        var color=['red','blue','pink','#6600FF','orange','grey'];
        x.style.color=color[i];
       if(i<color.length-1){
         i++;
        }
        else{
            i=0;
        }
    }
    setInterval(change,1000);
}