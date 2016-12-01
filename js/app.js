// INPUT: OBJECT (OF KEY VALUE PAIRS)


console.log($);

// var forEach = function(arr, cb) {
//     for (var i = 0; i < arr.length; i += 1) {
//         cb(arr[i], i, arr)
//     }
// }
var exCons = document.querySelector('.container')

var bigWigs = function(lottaData) {
    console.log(lottaData)

    forEach(lottaData.results, function(congressObj) {

    var bigStr = '<div class="col-sm-6 col-md-4">'
        bigStr += '<div class="thumbnail">'
        bigStr +=    '<h4>' + congressObj.first_name  + congressObj.last_name + '</h4>'
        bigStr +=       '<h5>' + congressObj.party + congressObj.state_name + '</h5>'
        bigStr +=       '<ul>'
        bigStr +=          '<li>' + congressObj.oc_email + '</li>'
        bigStr +=          '<li>' + congressObj.website + '</li>'
        bigStr +=          '<li>' + congressObj.twitter_id + '</li>'
        bigStr +=          '<li>' + congressObj.facebook_id + '</li>'
        bigStr +=        '</ul>'
        bigStr +=       '<h5>' + congressObj.term_end + '</h5>'
        bigStr +=  '</div>'
        bigStr += '</div>'

        exCons.innerHTML += bigStr
        console.log('-------------');
    })


}
$.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=26ce89c5d0314d1493693c134958188d').then(bigWigs)
