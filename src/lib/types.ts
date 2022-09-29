export interface Session {
  user: {
    name: string,
    picture: string,
    email: string,
    email_verified:
    boolean,
    uid: string
  } | null
}