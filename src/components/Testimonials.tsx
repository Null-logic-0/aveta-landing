import Image from "next/image";
import CardLayout from "./UI/CardLayout";
import Heading from "./UI/Heading";
import SubHeading from "./UI/SubHeading";
import Stars from "../../public/stars.png";
import UserImage1 from "../../public/adrian-novak.jpg";
import UserImage2 from "../../public/emily-carter.jpg";
import UserImage3 from "../../public/daniel-morales.jpg";

function Testimonials() {
  return (
    <section className="flex flex-col items-center gap-6">
      <SubHeading text="Testimonials" />
      <Heading text="Hear From Our Happy Customers." />
      <div className="flex justify-center flex-wrap gap-6 pt-6 items-center">
        <CardLayout className="p-6 flex flex-col justify-center gap-4 max-w-[320px] h-[300px] max-md:h-full">
          <p className="text-sm font-medium opacity-50">
            &quot;Aveta’s AI character creation blew me away! I love how easy it
            is to design unique characters and then actually chat with them. The
            personalities feel real and engaging — it’s like having a creative
            partner right at my fingertips.&quot;
          </p>
          <div className="border-t-2 border-[#3B3A3F] flex justify-between gap-2 max-sm:flex-col items-center">
            <div className="flex gap-2 items-center py-4">
              <Image
                src={UserImage1}
                alt="Adrian Novak avatar"
                loading="lazy"
                quality={80}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Adrian Novak</p>
                <p className="text-xs opacity-50 font-semibold">
                  Verified Customer
                </p>
              </div>
            </div>
            <Image src={Stars} quality={80} loading="lazy" alt="stars" />
          </div>
        </CardLayout>
        <CardLayout className="p-6 flex flex-col justify-center gap-4 max-w-[320px] h-[300px] max-md:h-full">
          <p className="text-sm font-medium opacity-50">
            &quot;I’ve tried several AI chat platforms, but Aveta stands out for
            its character customization. The generated characters are detailed
            and customizable, and chatting with them is fun and surprisingly
            natural. A few more personality options would be great!&quot;
          </p>
          <div className="border-t-2 border-[#3B3A3F] flex justify-between gap-2 max-sm:flex-col items-center">
            <div className="flex gap-2 items-center py-4">
              <Image
                src={UserImage2}
                alt="Emily Carter avatar"
                loading="lazy"
                quality={80}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Emily Carter</p>
                <p className="text-xs opacity-50 font-semibold">
                  Verified Customer
                </p>
              </div>
            </div>
            <Image src={Stars} quality={80} loading="lazy" alt="stars" />
          </div>
        </CardLayout>
        <CardLayout className="p-6 flex flex-col justify-center gap-4 max-w-[320px] h-[300px] max-md:h-full">
          <p className="text-sm font-medium opacity-50">
            &quot;Aveta is perfect for writers and game developers like me.
            Creating AI-driven characters that respond intelligently has saved
            me so much time. The chat feature is smooth and helps me explore
            character dialogue in depth. Highly recommend it!&quot;
          </p>
          <div className="border-t-2 border-[#3B3A3F] flex max-sm:flex-col gap-2 justify-between items-center">
            <div className="flex gap-2 items-center py-4">
              <Image
                src={UserImage3}
                alt="Daniel Morales avatar"
                loading="lazy"
                quality={80}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Daniel Morales</p>
                <p className="text-xs opacity-50 font-semibold">
                  Verified Customer
                </p>
              </div>
            </div>
            <Image src={Stars} quality={80} loading="lazy" alt="stars" />
          </div>
        </CardLayout>
      </div>
    </section>
  );
}

export default Testimonials;
