const user_name = "skfeat17";

fetch(`https://api.reko.moe/recommendations/${user_name}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    accuracy: 100,
    banned_ids: [ 51462 ],
    banned_users: [],
    force_list_update: false,
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
