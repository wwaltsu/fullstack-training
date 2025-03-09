import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";


const app = new Hono();


app.use("/*", cors());
app.use("/*", logger());

app.get("/", (c) => c.json({ message: "Hello world!" }));

app.get("/courses", (c) => {
  const courses = [
    { id: 1, name: "Web Software Development" },
    { id: 2, name: "Device-Agnostic Design" },
  ];
  return c.json({ courses });
});

app.get("/courses/:id", (c) => {
  const id = Number(c.req.param("id"));
  const courseInformation = { id, name: "Course Name" };
  return c.json({ course: courseInformation });
});

app.post("/courses", async (c) => {
  const { name } = await c.req.json();
  const id = 3;
  return c.json({ course: { id, name } });
});

app.get("/courses/:id/topics", async (c) => {
  const topicInformation = [
    { id: 1, name: "Topic 1" },
    { id: 2, name: "Topic 2" },
  ];
  return c.json({ topics: topicInformation });
});
app.get("courses/:cid/topics/:tid/posts", async (c) => {
  const postInformation = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];
  return c.json({ posts: postInformation });
});
app.get("/courses/:cId/topics/:tId/posts/:pId", async (c) => {
  const pId = Number(c.req.param("pId"));
  const post = { id: pId, title: "Post Title" };

  const postAnswers = [
    { id: 1, content: "Answer 1" },
    { id: 2, content: "Answer 2" },
  ];
  return c.json({ post, answers: postAnswers });
});

export default app;