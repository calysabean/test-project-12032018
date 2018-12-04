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