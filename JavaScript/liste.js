
var btn = document.querySelector('input');
btn.addEventListener('click', updateBtn);

function updateBtn() {
    $(document).ready(function(){     
    //Dès qu'on clique sur #b1, on applique hide() au titre
    $("liste").click(function(){
        $("h5").hide();
    });
   }
}