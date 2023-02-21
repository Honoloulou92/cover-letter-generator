// let key = '';
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "key.txt", true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     key = xhr.responseText;
//   }
// };
// xhr.send();
// console.log(key)

// function text() {

//   var url = "https://api.openai.com/v1/completions";

//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", url);

//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.setRequestHeader(
//     "Authorization",
//     `Bearer ${key}`
//   );

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//       let response = xhr.responseText;
//       response = JSON.parse(response);

//       console.log(response);

//       document.getElementById("output").innerHTML =
//         response["choices"][0]["text"];
//     }
//   };

//   var question = document.getElementById("question").value;




//   prompt = JSON.parse(JSON.stringify(question));


//   var data = {
//     model: "text-davinci-003",
//     prompt: prompt,
//     temperature: 0.7,
//     max_tokens: 1048,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//   };

//   data = JSON.stringify(data);

//   xhr.send(data);
// }


$(function () {

  let key = '';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "key.txt", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      key = xhr.responseText;
    }
  };
  xhr.send();
  console.log(key)


  // wow animate input


  $("input").click(function () {
    $(this).addClass("wow pulse animated");
    $(this).attr("style", "visibility: visible; animation-name: pulse ;");
    $(this).data("data-wow-iteration", 52)
  });
  // wow animate input

  // year input Work


  // $("#checkIfWork").change(function() {
  //   if(this.checked) {
  //      $("#finishWork").hide(500);
  //      $("#myCheckboxWork").css("margin-top", "15%");
  //   }else{
  //      $("#finishWork").show(500);
  //   }
  // });

  // $("#checkIfWorkTwo").change(function() {
  //   if(this.checked) {
  //      $("#finishWorkTwo").hide(500);
  //      $("#myCheckboxWorkTwo").css("margin-top", "15%");
  //   }else{
  //      $("#finishWorkTwo").show(500);
  //   }
  // });

  // $("#checkIfWorkThree").change(function() {
  //   if(this.checked) {
  //      $("#finishWorkThree").hide(500);
  //      $("#myCheckboxWorkThree").css("margin-top", "15%");
  //   }else{
  //      $("#finishWorkThree").show(500);
  //   }
  // });

  // $("#checkIfWorkFour").change(function() {
  //   if(this.checked) {
  //      $("#finishWorkFour").hide(500);
  //      $("#myCheckboxWorkFour").css("margin-top", "15%");
  //   }else{
  //      $("#finishWorkFour").show(500);
  //   }
  // });


  // year input Work


  // addMore



  $('#addMore').click(function () {

    addMore();

    if (a > 1) {
      $("#remove").show();
    }

    if (a > 2) {
      $('#addMore').hide();
    }

  })
  // addMore



  // remove Add
  $("#remove").click(function () {
    remove();

    if (a <= 1) {
      $("#remove").hide();
    }

    if (a < 3) {
      $('#addMore').show();
    }

  });
  // remove Add




  // addMore Work
  $('#addWork').click(function () {

    addMoreWork();

    if (b > 1) {
      $("#removeWork").show();
    }

    if (b > 3) {
      $('#addWork').hide();
    }
  })
  // addMore Work



  // remove Work
  $("#removeWork").click(function () {

    removeWork();
    if (b <= 1) {
      $("#removeWork").hide();
    }

    if (b < 4) {
      $('#addWork').show();
    }
  });
  // remove Work







  // form validation
  $("#submitButton").click(function () {




    var jobURL = $("#job-url").val();
    console.log(jobURL)
    var industry = $("#industry").val();
    console.log(industry)
    var position = $("#position").val();
    console.log(position)
    var company = $("#company").val();
    console.log(company)

    var workName = $("#workName").val();
    var positionWork = $("#positionWork").val();
    var companyWork = $("#companyWork").val();
    var fromWork = $("#fromWork").val();
    var toWork = $("#toWork").val();

    console.log(workName)
    console.log(positionWork)
    console.log(companyWork)
    console.log(fromWork)
    console.log(toWork)

    var workNameTwo = $("#workNameTwo").val();
    var positionWorkTwo = $("#positionWorkTwo").val();
    var companyWorkTwo = $("#companyWorkTwo").val();
    var fromWorkTwo = $("#fromWorkTwo").val();
    var toWorkTwo = $("#toWorkTwo").val();

    var workNameThree = $("#workNameThree").val();
    var positionWorkThree = $("#positionWorkThree").val();
    var companyWorkThree = $("#companyWorkThree").val();
    var fromWorkThree = $("#fromWorkThree").val();
    var toWorkThree = $("#toWorkThree").val();

    var posture = $("#posture").val();
    var apply1 = $("#apply1").val();
    var tone = $("#tone").val();
    var apply2 = $("#apply2").val();
    var degree = $("#degree").val();
    var apply3 = $("#apply3").val();


    console.log(posture)
    console.log(apply1)
    console.log(tone)
    console.log(apply2)
    console.log(degree)
    console.log(apply3)

    var include = $("#include").val();
    var keyword = $("#keyword").val();

    console.log(include)
    console.log(keyword)

    let prompt;

    if (workName != "") {
      prompt = `Can you please provide a cover letter based on professional details below\n\n- job ad url : ${jobURL} \n\n- Industry : ${industry} \n\n- Position : ${position} \n\n- Company : ${company} \n\n- Location : Paris \n\nMy professional informations :\n\n- Experience 1 :\n- Industry : ${workName}\n- Company : ${companyWork}\n- Position : ${positionWork}\n- From : ${fromWork} to : ${toWork}\n- Location : Geneva (Switzerland)\n\n
      - Achievement : successfully managed and deployed a new website infrastructure over 16 sites, improved mobile sales by 32%\n- Location : Paris (France)\n\n\nI wish :\n- The cover letter to convey ${posture} tone in ${apply1}\n- The language level to by high (at ${tone}%) only on the ${apply2}\n- The degree of formalism to be at ${degree}% only on the ${apply3}\n- The cover letter to include at least one of my ${include}\n- The cover letter to include at least three (3) of these words : ${keyword}`
    }

    if (workNameTwo != "" && workName != "") {

      prompt = `Can you please provide a cover letter based on professional details below\n\n- job ad url : ${jobURL} \n\n- Industry : ${industry} \n\n- Position : ${position} \n\n- Company : ${company} \n\n- Location : Paris \n\nMy professional informations :\n\n- Experience 1 :\n- Industry : ${workName}\n- Company : ${companyWork}\n- Position : ${positionWork}\n- From : ${fromWork} to : ${toWork}\n- Location : Geneva (Switzerland)\n\n- Experience 2 :\n- Industry : ${workNameTwo}\n- Company : ${companyWorkTwo}\n- Position : ${positionWorkTwo}\n- From : ${fromWorkTwo} to : ${toWorkTwo}\n- Location : Washington (USA)\n\n- Achievement : successfully managed and deployed a new website infrastructure over 16 sites, improved mobile sales by 32%\n- Location : Paris (France)\n\n\nI wish :\n- The cover letter to convey ${posture} tone in ${apply1}\n- The language level to by high (at ${tone}%) only on the ${apply2}\n- The degree of formalism to be at ${degree}% only on the ${apply3}\n- The cover letter to include at least one of my ${include}\n- The cover letter to include at least three (3) of these words : ${keyword}`
    }



    if (workNameThree != "" && workNameTwo != "" && workName != "") {

      prompt = `Can you please provide a cover letter based on professional details below\n\n- job ad url : ${jobURL} \n\n- Industry : ${industry} \n\n- Position : ${position} \n\n- Company : ${company} \n\n- Location : Paris \n\nMy professional informations :\n\n- Experience 1 :\n- Industry : ${workName}\n- Company : ${companyWork}\n- Position : ${positionWork}\n- From : ${fromWork} to : ${toWork}\n- Location : Geneva (Switzerland)\n\n- Experience 2 :\n- Industry : ${workNameTwo}\n- Company : ${companyWorkTwo}\n- Position : ${positionWorkTwo}\n- From : ${fromWorkTwo} to : ${toWorkTwo}\n- Location : Washington (USA)\n\n- Experience 3 :\n- Industry : ${workNameThree}\n- Company : ${companyWorkThree}\n- Position : ${positionWorkThree}\n- From : ${fromWorkThree} to : ${toWorkThree} \n- Achievement : successfully managed and deployed a new website infrastructure over 16 sites, improved mobile sales by 32%\n- Location : Paris (France)\n\n\nI wish :\n- The cover letter to convey ${posture} tone in ${apply1}\n- The language level to by high (at ${tone}%) only on the ${apply2}\n- The degree of formalism to be at ${degree}% only on the ${apply3}\n- The cover letter to include at least one of my ${include}\n- The cover letter to include at least three (3) of these words : ${keyword}`
    }

    var inputsForValidate = $('.valid');

    var value = check(inputsForValidate);
    if (value) {
  

      var url = "https://api.openai.com/v1/completions";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader(
        "Authorization",
        `Bearer ${key}`
      );

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          let response = xhr.responseText;
          response = JSON.parse(response);

          console.log(response);

          document.getElementById("output").innerHTML =
            response["choices"][0]["text"];
        }
      };

      // var question = document.getElementById("question").value;



      if (prompt) {

        prompt = JSON.parse(JSON.stringify(prompt));
      }


      var data = {
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 3200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      };

      data = JSON.stringify(data);

      xhr.send(data);

    }






  });



}); // documet ready end line

// addMore function Work
var b = 1;
function addMoreWork() {


  // if(b==4){
  //   $("#workcClonedivFour").show(500);
  //   b++;
  // }
  if (b == 3) {
    $("#workcClonedivThree").show(500);
    b++;
  }
  if (b == 2) {
    $("#workcClonedivTwo").show(500);
    b++;
  }

  if (b == 1) {
    $("#workcClonediv").show(500);
    b++;
  }

}

function removeWork() {

  if (b == 2) {
    $("#workcClonediv").hide(500);
    b--;
    $("#workcClonediv input").val('');
  }

  if (b == 3) {
    $("#workcClonedivTwo").hide(500);
    b--;
    $("#workcClonedivTwo input").val('');
  }
  if (b == 4) {
    $("#workcClonedivThree").hide(500);
    b--;
    $("#workcClonedivThree input").val('');
  }
  // if(b==5){
  //   $("#workcClonedivFour").hide(500);
  //   b--;
  //   $("#workcClonedivFour input").val('');
  // }



}

// addMore function Work





/*
* @params checkboxesCurrently
* 
*/
// function checkCurrentlyInput(checkboxesCurrently){
//     checkboxesCurrently.each(function(i){

//           var checkboxId = $(this).attr('id');
//           var input = $('.'+checkboxId);
//           if(!input.hasClass('valid')){
//           input.addClass('valid');
//         }

//         if($(this).is(':checked')){
//           input.removeClass('valid');
//         }
//       });
// }
// curretn function




// form validation function
function check(inputsForValidate) {
  var result = true;
  var firstFailedInput = null;
  var flagForFirstFailedInput = 0;



  inputsForValidate.each(function (i) {

    $(this).removeClass('valid-error');

    if ($(this).is(':visible')) {
      if ($(this).val().trim().length == 0) {
        $(this).addClass('valid-error');
        result = false;
        if (flagForFirstFailedInput == 0) {
          firstFailedInput = $(this);
          flagForFirstFailedInput = 1;
        }

      }
    }


  });

  if (firstFailedInput != null) {
    $('html, body').animate({
      scrollTop: firstFailedInput.offset().top
    }, 700);
  }


  return result;
}

// form validation function

// function addInputsToJson(inputs){
//   inputs.each(function(i){
//     var value = $(this).val();
//     var key = $(this).attr('id');
//     json_data[key]=value;
//   });
//   if($("#adresTwo").val().trim().length != 0){
//     var value = $("#adresTwo").val();
//     var key = $("#adresTwo").attr('id');
//     json_data[key]=value;
//   }
// }
