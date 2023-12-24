/* eslint-disable no-useless-catch */
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw new Error("Failed to login. Please check your email and password.");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error("Failed to get current user.");
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error("Failed to logout.");
    }
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        throw new Error("Failed to create user account.");
      }
    } catch (error) {
      if (error.code === 401) {
        throw new Error("Invalid credentials. Please check your email and password.");
      } else if (error.code === 409) {
        throw new Error("User account already exists with the provided email.");
      } else {
        throw new Error("An error occurred while creating the user account.");
      }
    }
  }
}

const authService = new AuthService();

export default authService;
