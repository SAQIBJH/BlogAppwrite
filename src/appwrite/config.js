import conf from "../conf/conf";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
// slug is used as a document ID
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        // const token = this.client.headers['x-appwrite-session']
        // console.log('Authentication Token:', token);

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            
        } catch (error) {
            console.log("createPost error", error);
        }
        
    }

    async updatePost(slug,{title,content,featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Update Post :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug)
            return true;
            
        } catch (error) {
            console.log("deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            
        } catch (error) {
            console.log("getPost :: error", error);
            return false;
        }
        
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
            )
            
        } catch (error) {
            console.log("getPosts :: error", error); 
        }
    }

    // ******************** file upload services ****************//
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file,

            )

            
        } catch (error) {
            console.log("uploadFile :: error ", error)
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketID,
                fileId)
            return true;
        } catch (error) {
            console.log("deleteFile :: error ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketID,
            fileId)
        } catch (error) {
            console.log("getFilePreview :: error ", error);
        }
    }
}

const service = new Service();
export default service;