/**
 * Created by tom on 9/25/14.
 */
chrome.runtime.onMessage.addListener(function (request, sender) {
  debugger;
  if (request.threshold) {
    $('*').each(function(idx, el) {
      var computed = getComputedStyle(el);
      var size = computed['font-size'];
      if (parseInt(size) >= request.threshold) {
        $(el).addClass('papyrusify');
      } else {
        $(el).removeClass('papyrusify');
      }
    });
  }
});