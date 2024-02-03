import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                
                // call login method if user is successfully login
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }

        } catch (error) {
            console.log("create Account error::", error)
            throw error;
        }
    }

    // login method
    async login({ email, password }) {
        try {
            
            return await this.account.createEmailSession(email, password)
            
        } catch (error) {
            throw error;
        }

    }

    // checking is user already login?
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.error("get current user ::", error);
        }
        return null;
    }

    // to logout the user
    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;