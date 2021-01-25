function header(id){
    var dt = firebase.database();
    dt.ref(id).once('value',(snapshot)=>{
        var data = snapshot.val();
        var content = '';
        var trash = '<li><a href="OU.html">Ocean University</a></li>'
        
        for(i in data){
            console.log(i)
            content += '<li><a href="' + data[i]['page'] + '">'+ data[i]['data'] + '</a></li>'
        }
        $('#'+id).append(content);


    });
}

header('institutes');