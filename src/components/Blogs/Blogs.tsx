import BlogsList from "./BlogsList";
import { fetchAllBlogs } from "@/lib/data-services";

type BlogsProps = {
  heading: string;
  subHeading?: string;
};

async function Blogs({ heading, subHeading }: BlogsProps) {
  let blogs = [];
  let error = false;

  try {
    const { data } = await fetchAllBlogs();
    blogs = data?.data || [];
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    error = true;
  }

  return (
    <BlogsList
      blogs={blogs}
      error={error}
      heading={heading}
      subHeading={subHeading}
    />
  );
}

export default Blogs;
