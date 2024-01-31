const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinyAPIKey: String(import.meta.env.VITE_TinyMCE_Api_Key)
}
export default conf;