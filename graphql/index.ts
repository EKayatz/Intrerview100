export const createQuestionMutation = `
	mutation CreateQuestion($input: QuestionCreateInput!) {
		questionCreate(input: $input) {
			question {
        id
        question
        answer
        category
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const updateQuestionMutation = `
	mutation UpdateQuestion($id: ID!, $input: QuestionUpdateInput!) {
		questionUpdate(by: { id: $id }, input: $input) {
			question {
        id
        question
        answer
        category
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const deleteQuestionMutation = `
  mutation DeleteQuestion($id: ID!) {
    questionDelete(by: { id: $id }) {
      deletedId
    }
  }
`;

export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
        bannerUrl
				description
				githubUrl
				linkedinUrl
				id
			}
		}
	}
`;

export const updateUserMutation = `
	mutation UpdateUser($id: ID!, $input: UserUpdateInput!) {
		userUpdate(by: { id: $id }, input: $input) {
      user {
				name
				email
				avatarUrl
        bannerUrl
				description
				githubUrl
				linkedinUrl
				id
			}
		}
	}
`;

export const questionsQuery = `
  query getQuestions($category: String, $endCursor: String) {
    questionSearch(first: 6, after: $endCursor, filter: {category: {eq: $category}}) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          question
          answer
          category
          createdBy {
            id
            email
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

export const getQuestionByIdQuery = `
  query GetQuestionById($id: ID!) {
    question(by: { id: $id }) {
      id
      question
      answer
      category
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      bannerUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;

export const getQuestionsOfUserQuery = `
query getUserQuestions($id: ID!, $last: Int = 4) {
  user(by: { id: $id }) {
    id
    name
    email
    description
    avatarUrl
    bannerUrl
    githubUrl
    linkedinUrl
    questions(last: $last) {
      edges {
        node {
          id
          question
          answer
        }
      }
    }
  }
}
`;

export const getAllQuestionsQuery = `
  query allProjects($endCursor: String) {
    questionSearch(first: 6, after: $endCursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          question
          answer
          id
          category
          createdBy {
            id
            email
            name
            avatarUrl
          }
        }
      }
    }
  }
`;
