const conf = {
  url: String(import.meta.env.VITE_APPWRITE_URL),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  UserCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_USER_ID),
  JobsCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_JOBS_ID),
  CourseCollectionId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_COURSE_ID
  ),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
