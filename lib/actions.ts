import { GraphQLClient } from "graphql-request";

import {
  createQuestionMutation,
  createUserMutation,
  deleteQuestionMutation,
  updateQuestionMutation,
  getQuestionByIdQuery,
  getQuestionsOfUserQuery,
  getUserQuery,
  questionsQuery,
  getAllQuestionsQuery,
  updateUserMutation,
} from "@/graphql";
import { QuestionForm, VariableProps } from "@/common.types";
import { Profile } from "next-auth";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
  : "letmein";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (err) {
    console.error("GraphQL Request Error:", err); // Log the error details
    throw err;
  }
};

export const fetchAllQuestions = (
  category?: string | null,
  endCursor?: string | null
) => {
  const variables = category
    ? {
        category,
        endCursor,
      }
    : { endCursor };
  client.setHeader("x-api-key", apiKey);

  return category
    ? makeGraphQLRequest(questionsQuery, variables)
    : makeGraphQLRequest(getAllQuestionsQuery, variables);
};

export const createNewQuestion = async (
  form: QuestionForm,
  creatorId: string,
  token: string
) => {
  client.setHeader("Authorization", `Bearer ${token}`);

  const variables = {
    input: {
      ...form,
      createdBy: {
        link: creatorId,
      },
    },
  };

  return makeGraphQLRequest(createQuestionMutation, variables);
};

export const updateQuestion = async (
  form: QuestionForm,
  userId: string,
  token: string
) => {
  let updatedForm = { ...form };

  client.setHeader("Authorization", `Bearer ${token}`);

  const variables = {
    id: userId,
    input: updatedForm,
  };

  return makeGraphQLRequest(updateQuestionMutation, variables);
};

export const updateUser = async (
  form: Profile,
  userId: string,
  token: string
) => {
  let updatedUser = { ...form };

  client.setHeader("Authorization", `Bearer ${token}`);

  const variables = {
    id: userId,
    input: updatedUser,
  };

  return makeGraphQLRequest(updateUserMutation, variables);
};

export const deleteQuestion = (id: string, token: string) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  return makeGraphQLRequest(deleteQuestionMutation, { id });
};

export const getQuestionDetails = async (id: string) => {
  try {
    client.setHeader("x-api-key", apiKey);
    const response = await makeGraphQLRequest(getQuestionByIdQuery, { id });
    console.log("Question details response:", response);
    return response;
  } catch (error) {
    console.error("Error fetching question details:", error);
    throw error;
  }
};
export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);

  const variables = {
    input: {
      name: name,
      email: email,
      avatarUrl: avatarUrl,
    },
  };

  return makeGraphQLRequest(createUserMutation, variables);
};

export const getUserQuestions = (id: string, last?: number) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getQuestionsOfUserQuery, { id, last });
};

export const getUser = (email: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getUserQuery, { email });
};
