export function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

export function sendVoteLinkToServer({
  link,
  increment,
  email,
}) {
  return fetch(`http://localhost:3000/api/links/${link.id}/vote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      increment,
      email,
    }),
  }).then(response => response.json());
}


export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}
