import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(title, slug, content, featuredImage, status, userId) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.error("Error creating post:", error);
            throw new Error("Failed to create post.");
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.error("Error updating post:", error);
            throw new Error("Failed to update post.");
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.error("Error getting post:", error);
            throw new Error("Failed to get post.");
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("Error getting posts:", error);
            throw new Error("Failed to get posts.");
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            throw new Error("Failed to upload file.");
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            throw new Error("Failed to delete file.");
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            throw new Error("Failed to delete post.");
        }
    }

     previewFile(fileId) {
        try {
            return  this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error("Error previewing file:", error);
            throw new Error("Failed to preview file.");
        }
    }
}

const service = new Services();
export default service;
