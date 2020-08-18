$(document).ready(function () {
   var API_key = "AIzaSyDZOFRUYfFyXKKRvpUkYP7LKazxvOfKJsA";
   $("#form").submit(function (event){
      event.preventDefault()
      var search = $("#search").val()
      $.get("https://www.googleapis.com/youtube/v3/search?key=" + API_key + "&type=video&part=snippet&q=" + search,function(data){
         $('.content').empty();
         $.each(data.items, function (key,value) {
            console.log(data.items);
            $('.content').append(`
                  <div class="row content-search">
                     <div class="col-md-4">
                        <iframe width="320" height="180" src="https://www.youtube.com/embed/${value.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     </div>
                     <div class="col-md-8">
                        <div class="title ml-3">
                        <a href="https://www.youtube.com/embed/${value.id.videoId}"><p class="title_name">${value.snippet.title}</p></a>
                        <a href="https://www.youtube.com/embed/${value.snippet.channelTitle}"><p class="link_name">${value.snippet.channelTitle}</p></a>
                        <a href="https://www.youtube.com/embed/${value.snippet. description}"><p class="link_name">${value.snippet.description}</p></a>
                        </div>
                     </div>
                  </div>
               `)
            })
         if($('#content-search').val() === ''){
            $('#content-index').css('display','none');
            $('.intro').css('display','none');
        }else{
            $('#content-index').css('display','block');
            $('.intro').css('display','block');
        }
      })
   })
})
$(document).ready(function () {
   $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZOFRUYfFyXKKRvpUkYP7LKazxvOfKJsA&type=video&part=snippet&q=%231+trên+tab+thịnh+hành+hôm+nay", function(data_index){
      $.each(data_index.items, function (key,value) {
               $('#content').empty();
               $('.content').append(`
               <div class="row content-index">
                  <div class="col-md-4">
                     <iframe width="320" height="180" src="https://www.youtube.com/embed/${value.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="col-md-8">
                     <div class="title ml-3">
                     <a href="https://www.youtube.com/embed/${value.id.videoId}"><p class="title_name">${value.snippet.title}</p></a>
                     <a href="https://www.youtube.com/embed/${value.snippet.channelTitle}"><p class="link_name">${value.snippet.channelTitle}</p></a>
                     <a href="https://www.youtube.com/embed/${value.snippet. description}"><p class="link_name">${value.snippet.description}</p></a>
                     </div>
                  </div>
               </div>
            `)
         })         
      })
   })   