const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', sendData);

async function sendData(e){
  e.preventDefault();

  const formData = new FormData(this);
  try {
    let data = JSON.stringify(e);
    const response = await fetch('http://localhost:8000/api/register', {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      console.log("ok",response.status);
      window.location.replace("Success.html");
    } else {
      console.log("Check if already registered!!", response.status);
      window.location.replace("Failure.html");
    }
  } catch (error) {
    console.log(error);
    window.location.replace("Failure2.html");
  }
}

function check_pass() {
    if(document.getElementById('password').value == document.getElementById('c_password').value) {
        document.getElementById("submit").disabled = false;
    } else{
        document.getElementById("submit").disabled = true;
        document.getElementById('test').innerHTML = 'Check if passwords are same';
    }
}

