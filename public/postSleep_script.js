let body = document.querySelector("body");
let form = document.forms[0];
let button = document.querySelector("#reg");
let loginBtn = document.querySelector("#login")
let password;
let email;
let user;



    //if resp from server is ok  => get user json back, should take id as parad, and send get request to home page with this param redirect to logged in screen user:id
// code on btn click works for reg
    button.addEventListener('click', (e)=>{
      e.preventDefault();
      
      password = document.querySelector("#password").value
      email = document.querySelector("#email").value
      user = {
          email: email, 
          password: password
      }
      // console.log(user);
      
      fetch ('./register', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.msg) {
            alert(`this user name already exists`)
          } else {
            let id = data[0].user_id;
          console.log(id)
          let url = `./home/${id}`
          window.open(url,'_blank');
          }
          
        })
      .catch(e => console.log(e))
      })

      

      
  
