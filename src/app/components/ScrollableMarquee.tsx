import { Marquee } from "@/components/magicui/marquee";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const features = [
    {
      title: "Ask & Answer Questions",
      description:
        "Post programming-related questions with rich text formatting. Get accurate answers from the developer community. Use code snippets & images for better clarity."
    },
    {
      title: "Upvote, Downvote & Reputation System",
      description:
        "Vote on the best answers. Earn reputation points & badges for contributing. Higher reputation unlocks privileges & trust in the community."
    },
    {
      title: "Search & Discover Solutions",
      description:
        "Quickly find relevant questions using tags."
    },
    {
      title: "Tags & Categories",
      description:
        "Use tags like JavaScript, Python, React, AI, ML. Filter questions by topics of interest. Discover trending tags & discussions."
    },
    {
    title: "Comment on Questions",
    description:
        "Ask for clarifications, provide feedback, or add more context to questions through comments. Keep discussions active and insightful."
    },
    {
      title: "Engage with the Developer Community",
      description:
        "Comment, discuss, and collaborate on answers. Interact with developers to expand your knowledge and improve solutions."
    }
  ];

export default function ScrollableMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:25s]">
        {features.map((feature) => (
            <NeonGradientCard key={feature.title} className="max-w-sm items-center justify-center text-center">
<div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {feature.title}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{feature.description}</blockquote>
          </NeonGradientCard>
        ))}
      </Marquee>
    </div>
  );
}
