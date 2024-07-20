
// type CreateUserAccount = {
//     email: string,
//     password: string
// }

// type LoginUserAccount = {
//     email: string,
//     password: string
// }

// const appwriteClient = new Client();

// appwriteClient.setEndpoint(conf.appwriteURl).setProject(conf.appwriteProjectID);

// export const account = new Account(appwriteClient);

// export class AppwriteService{
//     // create user account

// }
import conf from "@/conf/config";
import { Client, Account, ID, Databases, Avatars, Storage, Functions  } from "appwrite";


export const client = new Client();

client.setEndpoint(conf.appwriteURl).setProject(conf.appwriteProjectID);

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);