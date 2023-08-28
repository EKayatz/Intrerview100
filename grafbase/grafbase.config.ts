import { g, config, auth } from "@grafbase/sdk";

// @ts-ignore
const User = g
  .model("User", {
    name: g.string().length({ min: 2, max: 100 }),
    email: g.string().unique(),
    avatarUrl: g.url(),
    bannerUrl: g.string().optional(),
    description: g.string().length({ min: 2, max: 1000 }).optional(),
    githubUrl: g.string().optional(),
    linkedinUrl: g.string().optional(),
    questions: g
      .relation(() => Question)
      .list()
      .optional(),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().update();
  });

// @ts-ignore
const Question = g
  .model("Question", {
    question: g.string().length({ min: 3, max: 150 }),
    answer: g.string().length({ min: 3, max: 150 }),
    category: g.string().search(),
    createdBy: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().delete().update();
  });

const jwt = auth.JWT({
  issuer: "grafbase",
  secret: g.env("NEXTAUTH_SECRET"),
});

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  },
});
