

function funtable(tablename, tableid){
        var dt = firebase.database();
        dt.ref(tablename).once('value',(snapshot)=>{
            var data = snapshot.val();
            var content = '';
            for (row in data){
                for (i in data[row]){
                content += "<tr>"
                content += "<td>"+"<b>"+i+":</b>"+"</td>"
                content += "<td>"+data[row][i]+"</td>"
                content+="</tr>"
                console.log(i, data[row][i]);
                };
            };
            $('#'+tableid).append(content);


        });
}

var i;
var a = "OUSL_";
var b = "ousl"
for(i =1;i<14;i++){
    funtable(a+i,b+i)
}