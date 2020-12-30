/* function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$("#contactForm").on("submit", function (event) {
  event.preventDefault();
  
  var formData = {
    name: $("#contactForm [name=name]").val(),
    email: $("#contactForm [name=email]").val(),
    message: $("#contactForm [name=comments]").val(),
  };
  
  console.log(formData)

  var valid = true;
  if (!formData.name) {
    $("#contactForm [name=name]").focus();
    valid = false;
  }

  if (!(formData.email && validateEmail(formData.email))) {
    $("#contactForm [name=email]").focus();
    valid = false;
  }

  if (!formData.message) {
    $("#contactForm [name=comments]").focus();
    valid = false;
  }

  if (valid == false) {
    return;
  }
  
  console.log(formData)

  $("#contactForm [type=submit]").text("Sending..");
  $.ajax({
    type: $("#contactForm").attr("method"), // define the type of HTTP verb we want to use (POST for our form)
    url: $("#contactForm").attr("action"), // the url where we want to POST
    data: formData, // our data object
  }).done(function (data) {
    $("#contactForm")[0].reset();
    $("#contactForm [type=submit]").text(data);
    setTimeout(function () {
      $("#contactForm [type=submit]").text("Send");
    }, 4000);
  });
}); //end form submit handler */

window.addEventListener("DOMContentLoaded", function() {
		  
  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contactForm");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  
  function success() {
  form.reset();
  button.style = "display: none ";
  status.innerHTML = "Thanks!";
  }

  function error() {
  status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
  } else {
    error(xhr.status, xhr.response, xhr.responseType);
  }
  };
  xhr.send(data);
}
