function getMessagesFromServer(isGetting) {
    var xmlhttp = new XMLHttpRequest();
    var url = "localhost:3000/chat";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' +
                arr[i].display + '</a><br>';
        }
        document.getElementById("id01").innerHTML = out;
    }
}