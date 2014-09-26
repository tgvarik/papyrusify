/**
 * Created by tom on 9/25/14.
 */
$(function(){
  var currentValue = $('#size-threshold');
  $('#size-threshold-slider').on('change', function(){
    var val = this.value;
    $('#size-threshold').text(val);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {threshold: val});
    });
  });
  $('#size-threshold-slider').change();
});