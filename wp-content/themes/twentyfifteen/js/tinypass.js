tp = window.tp || [];
      (function(src) {
            var a = document.createElement("script");
            a.type = "text/javascript";
            a.async = true;
            a.src = src;
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        })("//sandbox.tinypass.com/xbuilder/experience/load?aid=oiGmjC8JwK");
array = []

for (i = 0; i < php_vars.length; i++) {
  array.push(php_vars[i].slug)
}

tp.push(["setTags", array]);


tp.push(["init", function(){
      if (tp.pianoId.isUserValid()) {
        $("#menu-item-5").hide();
        $("#menu-item-7").hide();
      } else {
        $("#menu-item-6").hide();
      }
    }])


      tp.push(["init", function(){
        document.getElementById('menu-item-5').onclick = function() {
          tp.pianoId.show({
            screen: 'login',
            displayMode: 'modal',
            loggedIn: function(){
                  location.reload();
              }
            })
          }
        }])
        tp.push(["init", function(){
          document.getElementById('menu-item-7').onclick = function() {
            tp.pianoId.show({
              screen: 'register',
              displayMode: 'modal',
              loggedIn: function(){
                    location.reload();
                }
              })
            }
          }])

        tp.push( ["init", function() {
          document.getElementById('menu-item-6').onclick = function(){
            tp.pianoId.logout();
              location.reload();
            }
        }])
