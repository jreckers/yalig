//jore001

  var goTime = new Date();
  var currentHours = ("0" + goTime.getHours()).substr(-2);
  var currentMins = ("0" + goTime.getMinutes()).substr(-2);
  var currentMonth = ("0" + (goTime.getMonth()+1)).substr(-2);
  var currentDate = ("0" + goTime.getDate()).substr(-2);
  var currentDay = ("0" + (goTime.getDay())).substr(-2);

  console.log(currentMonth);
  console.log(currentDay);
  console.log("Hours:" + currentHours);
  console.log("Minutes:" + currentMins);
  console.log(currentHours + ":" + currentMins)