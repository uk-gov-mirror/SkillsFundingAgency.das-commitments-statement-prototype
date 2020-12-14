/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

function showPassword() {
     var x = document.getElementById("apprentice-password");
     if (x.type === "password") {
          x.type = "text";
     } else {
          x.type = "password";
     }
}

function showConfirm() {
     var x = document.getElementById("apprentice-confirm-password");
     if (x.type === "password") {
          x.type = "text";
     } else {
          x.type = "password";
     }
}

$(document).ready(function () {
     $('.hide-show-password, .hide-show-confirm').on('click',function(e) {
          $(this).toggleClass('hide');
     });

     $('.tabs ul.govuk-list li button.govuk-link').on('click',function(e) {
          $('.tabs ul.govuk-list li button.govuk-link').removeClass('selected');
          $(this).addClass('selected');
     });

})

// Navigation
if ($('#dashboard-section').length) {
     $('.nav ul li a').removeClass('selected');
     $('.nav ul li a.link-one').addClass('selected');
}

if ($('#landing-page-section').length) {
     $('.nav ul li a').removeClass('selected');
     $('.nav ul li a.link-two').addClass('selected');
}

if ($('#employers-page-section').length) {
     $('.nav ul li a').removeClass('selected');
     $('.nav ul li a.link-five').addClass('selected');
}

// Tabs
function openTab(tabNumber) {
     var i;
     var x = document.getElementsByClassName("tab-number");
     for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
     }
     document.getElementById(tabNumber).style.display = "block";
}

$('#service-title-section, #action-title-section').parent().addClass('title-overide');


// Confirm journey
$('.govuk-error-summary, .govuk-error-message').hide();

// 1
$("#apprentice-details").on("click", function (e) {
     if ($('input[name=apprentice-confirm]').is(':checked')) {
          $('form.apprentice-details').attr('action','../landing-page/index');
     } else {
          e.preventDefault();
          $('.apprentice-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// 2
$("#apprenticeship-details").on("click", function (e) {
     if ($('input[name=apprenticeship-confirm]').is(':checked')) {
          $('form.apprenticeship-details').attr('action','../landing-page/index');
     } else {
          e.preventDefault();
          $('.employer-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// 3
$("#employer-details").on("click", function (e) {
     if ($('input[name=employer-confirm]').is(':checked')) {
          $('form.employer-details').attr('action','../landing-page/index');
     } else {
          e.preventDefault();
          $('.employer-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// 4
$("#apprentice-role").on("click", function (e) {
     if ($('input[name=apprentice-role-confirm]').is(':checked')) {
          $('form.apprentice-role').attr('action','../landing-page/index');
     } else {
          e.preventDefault();
          $('.apprentice-role-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// 5
// $("#knowledge-ksb").on("click", function (e) {
//      if ($('input[name=knowledge-ksb-confirm]').is(':checked')) {
//           $('form.knowledge-ksb').attr('action','2-skills');
//      } else {
//           e.preventDefault();
//           $('.knowledge-ksb-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// $("#skills-ksb").on("click", function (e) {
//      if ($('input[name=skills-ksb-confirm]').is(':checked')) {
//           $('form.skills-ksb').attr('action','3-behaviours');
//      } else {
//           e.preventDefault();
//           $('.skills-ksb-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// $("#behaviours-ksb").on("click", function (e) {
//      if ($('input[name=behaviours-ksb-confirm]').is(':checked')) {
//           $('form.behaviours-ksb').attr('action','../landing-page/index');
//      } else {
//           e.preventDefault();
//           $('.behaviours-ksb-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// 7
$("#confirm-and-sign").on("click", function (e) {
     if ($('input[name=apprentice-sign-confirm]').is(':checked')) {
          $('form.apprentice-sign').attr('action','2-confirmation');
     } else {
          e.preventDefault();
          $('.apprentice-not-signed-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// $("#employer-role").on("click", function (e) {
//      if ($('input[name=employer-role-confirm]').is(':checked')) {
//           $('form.employer-role').attr('action','3-provider-role');
//      } else {
//           e.preventDefault();
//           $('.employer-role-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// $("#provider-role").on("click", function (e) {
//      if ($('input[name=provider-role-confirm]').is(':checked')) {
//           $('form.provider-role').attr('action','../landing-page/index');
//      } else {
//           e.preventDefault();
//           $('.provider-role-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// 5
