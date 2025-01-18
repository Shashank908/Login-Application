const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', sendCon);

async function sendCon(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    try {
      let data = JSON.stringify(e);
      const response = await fetch('http://localhost:8000/api/login', {
        method: "POST",
        body: formData,
      });
  
      if (response.status === 200) {
        console.log("ok",response.status);
        window.location.replace("LoginSuccessful.html");
      } else {
        console.log("Invalid Credentials!!", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }