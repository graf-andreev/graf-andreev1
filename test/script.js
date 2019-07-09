//jquery mask form input

$(".phone_mask").mask("+7(999)999-99-99");

$(document).ready(function() {   
  $(".email").inputmask("email");
});

//next day for data

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

//inn input and json data

$(document).ready(function() {
  $("#form").submit(function(e) {
      e.preventDefault();
            
      var innValue = String($('#inn').val());
      if (innValue.length !== 10 && innValue.length !== 12) {
        document.getElementById('inn').style.borderColor ='red';
        alert('ИНН должен содержать 10 или 12 цифр')
        var innInput = document.getElementById('inn');
        innInput.validity = false;
        return;
      }
      var form = e.target;
      var formData = {
        name: form.name.value,
        INN: form.INN.value,
        email: form.email.value,
        telephone: form.telephone.value,
        date_order: form.date_order.value
      };

      formData = JSON.stringify(formData);
      alert(JSON.stringify(formData));
  });
});
