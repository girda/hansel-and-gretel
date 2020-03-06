import Bag from '../classes/Bag';

export default () => {
    const elementBag = document.querySelector('.js-bag');
    window.bag = new Bag(elementBag);
    bag.updateLength('orders');

//     $(".ajax-contact-form").submit(function(e) {
// 		e.preventDefault();


// 		fetch('./send-to-mail.php', {
// 			method: 'POST',
// 			body: JSON.stringify([{
// 					tel: document.querySelector('[name="tel"]').value
// 				},
// 				{
// 					tel: document.querySelector('[name="tel"]').value
// 				},
// 				{
// 					tel: document.querySelector('[name="tel"]').value
// 				},
// 				{
// 					tel: document.querySelector('[name="tel"]').value
// 				}
// 			])
// 		})
// 			.then(response => {
// 				console.log(response)
// 				if( response.statusText == 'OK') {
// 					// response.json()
// 				} else {
// 					$('.note').html(response);
// 				}
// 			})
// 			.then(res => {
// 				console.log(res)
// 				result = '<p>Ваш заказ принят</p>';
// 				$(".fields").hide();
// 				$('.note').html(result);
// 			})
// 			.catch(error => console.log(error))
// 		// $.ajax({
// 		// 	type: "POST",
// 		// 	url: "./contact.php",
// 		// 	data: str,
// 		// 	success: function(msg) {
// 		// 		if(msg == 'OK') {
// 		// 			result = '<p>Ваш заказ принят</p>';
// 		// 			$(".fields").hide();
// 		// 		} else {
// 		// 			result = msg;
// 		// 		}
// 		// 		$('.note').html(result);
// 		// 	}
// 		// });
// 		// return false;
// 	});
// }