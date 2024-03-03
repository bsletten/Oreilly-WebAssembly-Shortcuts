const rust = import('./pkg');

rust
  .then(m => {
      return m.run("https://random.dog/woof.json").then((data) => {
          console.log(data);

	  let url = data.url.toLowerCase();

	  let elem;

	  if(url.endsWith('jpg') ||
	     url.endsWith('gif') ||
	     url.endsWith('png') ||
	     url.endsWith('jpeg')
	    ) {
	      elem = document.getElementById("dog-img");
	  } else if(url.endsWith('mp4')) {
	      elem = document.getElementById("dog-vid");
	  }

          elem.src = url;
      })
  })
  .catch(console.error);
