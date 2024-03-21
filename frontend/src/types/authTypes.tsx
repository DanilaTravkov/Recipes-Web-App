export interface tokenInterface {
    token: string | null
    login: (username: string, password: string) => {}
    logout: ()
}