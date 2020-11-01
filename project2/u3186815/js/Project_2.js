window.onload = function () {
    
    var request = new XMLHttpRequest();
    var url='https://openlibrary.org/isbn/'+ isbnlist[1] +'.json';
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            
            var book_covers=document.getElementById("book_covers");
            var book_content=document.getElementById("book_content");
            
            html_cover='<img src="http://covers.openlibrary.org/b/id/' + json['covers'] + '-L.jpg">';
            book_covers.innerHTML=html_cover;
            html_content='<p class="title">'+ json['title'] +'</p>';
            html_content += '<p>This edition published in'+ json['publish_date'] +'by'+ json['publishers'] +'</p>';
            html_content +='<p class="intro">Edition Notes</p>';
            html_content +='<p>isbn_10:'+ json['notes']['value'] +'</p>';
            html_content +='<p class="intro">Classifications</p>';
            html_content +='<p>Library of '+ json['lc_classifications'] +'</p>';
            html_content +='<p class="intro">The Physical Object</p>';
            html_content +='<p>Format'+ json['physical_format'] +'</p>';
            html_content +='<p>Number of pages'+ json['number_of_pages'] +'</p>';
            html_content +='<p class="intro">ID Numbers</p>';
            html_content +='<p>isbn_10:'+ json['isbn_10'] +'</p>';
            html_content +='<p>isbn_13:'+ json['isbn_13'] +'</p>';
            html_content +='<p>Amazon.com '+ json['identifiers']['amazon'] +'</p>';

            book_content.innerHTML=html_content ;
            //console.log(json);
        }
    }

}