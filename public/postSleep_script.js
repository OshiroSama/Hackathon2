let body = document.querySelector("body");
let button = document.querySelector("#postSleep");
let loginBtn = document.querySelector("#login")
let userId;




    button.addEventListener('click', (e)=>{
      e.preventDefault();
      currentUrl = window.location.href;
      let user_id = currentUrl.replace('http://localhost:3000/home/','');
      user_id = Number(user_id);
      console.log(user_id)
      date = document.querySelector("#date").value
      hours = document.querySelector("#hours").value

      insertValues = {
          user_id: user_id,
          date: date, 
          hours: hours,
          went_to_sleep: '2016-06-22 19:10:25-07',
          woke_up:'2016-06-22 19:10:25-07'
      }
      // console.log(insert);
      
      fetch ('./insert', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(insertValues)
        
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

      

      
  
