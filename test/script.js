$(".phone_mask").mask("+7(999)999-99-99");


  $(document).ready(function(){   
    $(".email").inputmask("email")
  });

var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
var dayTomorrow = tomorrow.getDate(); 
var monthTomorrow = tomorrow.getMonth() + 1;
var yearTomorrow = tomorrow.getFullYear(); 
var dataAdd = document.getElementById('data');

if (dayTomorrow <= 9) {
 Number(dayTomorrow = '0' + dayTomorrow);
}
if (monthTomorrow <= 9) {
 Number(monthTomorrow = '0' + monthTomorrow);
}

dataAdd.value=`${yearTomorrow}-${monthTomorrow}-${dayTomorrow}`;
