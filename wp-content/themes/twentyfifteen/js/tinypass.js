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
        jQuery("#menu-item-4").hide(); //login
        jQuery("#menu-item-6").hide(); //signup
      } else {
        jQuery("#menu-item-5").hide(); //logoutdsfsfsdfd
        console.log("test")
      }
    }])


      tp.push(["init", function(){
        document.getElementById('menu-item-4').onclick = function() {
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
          document.getElementById('menu-item-6').onclick = function() {
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
          document.getElementById('menu-item-5').onclick = function(){
            tp.pianoId.logout();
              location.reload();
            }
        }])
