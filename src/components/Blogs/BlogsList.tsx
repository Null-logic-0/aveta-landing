"use client";
import BlogCard from "./BlogCard";
import Heading from "../UI/Heading";
import Button from "../UI/Button";
import SubHeading from "../UI/SubHeading";
import { BlogInterface } from "@/interfaces/blog.interface";
import { useState } from "react";

type blogsProps = {
  blogs: BlogInterface[];
  error: boolean;
  subHeading?: string;
  heading: string;
};

function BlogsList({ blogs, error, subHeading, heading }: blogsProps) {
  const [showBlogs, setShowBlogs] = useState(false);
  const isEmpty = blogs.length === 0;

  const handleToggleShowBlogs = () => setShowBlogs(!showBlogs);

  const visibleBlogs = showBlogs ? blogs : blogs.slice(0, 3);

  return (
    <section
      id="blogs"
      className="flex flex-col items-center justify-center gap-4 w-full"
    >
      {subHeading && (
        <div className="flex justify-start  w-full">
          <SubHeading text={subHeading} />
        </div>
      )}
      <div className="flex justify-between w-full items-center">
        <Heading text={heading} />
        {blogs.length > 3 && (
          <Button className="w-[10%]" onClick={handleToggleShowBlogs}>
            {showBlogs ? "See Less" : "See More"}
          </Button>
        )}
      </div>

      {error && (
        <p className="text-2xl text-center opacity-50 font-bold mt-4">
          Failed to fetch blogs!
        </p>
      )}

      {!error && isEmpty && (
        <p className="text-2xl text-center opacity-50 font-bold mt-4">
          Empty | No Blogs Yet!
        </p>
      )}

      {!error && !isEmpty && (
        <div className="grid pt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {visibleBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              media={blog.media}
              excerpt={blog.excerpt}
              blogId={blog.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default BlogsList;
