function onSignIn(googleUser) {                            //Funcion de inicio de sesión de Google.
    // Useful data for your client-side scripts:
    
    var profile = googleUser.getBasicProfile();
    /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());*/
    let usuario = {};
    usuario.username = profile.getName();
    usuario.estado = "online";
    usuario.img = profile.getImageUrl();
    usuario.email = profile.getEmail();
    usuario.nombre = profile.getGivenName();
    usuario.apellido = profile.getFamilyName();
    //--------->
    localStorage.setItem("usuario", JSON.stringify(usuario)); //Guardo mi variable de objeto en Local Storage
  

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    //console.log("ID Token: " + id_token);
    location.href = "index.html";
   
  }

/*
 window.fbAsyncInit = function() {          // Función necesaria para el inicio de sesión con Facebook. no pude con esto xD
    FB.init({
      appId            : '1480371208989919',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v11.0'
    });
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));    

    FB.api(
      "/{person-id}/",    
      function (response) {
        let usuario = {};
        if (response && !response.error) {
          
        usuario.username = "/{person-id}/name";
        usuario.estado = "online";
        usuario.img = "/{person-id}/picture";
        //--------->
        localStorage.setItem("usuario", JSON.stringify(usuario)); //Guardo mi variable de objeto en Local Storage
        location.href = "index.html"
        }
      }
    );
    
  };
  */

  

  


  