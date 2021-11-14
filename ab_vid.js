window.ab_variation2 = $.cookie("ab_variation2") || ((Math.random()>0.5) ? "play blue" : "play normal");
$.cookie("ab_variation2", window.ab_variation2, { expires: 365, path: '/' });
if (window.ab_variation2 === 'play blue') {
  //ЗДЕСЬ КОД ВАШЕГО ИЗМЕНЕНИЯ СТРАНИЦЫ
}
//ЛИБО ДОБАВЛЯЕМ КЛАСС С ИЗМЕНЕНИЯМИ
$('body').addClass(window.ab_variation2);


//ДАЛЕЕ - КОД ЯНДЕКС МЕТРИКИ

$(function() {
  var indexOffset = 0;

  var d = document,w= window,c= "yandex_metrika_callbacks";
  (w[c] = w[c] || []).push(function() {
    var yaParams={};
    yaParams.ab_variation2 = window.ab_variation2;
    try {
      w.yaCounter=w.yaCounter11111111 = new Ya.Metrika({id:11111111,
        webvisor:true,
        clickmap:true,
        trackLinks:true,

        params: yaParams,  //ПЕРЕДАЕМ ПАРАМЕТРЫ ВИЗИТА В МЕТРИКУ

        accurateTrackBounce:true});
          } catch(e) { }
        });
var n = d.getElementsByTagName("script")[0],
s = d.createElement("script"),
f = function () { n.parentNode.insertBefore(s, n); };
s.type = "text/javascript";
s.async = true;
s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

if (w.opera == "[object Opera]") {
  d.addEventListener("DOMContentLoaded", f, false);
} else { f(); }

});
