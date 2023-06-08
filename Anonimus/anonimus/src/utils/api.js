class Api {

  _getResJson(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.status);
  }


  PostText(text) {
const raw = JSON.stringify({text});
    console.log(raw);
const url = `http:///api/send-email`;
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json',
 	'Access-Control-Allow-Credentials': "*",
      },
      body: JSON.stringify({text}),
     
      })
      .then(function(res){ console.log("Done") })
.catch(function(res){ console.log(res) })  };

}

export default new Api();
