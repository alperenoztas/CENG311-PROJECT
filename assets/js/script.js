
$(function () {

  $('#sumoVideo').click(function (e) { 
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect:'makeway',
        target:"https://www.youtube.com/watch?v=QCqxOzKNFks&ab_channel=RobertMcGregor",
        width:600
      }
    });
    
    modal.open();
  });

  $('#swarmVideo').click(function (e) { 
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect:'makeway',
        target:"https://www.youtube.com/watch?v=P9ZbipO8vxM&ab_channel=TheTelegraph",
        width:600
      }
    });
    
    modal.open();
  });

  $('#lineFollowerVideo').click(function (e) { 
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect:'makeway',
        target:"https://www.youtube.com/watch?v=lnP32gzHdvI&ab_channel=EhsanSalami",
        width:600
      }
    });
    
    modal.open();
  });

  $('#talkingRobot').click(function (e) { 
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect:'makeway',
        target:"https://www.youtube.com/watch?v=BP8nL2bD82U&ab_channel=roborama",
        width:600
      }
    });
    
    modal.open();
  });
  
  


  // When cat is clicked dissapear slide appears
  $('.main-introduction-bg').click(function () {
    $(this).slideUp(400);
  });

  var originalText = $('#introText').html();

  //Here jquery ui autocomplete widget
  var departments = [
    'Mechanical Engineering',
    'Electrical and Electronics Engineering',
    'Computer Engineering',
    'Industrial Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Metallurgical and Materials Engineering',
    'Mining Engineering',
  ];

  //Here jquery ui autocomplete widget
  $('#departments').autocomplete({
    source: departments
  });

  //when click motto change text
  $('#motto').click(function (e) {
    e.preventDefault();
    $('#motto').html("We are the future!").css('font-size', '2.5rem');
  });

  //when click read more button change text
  $('#readMore').click(function (e) {

    e.preventDefault();

    if ($('#introText').text() === originalText) {
      $('#introText').text(originalText.repeat(5));
      $('#readMore').html("Read Less");
    } else {
      $('#introText').text(originalText);
      $('#readMore').html("Read More");
    }
  });


  $('#project-content').click(function () { 
    $('#project-content > #firstProject').animate({
      fontSize: '2rem',
      color: '#042142',
    },1000);
    $('#project-content > #secondProject').animate({
      fontSize: '2rem',
      color: '#073569',
    },2000);
    $('#project-content > #thirdProject').animate({
      fontSize: '2rem',
      color: '#0b4c96',
    },3000);
  });

  //when activity wide card is clicked change card size and text
  $('#activityJoinL').click(function (e) {

    e.preventDefault();
    alert("You clicked me!");
    $('.activity-l .content').css({
      'width': '450%',
      'margin-left': '40%',
    });
    $('.activity-l h2').css({
      'font-size': '2.5rem',
      'margin-left': '-1%',
    });
    $('.activity-l p').html("");
    $('#activityJoinL').html("");
    $('.activity-l a').css('background-color', 'initial');
  });

  //when activity wide card is clicked change card size and text
  $('#activityJoinR').click(function (e) {


    e.preventDefault();
    alert("You clicked me!");

    $('.activity-r .content').css({
      'width': '450%',
      'margin-left': '40%',
    });
    $('.activity-r h2').css({
      'font-size': '2.5rem',
      'margin-left': '-1%',
    });
    $('.activity-r p').html("");
    $('#activityJoinR').html("");
    $('.activity-r a').css('background-color', 'initial');
  });


  //Animation for join us, activities and project texts
  var originalJoinTextSize = $('#join-us-text').css('font-size');
  var originalActivityTextSize = $('#activities-text').css('font-size');
  var originalProjectTextSize = $('#project-text').css('font-size');

  $('#join-us-text').mouseenter(function () {
    $(this).animate({
      fontSize: '60px',
      color: '#1e5da6',
      letterSpacing: '5px', 
      opacity: '0.8'
    }, 200);
  }).mouseleave(function () {
    $(this).animate({
      fontSize: originalJoinTextSize,
      color: '#000',
      letterSpacing: '0',  
      opacity: '1'  
    }, 200);
  });

  $('#activities-text').mouseenter(function () {
    $(this).animate({
      fontSize: '60px',
      'color': '#1e5da6',
      letterSpacing: '5px', 
        opacity: '0.8'
    }, 200);
  }).mouseleave(function () {
    $(this).animate({
      fontSize: originalActivityTextSize,
      'color': '#000',
      letterSpacing: '0',  
      opacity: '1'
    }, 200);
  });

  $('#project-text').mouseenter(function () {
    $(this).animate({
      fontSize: '60px',
      'color': '#1e5da6',
      letterSpacing: '5px', 
      opacity: '0.8'
    }, 200);
  }).mouseleave(function () {
    $(this).animate({
      fontSize: originalProjectTextSize,
      'color': '#000',
      letterSpacing: '0',  
      opacity: '1'
    }, 200);
  });

});


//Activity Html Tables Card is changing due to cardId taken by page
function activityCardResponse(cardId) {

  if ($('#' + cardId + ' > a').html() === "Read More") {
    $('.show-cards').css({
      'grid-template-columns': 'repeat(1, 1fr)',
      'width': '40%'
    });
    $('.show-cards img').css({
      'width': '40%',
      'margin-left': '30%'
    });
    $('#' + cardId + ' > p').html("This is a test text for the card.".repeat(40)).css({
      'font-size': '1.5rem',
    });
    $('#' + cardId + ' > a').html("Read Less");
  } else {
    $('.show-cards').css({
      'grid-template-columns': 'repeat(4, 1fr)',
      'width': '90%'
    });
    $('.show-cards img').css({
      'width': '100%',
      'margin-left': 'initial'
    });
    $('#' + cardId + ' > p').html("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.").css({
      'font-size': 'initial',
    });
    $('#' + cardId + ' > a').html("Read More");
  }

}

//Form values taken after submit button clicked then sendNotificationModal function called
//and input fields are cleared
function joinForm() {
  event.preventDefault()

  var name = document.getElementsByName("name")[0];
  var email = document.getElementsByName("email")[0];
  var department = document.getElementsByName("department")[0];
  var text = document.getElementsByName("text")[0];

  sendNotificationModal(name.value, email.value, department.value);
  name.value = "";
  email.value = "";
  department.value = "";
  text.value = "";
}

//Jquery ui dialog widget is used for notification modal
function sendNotificationModal(name, email, department) {

  var message = name + " thanks for your time!\n We will contact you soon to " + email + " email address." + department + " will be notified about your application.";

  $("#dialog-confirm").html(message).dialog({
    resizable: false,
    height: "auto",
    width: "40%",
    modal: true,
    title: "Aybu Robotic Club",

    position: {
      my: 'center',
      at: 'center'
    },
    buttons: {
      Okey: function () {
        $(this).dialog("close");

      }
    }
  });
}


