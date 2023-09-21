// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DifficultyEnums = {
  "EASY": "EASY",
  "MEDIUM": "MEDIUM",
  "HARD": "HARD",
  "FAST": "FAST"
};

const Status = {
  "OPEN": "OPEN",
  "INPROGRESS": "INPROGRESS",
  "COMPLETED": "COMPLETED",
  "ASSIGNED": "ASSIGNED"
};

const { Location, Portifolio, Images, Messages, User, Job, Comment, Category, ChatRoom, JobUser } = initSchema(schema);

export {
  Location,
  Portifolio,
  Images,
  Messages,
  User,
  Job,
  Comment,
  Category,
  ChatRoom,
  JobUser,
  DifficultyEnums,
  Status
};