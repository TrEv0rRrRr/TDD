import { getPostById } from "../src/getPostById";

const id = 1;

describe("Integration with JSONPlaceholder API", () => {
  test("should fetch a post by id", async () => {
    const post = await getPostById(id);
    expect(post).toHaveProperty("id", id);
    expect(post).toHaveProperty("userId", id);
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
  });

  test("should fetch a post and verify property types", async () => {
    const post = await getPostById(id);
    expect(post).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test("should throw an error if the post id is invalid", async () => {
    await expect(getPostById(0)).rejects.toThrow("Invalid post ID");
  });
});
