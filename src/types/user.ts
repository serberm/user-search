export type User = {
  email: string
  token: string
}

export interface IUser {
  id: number
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  score: number
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  name: string
  email: string
  bio?: string
  company?: string
  followers?: string
  following?: string
  public_repos?: string
  public_gists?: string
}
