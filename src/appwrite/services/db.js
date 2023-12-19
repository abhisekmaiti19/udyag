import conf from "../conf/conf";
import { Client, Databases, Storage, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.url).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createUser({ name, email, isAdmin, phone, disability }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.UserCollectionId,
        phone,
        {
          name,
          email,
          isAdmin,
          phone,
          disability,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async createJob({ createdBy, pos, location, pack, disability, skills }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.JobsCollectionId,
        ID.unique(),
        {
          createdBy,
          pos,
          location,
          pack,
          disability,
          skills,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createJob :: error", error);
    }
  }

  async getAllJob() {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.JobsCollectionId
      );
    } catch (error) {
      console.log("Appwrite serive :: getAllJob :: error", error);
    }
  }

  async updateUser(
    email,
    { name, isAdmin, skills, phone, parentPh, jobapplied, courseapplied }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.UserCollectionId,
        email,
        {
          name,
          email,
          isAdmin,
          skills,
          phone,
          parentPh,
          jobapplied,
          courseapplied,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async getUser(id) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.UserCollectionId,
        id
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
