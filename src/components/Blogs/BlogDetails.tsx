import Image from "next/image";
import Heading from "../UI/Heading";
import DefaultImage from "../../../public/default-image.jpg";

type BlogDetailProps = {
  media: string;
  title: string;
  content: string;
  date: string;
};

function BlogDetails({ media, title, content, date }: BlogDetailProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full max-w-[1180px] aspect-[16/9]">
        <Image
          src={media || DefaultImage}
          alt="blog image"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1180px"
          loading="lazy"
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col items-start w-full gap-2">
        <Heading text={title} />
        <p className="text-sm font-semibold opacity-50">{date}</p>
      </div>
      <div className="text-lg font-semibold opacity-70 max-md:text-sm">
        {content.split("\n").map((line, i) => (
          <p key={i} className="mb-4">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
