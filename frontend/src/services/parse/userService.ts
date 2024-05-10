import Parse, {User} from 'parse'

export type UserType = User

export const authWithGoogle = async (token: string): Promise<any> => {
    try {
        const user = await Parse.Cloud.run('google-login', { id_token: token })
        const sessionToken = user.get('sessionToken')
        const currentUser = await Parse.User.become(sessionToken)
        return currentUser
    } catch (error) {
        console.log(error)
    }
}

export const getUser = (): UserType | undefined => {
    try {
        const currentUser = Parse.User.current()
        return currentUser
    } catch (error) {
        console.log(error)
    }
}