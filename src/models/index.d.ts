import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum DifficultyEnums {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  FAST = "FAST"
}

export enum Status {
  OPEN = "OPEN",
  INPROGRESS = "INPROGRESS",
  COMPLETED = "COMPLETED",
  ASSIGNED = "ASSIGNED"
}



type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PortifolioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Location {
  readonly id: string;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly country?: string | null;
  readonly street?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class Portifolio {
  readonly id: string;
  readonly title?: string | null;
  readonly filesKey?: string | null;
  readonly backgroundImageKey?: string | null;
  readonly content?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Portifolio, PortifolioMetaData>);
  static copyOf(source: Portifolio, mutator: (draft: MutableModel<Portifolio, PortifolioMetaData>) => MutableModel<Portifolio, PortifolioMetaData> | void): Portifolio;
}

export declare class Images {
  readonly id: string;
  readonly key?: string | null;
  readonly url?: string | null;
  readonly jobID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Images, ImagesMetaData>);
  static copyOf(source: Images, mutator: (draft: MutableModel<Images, ImagesMetaData>) => MutableModel<Images, ImagesMetaData> | void): Images;
}

export declare class Messages {
  readonly id: string;
  readonly message?: string | null;
  readonly User?: User | null;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messagesUserId?: string | null;
  constructor(init: ModelInit<Messages, MessagesMetaData>);
  static copyOf(source: Messages, mutator: (draft: MutableModel<Messages, MessagesMetaData>) => MutableModel<Messages, MessagesMetaData> | void): Messages;
}

export declare class User {
  readonly id: string;
  readonly fullname?: string | null;
  readonly subcategories?: (string | null)[] | null;
  readonly reviewsLength?: number | null;
  readonly totalJobsDone?: number | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly avatar?: string | null;
  readonly notificationsActived?: boolean | null;
  readonly website?: string | null;
  readonly firstTimeLoggin: boolean;
  readonly jobs?: (JobUser | null)[] | null;
  readonly Categories?: (Category | null)[] | null;
  readonly Locations?: (Location | null)[] | null;
  readonly Portifolios?: (Portifolio | null)[] | null;
  readonly gender?: string | null;
  readonly hasDeficiency?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Job {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly dateTimestamp?: number | null;
  readonly dateDate?: string | null;
  readonly location?: string | null;
  readonly canBeDoneRemotely?: boolean | null;
  readonly minimumPrice?: number | null;
  readonly qualifications?: (string | null)[] | null;
  readonly difficulty?: DifficultyEnums | keyof typeof DifficultyEnums | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly urgent?: boolean | null;
  readonly commentedBy?: (Comment | null)[] | null;
  readonly users?: (JobUser | null)[] | null;
  readonly author?: User | null;
  readonly Images?: (Images | null)[] | null;
  readonly needPreviousExperience?: string | null;
  readonly acceptedBy?: User | null;
  readonly categoryID?: string | null;
  readonly categories?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly jobAuthorId?: string | null;
  readonly jobAcceptedById?: string | null;
  constructor(init: ModelInit<Job, JobMetaData>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job, JobMetaData>) => MutableModel<Job, JobMetaData> | void): Job;
}

export declare class Comment {
  readonly id: string;
  readonly text?: string | null;
  readonly jobID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class ChatRoom {
  readonly id: string;
  readonly Messages?: (Messages | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

export declare class JobUser {
  readonly id: string;
  readonly user: User;
  readonly job: Job;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<JobUser, JobUserMetaData>);
  static copyOf(source: JobUser, mutator: (draft: MutableModel<JobUser, JobUserMetaData>) => MutableModel<JobUser, JobUserMetaData> | void): JobUser;
}