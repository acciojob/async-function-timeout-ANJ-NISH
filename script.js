//your JS code here. If required.

let btn=document.getElementById("btn");

let pfunction=(delay)=>
	{
		return new Promise((resolve,reject)=>
			{
				setTimeout(()=>{resolve("resolved")},delay);
			})
	}

btn.addEventListener('click',async()=>
	{
		let text=document.getElementById('text').value;
		let delay=document.getElementById('delay').value;

		let res=await pfunction(delay);

		document.getElementById("output").textContent=text;
	})