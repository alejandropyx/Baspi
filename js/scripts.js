function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});

$(document).on("click", "a", function() {
    //this == the link that was clicked
    var href = $(this)[0].innerText;
	var x = document.getElementsByClassName("active");     
	for (var i = 0; i < x.length; i++)
	{
		$(x[i]).toggleClass('active');
	}
	

	$(".navbar-toggler").click();
	
	$(this).parent().toggleClass('active');
	if(href==="People"){
		
		$("#Home").hide();
		
		$("#People").show();
	}
	
    console.log(href);
});