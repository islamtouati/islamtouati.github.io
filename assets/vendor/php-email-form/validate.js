/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";
  

  let forms = document.querySelectorAll('.php-email-form');


  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let data = new FormData(thisForm);
      
      fetch(event.target.action, {
        method: thisForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              let err = data["errors"].map(error => error["message"]).join(", ");
            } else {
              let err = "Oops! There was a problem submitting your form";
            }
            displayError(thisForm, err);
          })
        }
      }).catch(error => {
        let err = "Oops! There was a problem submitting your form"
        displayError(thisForm, err);
      });
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
