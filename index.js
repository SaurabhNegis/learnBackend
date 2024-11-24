require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "SaurabhNegis",
"id": 154676530,
"node_id": "U_kgDOCTgtMg",
"avatar_url": "https://avatars.githubusercontent.com/u/154676530?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/SaurabhNegis",
"html_url": "https://github.com/SaurabhNegis",
"followers_url": "https://api.github.com/users/SaurabhNegis/followers",
"following_url": "https://api.github.com/users/SaurabhNegis/following{/other_user}",
"gists_url": "https://api.github.com/users/SaurabhNegis/gists{/gist_id}",
"starred_url": "https://api.github.com/users/SaurabhNegis/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/SaurabhNegis/subscriptions",
"organizations_url": "https://api.github.com/users/SaurabhNegis/orgs",
"repos_url": "https://api.github.com/users/SaurabhNegis/repos",
"events_url": "https://api.github.com/users/SaurabhNegis/events{/privacy}",
"received_events_url": "https://api.github.com/users/SaurabhNegis/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "saurabh negi",
"company": null,
"blog": "",
"location": "Gopeshwar ",
"email": null,
"hireable": null,
"bio": "Currently pursuing my B.Tech from Institute  of technology Gopeshwar Chamoli",
"twitter_username": null,
"public_repos": 3,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2023-12-23T12:10:17Z",
"updated_at": "2024-11-24T11:35:21Z"

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('Hello twitter  !')
})

app.get('/github',(req, res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
