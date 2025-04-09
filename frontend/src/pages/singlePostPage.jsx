import React from "react";
import SecondNavbar from "../components/SecondNavbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SinglePostPage() {
  return (
    <div className="w-7/12 mx-auto  p-6">
      <SecondNavbar />
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img
            src="/blog1-author1.png"
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold text-gray-800">
            Kimberly Mastrangelo
          </span>
        </div>
        <div className="text-sm text-gray-500">
          <span>Oct 26, 2025</span>
          <span className="mx-2">|</span>
          <span>3 min read</span>
        </div>
      </header>

      {/* Post Image */}
      <div className="mb-6 grid grid-cols-1 gap-4">
        <h1 className="text-5xl font-semibold text-gray-900 mb-4">
          The Art of Building a Strong Personal Brand on Social Media
        </h1>
        <p className="text-gray-700 leading-relaxed">
          In today’s digital age, building a strong personal brand on social
          media is more crucial than ever. A compelling personal brand not only
          establishes your credibility and trustworthiness but also opens doors
          to new opportunities, connects you with like-minded individuals, ...
        </p>
        <img src="/blog-details-image1.png" alt="blog-details" />
        <p className="text-gray-700 leading-relaxed">
          In today’s digital age, building a strong personal brand on social
          media is more crucial than ever. A compelling personal brand not only
          establishes your credibility and trustworthiness but also opens doors
          to new opportunities, connects you with like-minded individuals, and
          can even generate income. With billions of users on social media
          platforms, carving out a unique space for yourself may seem daunting,
          but with the right strategies, you can create a brand that resonates.
        </p>
        <h2 className="text-3xl font-semibold">
          Understanding Your Personal Brand
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your personal brand is a reflection of who you are, what you stand
          for, and how you want others to perceive you. Before diving into the
          social media world, take some time to reflect on your values,
          interests, and goals. Ask yourself: What do I want to be known for?
          What are my unique strengths and passions? Who is my target audience?
        </p>

        <p className="text-gray-700 leading-relaxed">
          Your personal brand is a reflection of who you are, what you stand
          for, and how you want others to perceive you. Before diving into the
          social media world, take some time to reflect on your values,
          interests, and goals. Ask yourself: What do I want to be known for?
          What are my unique strengths and passions? Who is my target audience?
        </p>
        <h2 className="text-3xl font-semibold">Choosing the Right Platforms</h2>
        <p className="text-gray-700 leading-relaxed">
          Different social media platforms serve different purposes, and each
          has its own user demographics. Selecting the right platforms for your
          brand is essential. For instance:
        </p>
        <span>
          LinkedIn: is ideal for professionals seeking to build a network within
          their industry.
        </span>
        <span>
          Instagram: is highly visual and works well for brands related to
          lifestyle, fashion, travel, and more.
        </span>
        <span>
          Twitter: is great for sharing quick thoughts, opinions, and joining
          conversations on trending topics.
        </span>
        <span>
          TikTok: has a young, highly engaged audience and is excellent for
          creating entertaining, relatable short videos.
        </span>
        <p className="text-gray-700 leading-relaxed">
          Choose platforms that align with your goals and where your target
          audience is most active. Instead of spreading yourself too thin across
          all platforms, focus on two or three and consistently deliver quality
          content.
        </p>
        <h2 className="text-3xl font-semibold">
          Crafting a Consistent Brand Image
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your brand image is a combination of your visuals, tone, and
          messaging. Consistency across your profile photos, color scheme, and
          typography helps establish a memorable and professional look. Choose
          profile and cover photos that reflect your personality and niche.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Beyond visuals, consider the tone and style of your posts. Are you
          aiming for a formal, professional voice or a casual, friendly vibe?
          Having a consistent tone helps your audience feel connected and
          fosters trust. Remember, consistency is not only about posting
          frequently but also about aligning your visuals, voice, and message.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <img src="/blog-details-image2.png" alt="" />
          <img src="/blog-details-image3.png" alt="" />
        </div>
        <h2 className="text-3xl font-semibold">Creating Valuable Content</h2>
        <p className="text-gray-700 leading-relaxed">
          Content is the heart of personal branding on social media. To build a
          loyal audience, your content should educate, inspire, or entertain.
          Start by creating a content calendar and brainstorming ideas that
          align with your brand’s message. Here are some types of content to
          consider:
        </p>
        <span>
          Educational Content: Share insights, tips, or tutorials related to
          your expertise. Position yourself as a thought leader by delivering
          value.
        </span>
        <span>
          Behind-the-Scenes: Give a glimpse into your life or work process. This
          humanizes your brand and makes you more relatable.
        </span>
        <span>
          Storytelling: Use stories to connect emotionally with your audience.
          Share experiences, challenges, or milestones that have shaped your
          journey.
        </span>
        <span>
          User Engagement: Ask questions, create polls, or invite followers to
          share their experiences. This not only increases engagement but also
          strengthens your community.
        </span>
        <p className="text-gray-700 leading-relaxed">
          Plan a mix of these content types to keep your feed dynamic and
          engaging, and always remember to provide value.
        </p>
        <h2 className="text-3xl font-semibold">
          Leveraging Hashtags and Keywords
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hashtags and keywords can dramatically improve the visibility of your
          content. Research popular and relevant hashtags in your niche and
          incorporate them into your posts. On platforms like Instagram and
          LinkedIn, hashtags help your content reach users who don’t follow you
          yet. However, avoid overloading your posts with too many hashtags—5-10
          carefully selected ones are usually enough.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Using keywords effectively in your profile and posts can also enhance
          discoverability, especially on platforms with search functions like
          LinkedIn and Twitter. Think of words and phrases your audience might
          use to find information in your niche, and strategically incorporate
          them into your bio, captions, and content.
        </p>
        <h2 className="text-3xl font-semibold">
          Staying Authentic and True to Your Brand
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Finally, one of the most important aspects of personal branding is
          authenticity. Your audience can tell when you’re genuine and when
          you’re not, and they’re more likely to engage with a brand that feels
          real. Be transparent about your journey, share your wins and losses,
          and let your true personality shine through. Authenticity fosters
          trust, which is the foundation of any strong brand.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As you grow, you may face pressure to conform to trends or present a
          certain image. Resist the urge to compromise on your values or
          misrepresent yourself. A strong personal brand is built on honesty,
          consistency, and the courage to be yourself.
        </p>
        <div className="gap-4 grid grid-cols-1 border border-gray-300 rounded-md bg-violet-800 mt-6 p-6">
          <span className="text-white text-2xl font-semibold">
            {" "}
            <q>
              Your personal brand is the unique story that only you can tell.
              Own it, share it, and let it shine.
            </q>
          </span>
          <span className="text-white">Henry Fawyel</span>
        </div>
        <span className="text-3xl font-semibold py-4">Blog Comments (2)</span>
        <hr className="border-gray-300" />

        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-4">
            <p className="font-semibold text-2xl">Tags:</p>
            <div className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 ">Social Media</div>
            <div className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700">UI/UX</div>
            <div className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700">Business</div>
          </div>

          <div className="flex items-center gap-4">
           <p className="text-2xl font-semibold"> Socials:</p>
            <FaFacebookF
              size={40}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 "
            />
            <FaInstagram
              size={40} 
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600 duration-700 "
            />
            <FaLinkedinIn
              size={40}
              className="text-gray-500 hover:text-white border border-gray-500 cursor-pointer w-max p-2 rounded-full hover:bg-violet-600 hover:border-violet-600  duration-700 "
            />
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-center justify-between gap-4 mt-6">
          <div className="flex justify-between gap-4 mb-4">
            <div className="flex items-center gap-4 mb-4">
            <img
            src="/comment-author1.png"
            alt="Author"
            className="w-20 h-20 rounded-full mr-3"
          />
          <div className="flex flex-col gap-2">
            <span>Mr. Ana Ritchie</span>
            <span>8/1/2025</span>
          </div>
            </div>
            <div>right</div>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            {/* <span>“This article is exactly what I needed! I've been trying to build my personal brand for a while but was getting stuck. The tips on content creation and engagement are super helpful—thanks for sharing!"</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
