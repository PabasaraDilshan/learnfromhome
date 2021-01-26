function header(id){
    var dt = firebase.database();
    dt.ref(id).once('value',(snapshot)=>{
        var data = snapshot.val();
        var content = '';
        var trash = '<li><a href="OU.html">Ocean University</a></li>'
        
        for(i in data){
            content += '<li><a href="' + data[i]['page'] + '">'+ data[i]['data'] + '</a></li>'
        }
        $('#'+id).append(content);


    });
}
function createa(link,text){
    var firstch = document.createElement('a');
    firstch.href = link;
    firstch.appendChild(document.createTextNode(text));
    return firstch;
}
function createli(node){
    var firstch = document.createElement('li');
    firstch.appendChild(node);
    return firstch;
}
function lifromdatabase(){
    var ulelement = document.createElement('ul');
    var dt = firebase.database();
    dt.ref("gazzetes").once('value',(snapshot)=>{
        var data = snapshot.val();
        
        for(i in data){
            var secchildchild = createli(createa(data[i]['link'],data[i]['text']));
            ulelement.appendChild(secchildchild);
        }
    });
    return ulelement;

}
header('institutes');

var test = document.getElementById("pagehead");
var elem = test.children[0].children[0].children[0].children[0].children[1];
var elem1 = test.children[0].children[0].children[0].children[0].children[1].children[3];
elem1.id = "firstmenu"
var newelement = document.createElement('li');
newelement.className = "submenu";
newelement.id = "newmenu";
var firstch = createa("javascript:;", "Gazettes");
var secondchild = lifromdatabase();
newelement.appendChild(firstch);
newelement.appendChild(secondchild);
elem.appendChild(newelement);

$("#newmenu").on("click", function() {
    var width = $(window).width();
    if (width < 1200) {
      
      $("#newmenu ul").toggleClass("active");
    }
  });

