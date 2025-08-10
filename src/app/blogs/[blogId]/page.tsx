import { Suspense } from "react";
import Blogs from "@/components/Blogs/Blogs";
import Spinner from "@/components/UI/Spinner/Spinner";
import { fetchSingleBlog } from "@/lib/data-services";
import BlogDetails from "@/components/Blogs/BlogDetails";

async function BlogPage({ params }: { params: { blogId: number } }) {
  const { blogId } = await params;

  const { data } = await fetchSingleBlog(blogId);

  return (
    <>
      <BlogDetails
        media={data.media}
        title={data.title}
        content={data.excerpt}
        date={data.createdAt}
      />
      <Suspense
        fallback={
          <div className="flex justify-center">
            <Spinner />
          </div>
        }
      >
        <Blogs heading="Similar Blogs" />
      </Suspense>
    </>
  );
}

export default BlogPage;
