import { redirect } from "react-router-dom";

// Access context (like addPost) via external import if needed
// You can't use useContext in non-component functions

export async function createRouterPost({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const userId = parseInt(postData.userId);
  const title = postData.title;
  const body = postData.body;
  const reactions = parseInt(postData.reactions);
  const tags = postData.tags.split(",").map((tag) => tag.trim());

  try {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        reactions,
        tags,
      }),
    });

    const post = await response.json();
    const uniquePost = { ...post, id: Date.now() };

    // You can save this to local storage or global store via some custom logic here
    // e.g., trigger a toast or reload post list

    return redirect("/"); // redirect to homepage after successful creation
  } catch (error) {
    console.error("Error creating post:", error);
    return redirect("/?error=failed"); // optional: show error on redirect
  }
}
