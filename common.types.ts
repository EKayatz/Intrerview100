import { User, Session } from "next-auth";

export type FormState = {
  question: string;
  answer: string;
  category: string;
};

export interface QuestionForm {
  question: string;
  answer: string;
  category: string;
}

export type UserForm = {
  name: string;
  description: string;
  bannerUrl: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
};

export type ProfileForm = {
  name: string;
  description: string;
  bannerUrl: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
};

export interface QuestionInterface {
  question: string;
  answer: string;
  category: string;
  id: string;
  createdBy: {
    name: string;
    email: string;
    avatarUrl: string;
    id: string;
  };
}

export interface VariableProps {
  name: string;
  email: string;
  description: string;
  bannerUrl: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  description: string | null;
  bannerUrl: string | null;
  avatarUrl: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  questions: {
    edges: { node: QuestionInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    description: string;
    bannerUrl: string;
    avatarUrl: string;
    githubUrl: string;
    linkedinUrl: string;
  };
}
