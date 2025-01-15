import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Theresa Webb",
    body: "Pocketti has really helped me to multitask and safe better",
    img: "avatars/avatar1.svg",
  },
  {
    name: "Ronald Richards",
    body: "Great app design which is constantly improving. I love it!",
    img: "avatars/avatar2.svg",
  },
  {
    name: "Devon Lane",
    body: "Pocketti has really helped me to multitask and safe better",
    img: "avatars/avatar3.svg",
  },
  {
    name: "Adelana Swav",
    body: "makes me genuinely enjoy tracking my finances when it used to be purely a chore.",
    img: "avatars/avatar4.svg",
  },
  {
    name: "Cody Fisher",
    body: "Pocketti has really helped me to multitask and safe better",
    img: "avatars/avatar5.svg",
  },
  {
    name: "Jacob Jones",
    body: "Can't wait for the new updates, seeing what they add every update is so existing",
    img: "avatars/avatar6.svg",
  },
  {
    name: "Leslie Alexander",
    body: "Pocketti has changed the way I bank and being exicted by my finance",
    img: "avatars/avatar7.svg",
  },
  {
    name: "Kathryn Murphy",
    body: "Pocketti has really helped me to multitask and safe better",
    img: "avatars/avatar8.svg",
  },
  {
    name: "Savannah Nguyeny",
    body: "Love this app! It makes saving a breeze! Such a well designed app",
    img: "avatars/avatar9.svg",
  },
  {
    name: "Robert Fox",
    body: "It's functional and aesthetic and gaining new features all the time.",
    img: "avatars/avatar10.svg",
  },
  {
    name: "Ralph Edwards",
    body: "makes me genuinely enjoy tracking my finances",
    img: "avatars/avatar11.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(1, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-[389px] flexStart flex-col gap-[14px] cursor-pointer overflow-hidden rounded-[8px] border p-4",
        "border-[#E8E8E8] bg-white hover:bg-gray-50",
        "dark:border-gray-50 dark:bg-gray-50 dark:hover:bg-gray-50"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full w-[30px] h-[30px] aspect-square object-cover"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-base text-[#000000] font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <p className="text-grey font-normal text-[18px] leading-5 tracking-tight italic max-w-[358px]">
        <q>{body}</q>
      </p>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col gap-[50px] items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:29s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:27s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
