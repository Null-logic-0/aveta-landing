import { URL } from "@/constants/url";

export async function fetchAllBlogs() {
  try {
    const response = await fetch(`${URL}/blogs`);
    // await new Promise((resolve) => setTimeout(resolve, 6500));
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Failed to fetch blogs: ${response.status}`
      );
    }

    const result = await response.json();
    return result;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Failed to fetch all blogs!");
  }
}

export async function fetchSingleBlog(blogId: number) {
  try {
    const response = await fetch(`${URL}/blogs/${blogId}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Failed to fetch blog ${blogId}: ${response.status}`
      );
    }

    const result = await response.json();
    return result;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Failed to fetch single blog!");
  }
}
