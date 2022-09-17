let body = document.querySelector("body");
let form = document.forms[0];
let button = document.querySelector("#reg");
let loginBtn = document.querySelector("#login")
let password;
let email;
let user;

// const register =(event)=>{
//     event.preventDefault();
//     // password = form.password.value;
//     // email = form.email.value;
//     password = document.querySelector("#password").value
//     email = document.querySelector("#email").value
//     user = {
//         user_id: 'default',
//         email: email, 
//         password: password
//     }
//     console.log(user);
    
//     fetch ('/register', {
//         method:'POST',
//         headers:{
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
      
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)})
//     .catch(e => console.log(e))
//     }

    //if resp from server is ok  => get user json back, should take id as parad, and send get request to home page with this param redirect to logged in screen user:id
// code on btn click works for reg
    // button.addEventListener('click', (e)=>{
    //   e.preventDefault();
      
    //   password = document.querySelector("#password").value
    //   email = document.querySelector("#email").value
    //   user = {
    //       email: email, 
    //       password: password
    //   }
    //   console.log(user);
      
    //   fetch ('./register', {
    //       method:'POST',
    //       headers:{
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(user)
        
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)
    //       let id = data[0].user_id;
    //       console.log(id)
    //       // window.open(`https://www.geeksforgeeks.org`,'_blank');
    //       let url = `./home/${id}`
    //       window.open(url,'_blank');
    //     })
    //   .catch(e => console.log(e))
    //   })

    


    // const login = (event) =>{
    //     event.preventDefault();
    //     let lEmail = form.lemail.value;
    //     let lPsw = form.psw.value;
      
        
      
    //     let loginData = {
    //     email: lEmail,
    //     password: lPsw
    //   };
      
    //   console.log(loginData)
        
    //     console.log(loginData);
        
    //     fetch ('./login', {
    //       method:'POST',
    //       headers:{
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(loginData)
        
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
          

        
    //     })
    //     .catch(e => console.log(e))
    //         //if resp from server is ok  => redirect to logged in screen user:id

    //   }

      loginBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        password = document.querySelector("#psw").value
        email = document.querySelector("#lemail").value
        
      
        let loginData = {
        email: email,
        password: password
      };
      
      console.log(loginData)
        
        console.log(loginData);
        
        fetch ('./login', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          

        
        })
        .catch(e => console.log(e))
      })