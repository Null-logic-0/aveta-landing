import DefaultImage from "../../../public/default-image.jpg";
import Image from "next/image";
import CardLayout from "../UI/CardLayout";
import { textSlicer } from "@/helpers/text-slice";
import Link from "next/link";

type BlogCardType = {
  media: string;
  title: string;
  excerpt: string;
  blogId: number;
};

function BlogCard({ media, title, excerpt, blogId }: BlogCardType) {
  return (
    <Link href={`/blogs/${blogId}`}>
      <CardLayout className="flex hover:border-white transform transition-all cursor-pointer  flex-col gap-6 p-6 h-[363px] max-md:h-full  w-full max-w-[394px]">
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
          <Image
            src={media || DefaultImage}
            alt={title}
            fill
            loading="lazy"
            quality={80}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-xl"
          />
        </div>

        <div>
          <h3 className="text-[#FF4DC3] font-semibold text-lg pb-2">
            {textSlicer(title, 20)}
          </h3>
          <p className="text-sm font-semibold text-white/50">
            {textSlicer(excerpt, 45)}
          </p>
        </div>
      </CardLayout>
    </Link>
  );
}

export default BlogCard;
