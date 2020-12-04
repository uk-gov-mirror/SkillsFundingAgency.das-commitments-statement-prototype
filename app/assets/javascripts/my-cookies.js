// =================================== MY COOKIES =================================== //

// 1 - Personal details - Correct
$("#apprentice-details").on("click", function (e) {
     $.cookie("apprentice-details", true, {path:'/'});
     $.cookie("apprentice-details-wrong", false, {path:'/'});
     $.cookie("cs-step-1", true, {path:'/'});
});

if ($.cookie("apprentice-details") == 'true') {
     $('a.section-one').addClass('complete');
     $('a.section-one strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     // $('a.section-one').attr('href', '');
}

// 1 - Personal details - Incorrect
$("#apprentice-details-wrong").on("click", function (e) {
     $.cookie("apprentice-details", false, {path:'/'});
     $.cookie("apprentice-details-wrong", true, {path:'/'});
     $.cookie("cs-step-1", false, {path:'/'});
});

if ($.cookie("apprentice-details-wrong") == 'true') {
     $('a.section-one').addClass('wrong');
     $('a.section-one strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
     $('a.section-one').attr('href', '../sign-in/3-confirm-details');
}

// 2 - Apprenticeship details - Correct
$("#apprenticeship-details").on("click", function (e) {
     $.cookie("apprenticeship-details", true, {path:'/'});
     $.cookie("apprenticeship-details-wrong", false, {path:'/'});
     $.cookie("cs-step-2", true, {path:'/'});
});

if ($.cookie("apprenticeship-details") == 'true') {
     $('a.section-two').addClass('complete');
     $('a.section-two strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     // $('a.section-one').attr('href', '');
}

// 2 - Apprenticeship details - Incorrect
$("#apprenticeship-details-wrong").on("click", function (e) {
     $.cookie("apprenticeship-details", false, {path:'/'});
     $.cookie("apprenticeship-details-wrong", true, {path:'/'});
     $.cookie("cs-step-2", false, {path:'/'});
});

if ($.cookie("apprenticeship-details-wrong") == 'true') {
     $('a.section-two').addClass('wrong');
     $('a.section-two strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
     $('a.section-two').attr('href', '../2-apprenticeship-details/1-apprenticeship-details');
}

// 3 - Employer details - Correct
$("#employer-details").on("click", function (e) {
     $.cookie("employer-details", true, {path:'/'});
     $.cookie("employer-details-wrong", false, {path:'/'});
     $.cookie("cs-step-3", true, {path:'/'});
});

if ($.cookie("employer-details") == 'true') {
     $('a.section-three').addClass('complete');
     $('a.section-three strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
}

// 3 - Employer details - Incorrect
$("#employer-details-wrong").on("click", function (e) {
     $.cookie("employer-details", false, {path:'/'});
     $.cookie("employer-details-wrong", true, {path:'/'});
     $.cookie("cs-step-3", false, {path:'/'});
});

if ($.cookie("employer-details-wrong") == 'true') {
     $('a.section-three').addClass('wrong');
     $('a.section-three strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
}

// 4 - Roles and responsibilities - Correct
$('a.section-four .govuk-caption-m').show();

$("#apprentice-role").on("click", function (e) {
     $.cookie("roles-and-responsibilities", true, {path:'/'});
     $.cookie("roles-and-responsibilities-wrong", false, {path:'/'});
     $.cookie("cs-step-4", true, {path:'/'});
});

if ($.cookie("roles-and-responsibilities") == 'true') {
     $('a.section-four').addClass('complete').removeClass('started');
     $('a.section-four strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $('.section-four .complete-number').text('3');
}

// 4 - Roles and responsibilities - Incorrect
$("#apprentice-role-wrong").on("click", function (e) {
     $.cookie("roles-and-responsibilities", false, {path:'/'});
     $.cookie("roles-and-responsibilities", true, {path:'/'});
     $.cookie("cs-step-4", false, {path:'/'});
});

if ($.cookie("roles-and-responsibilities-wrong") == 'true') {
     $('a.section-four').addClass('wrong').removeClass('started');
     $('a.section-four strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
     $('.section-four .complete-number').text('2');
}

// 5 - Skills
$('a.section-five .govuk-caption-m').show();

$("#knowledge-ksb").on("click", function (e) {
     if ($('input[id=knowledge-ksb-confirm]').is(':checked')) {
          $.cookie("knowledge-ksb-confirm", true, {path:'/'});
     } else {
          $.cookie("knowledge-ksb-confirm", false, {path:'/'});
     }
});

$("#skills-ksb").on("click", function (e) {
     if ($('input[id=skills-ksb-confirm]').is(':checked')) {
          $.cookie("skills-ksb-confirm", true, {path:'/'});
     } else {
          $.cookie("skills-ksb-confirm", false, {path:'/'});
     }
});

$("#behaviours-ksb").on("click", function (e) {
     if ($('input[id=behaviours-ksb-confirm]').is(':checked')) {
          $.cookie("behaviours-ksb-confirm", true, {path:'/'});
     } else {
          $.cookie("behaviours-ksb-confirm", false, {path:'/'});
     }
});

var allSkills = parseInt($('.section-five .complete-number').text());
$('.section-five .complete-number').text('0');

if ($.cookie("knowledge-ksb-confirm") == 'true' || $.cookie("skills-ksb-confirm") == 'true' || $.cookie("behaviours-ksb-confirm") == 'true') {
     $('a.section-five').addClass('started');
     $('a.section-five strong').addClass('govuk-tag--blue').removeClass('govuk-tag--yellow').text('started');
     $('a.section-five .govuk-caption-m').show();
     $('.section-five .complete-number').text('1');
}

if ($.cookie("knowledge-ksb-confirm") == 'true' && $.cookie("skills-ksb-confirm") == 'true') {
     $('.section-five .complete-number').text('2');
}

if ($.cookie("knowledge-ksb-confirm") == 'true' && $.cookie("skills-ksb-confirm") == 'true' && $.cookie("behaviours-ksb-confirm") == 'true') {
     $('a.section-five').addClass('complete').removeClass('started');
     $('a.section-five strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $('.section-five .complete-number').text('3');
     $.cookie("cs-step-5", true, {path:'/'});
}

// 6 - Key policies
$('a.section-six .govuk-caption-m').show();

$("#key-policies").on("click", function (e) {
     $.cookie("key-policies-counter", $('input[type="checkbox"]:checked').length, {path:'/'});

     if ($('input[id=code-of-conduct]').is(':checked')) {
          $.cookie("policy-code-of-conduct", true, {path:'/'});
     } else {
          $.cookie("policy-code-of-conduct", false, {path:'/'});
     }
     if ($('input[id=health-and-safety]').is(':checked')) {
          $.cookie("policy-health-and-safety", true, {path:'/'});
     } else {
          $.cookie("policy-health-and-safety", false, {path:'/'});
     }
     if ($('input[id=equality-and-diversity]').is(':checked')) {
          $.cookie("policy-equality-and-diversity", true, {path:'/'});
     } else {
          $.cookie("policy-equality-and-diversity", false, {path:'/'});
     }
     if ($('input[id=harassment-and-bullying]').is(':checked')) {
          $.cookie("policy-harassment-and-bullying", true, {path:'/'});
     } else {
          $.cookie("policy-harassment-and-bullying", false, {path:'/'});
     }
     if ($('input[id=safeguarding-and-prevent]').is(':checked')) {
          $.cookie("policy-safeguarding-and-prevent", true, {path:'/'});
     } else {
          $.cookie("policy-safeguarding-and-prevent", false, {path:'/'});
     }
     if ($('input[id=complaints-procedure]').is(':checked')) {
          $.cookie("policy-complaints-procedure", true, {path:'/'});
     } else {
          $.cookie("policy-complaints-procedure", false, {path:'/'});
     }
     if ($('input[id=business-continuity]').is(':checked')) {
          $.cookie("policy-business-continuity", true, {path:'/'});
     } else {
          $.cookie("policy-business-continuity", false, {path:'/'});
     }
});

$('.section-six .complete-number').text($.cookie("key-policies-counter"));

if ($.cookie("policy-code-of-conduct") == 'true') {
     $('#code-of-conduct').attr('checked','checked');
}
if ($.cookie("policy-health-and-safety") == 'true') {
     $('#health-and-safety').attr('checked','checked');
}
if ($.cookie("policy-equality-and-diversity") == 'true') {
     $('#equality-and-diversity').attr('checked','checked');
}
if ($.cookie("policy-harassment-and-bullying") == 'true') {
     $('#harassment-and-bullying').attr('checked','checked');
}
if ($.cookie("policy-safeguarding-and-prevent") == 'true') {
     $('#safeguarding-and-prevent').attr('checked','checked');
}
if ($.cookie("policy-complaints-procedure") == 'true') {
     $('#complaints-procedure').attr('checked','checked');
}
if ($.cookie("policy-business-continuity") == 'true') {
     $('#business-continuity').attr('checked','checked');
}

if ($.cookie("policy-code-of-conduct") == 'true' || $.cookie("policy-health-and-safety") == 'true' || $.cookie("policy-equality-and-diversity") == 'true' || $.cookie("policy-harassment-and-bullying") == 'true' || $.cookie("policy-safeguarding-and-prevent") == 'true' || $.cookie("policy-complaints-procedure") == 'true' || $.cookie("policy-business-continuity") == 'true') {
     $('a.section-six').addClass('started');
     $('a.section-six strong').addClass('govuk-tag--blue').removeClass('govuk-tag--yellow').text('started');
     $('a.section-six .govuk-caption-m').show();
}

if ($.cookie("policy-code-of-conduct") == 'true' && $.cookie("policy-health-and-safety") == 'true' && $.cookie("policy-equality-and-diversity") == 'true' && $.cookie("policy-harassment-and-bullying") == 'true' && $.cookie("policy-safeguarding-and-prevent") == 'true' && $.cookie("policy-complaints-procedure") == 'true' && $.cookie("policy-business-continuity") == 'true') {
     $('a.section-six').addClass('complete').removeClass('started');
     $('a.section-six strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $.cookie("cs-step-6", true, {path:'/'});
}

// CS is agreed
$('#cs-not-agreed').show();
$('#cs-agreed').hide();
$('#cs-signed').hide();
if ($.cookie("cs-step-1") == 'true' && $.cookie("cs-step-2") == 'true' && $.cookie("cs-step-3") == 'true' && $.cookie("cs-step-4") == 'true' && $.cookie("cs-step-5") == 'true' && $.cookie("cs-step-6") == 'true') {
     $('#cs-not-agreed').hide();
     $('#cs-agreed').show();
     $('#cs-signed').hide();
     $('.tabs ul.govuk-list li .tab-landing-1 .number').addClass('complete');
}

$("#confirm-and-sign").on("click", function (e) {
     if ($('input[id=apprentice-sign-confirm]').is(':checked')) {
          $.cookie("apprentice-sign-confirm", true, {path:'/'});
     } else {
          $.cookie("apprentice-sign-confirm", false, {path:'/'});
     }
});

if ($.cookie("apprentice-sign-confirm") == 'true') {
     $('#cs-not-agreed').hide();
     $('#cs-agreed').hide();
     $('#cs-signed').show();
     $('.tabs ul.govuk-list li .tab-landing-1 .number').addClass('signed').text('');
}
