export const mockData = {
  histories: [
    {
      label: 'test1',
      value: 'test1',
      date: new Date()
    },
    {
      label: 'test2',
      value: 'test2',
      date: new Date()
    }
  ],
  users: [
    {
      "login": "test1",
      "id": 22581,
      "node_id": "MDQ6VXNlcjIyNTgx",
      "avatar_url": "https://avatars.githubusercontent.com/u/22581?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/test1",
      "html_url": "https://github.com/test1",
      "followers_url": "https://api.github.com/users/test1/followers",
      "following_url": "https://api.github.com/users/test1/following{/other_user}",
      "gists_url": "https://api.github.com/users/test1/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/test1/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/test1/subscriptions",
      "organizations_url": "https://api.github.com/users/test1/orgs",
      "repos_url": "https://api.github.com/users/test1/repos",
      "events_url": "https://api.github.com/users/test1/events{/privacy}",
      "received_events_url": "https://api.github.com/users/test1/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    },
    {
      "login": "test123",
      "id": 27031,
      "node_id": "MDQ6VXNlcjI3MDMx",
      "avatar_url": "https://avatars.githubusercontent.com/u/27031?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/test123",
      "html_url": "https://github.com/test123",
      "followers_url": "https://api.github.com/users/test123/followers",
      "following_url": "https://api.github.com/users/test123/following{/other_user}",
      "gists_url": "https://api.github.com/users/test123/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/test123/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/test123/subscriptions",
      "organizations_url": "https://api.github.com/users/test123/orgs",
      "repos_url": "https://api.github.com/users/test123/repos",
      "events_url": "https://api.github.com/users/test123/events{/privacy}",
      "received_events_url": "https://api.github.com/users/test123/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    }
  ],
  user: null,
  setHistories: () => {},
  isLoading: false,
  error: {show: false, msg: ''},
  searchGithubUsers: () => {},
  getGithubUser: () => {}
}
