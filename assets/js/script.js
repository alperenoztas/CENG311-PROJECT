/*
@Author : Alperen Öztaş
*/

//Jquery Plugins Widgets: Autocomplete, Dialog, Magnific Popup, Custombox, UI, Animate, Show, SlideUp

/* 
Jquery:
    In here I used more than 1 widgets from jquery ui library, also I used magnific popup library for image popup, Custombox modal for video popup
    Also I used jquery animate,show,slideUp like plugins more than once.
*/

//Ajax: 2 to local .json file and 2 to external api 

/*
Ajax:
    I used 2 ajax request to file in assets/json_files folder, 1 for activities.json and 1 for projects.json
    For external api I used 2 ajax request, 1 for quote(foristmatic as json) and 1 for article (arxiv as xml)
*/


$(function () {

  // Change the image source for each card default robotics image
  var defaultImagePath = 'assets/images/articles/robotics/article-card-1.jpg';
  $('.infos .col').each(function (index, element) {
    var card = $(element).find('.card');
    var img = card.find('img');
    var imgSrc = defaultImagePath.replace('article-card-1', 'article-card-' + (index + 1));
    img.attr('src', imgSrc);
  });


  $('#robotics').addClass('selected');


  // Fetch articles when the user clicks on a category button and change image source for each card
  $('.article-button').click(function () {

    $('.article-button').removeClass('selected');
    $(this).addClass('selected');

    var searchQuery = $(this).attr('id');

    var imagePath = 'assets/images/articles/' + searchQuery + '/article-card-1.jpg';

    // Update the image source for each card
    $('.infos .col').each(function (index, element) {
      var card = $(element).find('.card');
      var img = card.find('img');
      var imgSrc = imagePath.replace('article-card-1', 'article-card-' + (index + 1));
      img.attr('src', imgSrc);
    });

    fetchArticle(searchQuery);
  });

  // Fetch default article when the page loads
  $('#robotics').trigger('click');

  fetchQuote();

  // Fetch data from activities.json and sort them by rating in descending order and display the top 4 activities on the cards
  $.getJSON("assets/json_files/activities.json", function (data) {
    // Sort the activities by rating in descending order
    data.activities.sort(function (a, b) {
      return b.rating - a.rating;
    });

    // Take the top 4 activities
    var topActivities = data.activities.slice(0, 4);

    // Display the top activities on the cards
    $.each(topActivities, function (index, activity) {
      var cardId = "#card" + (index + 1);
      var card = $(cardId);

      card.find("img").attr("src", "assets/images/activities/activity_" + activity.image);
      card.find("h3").text(activity.title);
      card.find("p").text(activity.description);
      card.find("a").attr("onclick", "activityCardResponse('" + cardId + "', '" + activity.description + "', '" + activity.longDescription + "')");
    });
  });


  // Fetch data from projects.json and sort them by participation in descending order and display the top 4 projects on the cards
  $.getJSON("assets/json_files/projects.json", function (data) {

    // Sort projects by participation
    data.projects.sort(function (a, b) {
      return b.participation - a.participation;
    });

    // Top 4 projects
    var topProjects = data.projects.slice(0, 4);

    // Display projects
    $.each(topProjects, function (index, project) {
      var card = $(".show-card").eq(index);

      card.find("img").attr("src", "assets/images/projects/projects_" + project.image);
      card.find("h3").text(project.title);
      card.find("p").text(project.description);
    });
  });

  // Clicking logo changes navbar color and li properties
  $('#logo').click(function () {
    var navbarItems = '.navbar > ul > li > a'

    $('.navbar').css('background-color', '#303030');
    $(navbarItems).css({
      'color': '#00008B',
      'font-size': '1.5rem'
    });

    $(navbarItems).hover(function () {

      $(navbarItems).css('background-color', '#40E0D0');
    }, function () {
      $(navbarItems).css('background-color', 'initial');
    }
    );
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

  //Click motto above the page and it changes the text
  $('#motto').click(function (e) {
    e.preventDefault();
    $('#motto').html("We are the future!").css('font-size', '2.5rem');
  });

  $("#introTitle").on("click", function () {
    $("#introTitleHidden").show("slow");
  });

  //Read More in Home section click and read less
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

  //In projects page when Project Content is clicked, projects are animated
  $('#project-content').click(function () {
    $('#project-content > #firstProject').animate({
      fontSize: '2rem',
      color: '#042142',
    }, 1000);
    $('#project-content > #secondProject').animate({
      fontSize: '2rem',
      color: '#073569',
    }, 2000);
    $('#project-content > #thirdProject').animate({
      fontSize: '2rem',
      color: '#0b4c96',
    }, 3000);
  });

  //In projects when check it clicked on cards, modal opens with video
  $('#sumoVideo').click(function (e) {
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect: 'makeway',
        target: "https://www.youtube.com/watch?v=QCqxOzKNFks&ab_channel=RobertMcGregor",
        width: 600
      }
    });

    modal.open();
  });

  $('#swarmVideo').click(function (e) {
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect: 'makeway',
        target: "https://www.youtube.com/watch?v=P9ZbipO8vxM&ab_channel=TheTelegraph",
        width: 600
      }
    });

    modal.open();
  });

  $('#lineFollowerVideo').click(function (e) {
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect: 'makeway',
        target: "https://www.youtube.com/watch?v=lnP32gzHdvI&ab_channel=EhsanSalami",
        width: 600
      }
    });

    modal.open();
  });

  $('#talkingRobot').click(function (e) {
    e.preventDefault();
    var modal = new Custombox.modal({
      content: {
        effect: 'makeway',
        target: "https://www.youtube.com/watch?v=BP8nL2bD82U&ab_channel=roborama",
        width: 600
      }
    });

    modal.open();
  });

  //when activity wide card is clicked change card size and text
  $('#activityJoinL').click(function (e) {

    e.preventDefault();

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

  //Magnific popup on the future of our club image in home page
  $('.with-caption').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.attr('title') + ' &middot; <a style="color:white;" class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
      }
    },
    zoom: {
      enabled: true
    }
  });

});


//Activity Html Tables Card is changing due to cardId taken by page
function activityCardResponse(cardId, description, longDescription) {

  if ($(cardId + ' > a').html() === "Read More") {
    $('.show-cards').css({
      'grid-template-columns': 'repeat(1, 1fr)',
      'width': '40%'
    });
    $('.show-cards img').css({
      'width': '40%',
      'margin-left': '30%'
    });
    $(cardId + ' > p').html(longDescription).css({
      'font-size': '1.5rem',
    });
    $(cardId + ' > a').html("Read Less");
  } else {
    $('.show-cards').css({
      'grid-template-columns': 'repeat(4, 1fr)',
      'width': '90%'
    });
    $('.show-cards img').css({
      'width': '100%',
      'margin-left': 'initial'
    });
    $(cardId + ' > p').html(description).css({
      'font-size': 'initial',
    });
    $(cardId + ' > a').html("Read More");
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

//Fetch quote from forismatic api and display it on the home page
function fetchQuote() {

  const quoteUrl = 'https://api.quotable.io/random';

  $.ajax({
    url: quoteUrl,
    method: 'GET',
    dataType: 'json'
  })
    .done(function (data) {
      const quote = data.content;
      const author = data.author;
      $('#quote').text(quote);
      $('#author').text(author);
    })
    .fail(function (error) {
      console.error(error);
    });
}


/* 
Fetch article from arxiv api and display it on the home page.
The search query is the id of the category button.
Get the first 4 articles and display them on the cards.
Show the title and summary of the article on the card.
*/
function fetchArticle(searchQuery) {
  $.ajax({
    url: 'https://export.arxiv.org/api/query',
    method: 'GET',
    data: {
      search_query: searchQuery,
      max_results: 4
    },
    dataType: 'xml',
    success: function (response) {
      var entries = $(response).find('entry');
      var results = [];

      entries.each(function (index, entry) {
        var id = $(entry).find('id').text();
        var title = $(entry).find('title').text();
        var summary = $(entry).find('summary').text();

        if (summary.length > 200) {
          summary = summary.substring(0, 200) + '...';
        }

        var result = {
          id: id,
          title: title,
          summary: summary
        };

        results.push(result);
      });

      var selectedResults = results.slice(0, 4);

      $('.infos .col .card .content').each(function (index, element) {
        var id = selectedResults[index].id;
        var title = selectedResults[index].title;
        var summary = selectedResults[index].summary;
        $(element).find('h1').text(title);
        $(element).find('p').text(summary);
        $(element).closest('.card').attr('data-id', id);


        var articleLink = $(element).find('.article-link');
        articleLink.attr('href', id);
      });
    },
    error: function (xhr, status, error) {
      console.log('Request failed with status: ' + status + ', error: ' + error);
    }
  });
}

