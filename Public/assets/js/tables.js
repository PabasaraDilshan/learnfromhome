

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

funtable("OUSL_1","ousl1");
funtable("OUSL_2","ousl2");
funtable("OUSL_3","ousl3");
