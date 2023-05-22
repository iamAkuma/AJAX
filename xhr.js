//Create an Event Listener
document.getElementById('button').addEventListener('click', loadText);

//Create function
function loadText(){
    //Create XHR Object
    var xhr = new XMLHttpRequest();
    //OPEN - tupe, url/filename, async
    xhr.open('GET', 'sample.txt', true);
    console.log('READYSTATE: ', xhr.readyState);
    //OPTIONAL -used for loaders
    xhr.onprogress = function(){
        console.log('READYSTATE: ', xhr.readyState);

    }
        xhr.onload = function(){ 
        if(this.status == 200){
            console.log(this.responseText)
        }else if(this.status == 404){
            document.getElementById( 'text').innerHTML = 'Not Found';
        }
    }
    xhr.onerror =function(){
        console.log('REQUEST ERROR...')
    }

    xhr.onreadystatechange = function(){
        console.log('READYSTATE: ', xhr.readyState);

        if(this.readyState == 4 && this.status ==200){
            //console.log(this.responseText)
            document.getElementById('text').innerHTML = this.responseText;
        }
    }
    //Sends Request
    xhr.send();
}
//HTTP STATUSES
            //200 = OK
            //403 = Forbidden
            //404 = Not FOund