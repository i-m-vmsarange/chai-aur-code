import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (userAccount) {
        // go to next step : login
        return this.login({ email, password });
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const doesUserExist = await this.account.createEmailPasswordSession({
        email,
        password,
      });
      if (doesUserExist) {
        return this.getCurrentUser();
      } else {
        return "Invalid username or password";
      }
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Appwrite Service:: getCurrentUser error", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service Error:: Logout error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
