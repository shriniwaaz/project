var product=["Apple","Orange","Pomegranete","Banana","Papaya","Guava"];
var price=[150,50,130,40,80,70];
var total=0;

function calcTotal(){
	var c;
	var a=document.querySelectorAll('input[name="fruits"]');
	var b;
	for(const y of a){
		if(y.checked){
			b=y.value;
		}
	}
	var d=document.getElementById("Quantity").value;
	for(c=0;c<product.length;c++){
		if(b==product[c]){
			total=d*price[c];
			break;
		}
	}
	document.getElementById("Total").textContent="Total Price(in Rs):  "+total;
}



function submitFunction(){
	var i;
	var v;
	var j=document.querySelectorAll('input[name="fruits"]');
	var k;
	for(const l of j){
		if(l.checked){
			k=l.value;
			break;
		}
	}
	var h=document.getElementById("Quantity").value;
	for(i=0;i<product.length;i++){
		if(k==product[i]){
			v=h*price[i];
			break;
		}
	}

	var a=document.getElementById("fname").value;
	var b=document.getElementById("lname").value;
	var c=document.getElementById("email").value;
	var d=document.getElementById("address").value;
	var e=document.getElementById("city").value;
	var f=document.getElementById("state").value;
	var g=document.getElementById("pincode").value;
	var m=document.getElementById("phoneno").value;
	document.getElementById("Name").textContent="Name: "+a+" "+b;
	document.getElementById("Email").textContent="Email: "+c;
	document.getElementById("Address1").textContent="Address: "+d+","
	document.getElementById("Address2").textContent="\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+e+","
	document.getElementById("Address3").textContent="\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+f+"-"+g+".";
	document.getElementById("Product").textContent="Product Details: "+h+" kgs of "+k;
	document.getElementById("totalAmount").textContent="Total: Rs. "+v;
	document.getElementById("Phone_no").textContent="Phone Number: "+m;
}