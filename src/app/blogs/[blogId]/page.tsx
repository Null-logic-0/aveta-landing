import { Suspense } from "react";
import Blogs from "@/components/Blogs/Blogs";
import Spinner from "@/components/UI/Spinner/Spinner";
import { fetchSingleBlog } from "@/lib/data-services";
import BlogDetails from "@/components/Blogs/BlogDetails";

type BlogPageProps = {
  params: Promise<{ blogId: string }>;
};

async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = await params;

  const { data } = await fetchSingleBlog(Number(blogId));

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
