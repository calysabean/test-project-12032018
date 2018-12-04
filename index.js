function getDataFromApi(artist, title, callback) {
    const settings = {
      url: `https://api.lyrics.ovh/v1/${artist}/${title}`,
      dataType: 'json',
      type: 'GET',
      success: callback
      };
    $.ajax(settings);
    }
    
    function displaySearchData(data) {
    $('.js-search-results').html(`${data.lyrics}`);
    }

function watchSubmit() {
$('.js-search-form').submit(function(event){
  event.preventDefault();
  let query1 = $(event.currentTarget).find('.js-query-artist');
  let query2 = $(event.currentTarget).find('.js-query-title');
  let qVal1 = query1.val();
  let qVal2 = query2.val();
  query1.val("");
  query2.val("");
  getDataFromApi(qVal1, qVal2, displaySearchData)
})
}

$(watchSubmit);
