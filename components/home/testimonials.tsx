import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

const testimonialsData: TestimonialProps[] = [
  {
    quote: "PM101 to Pro has been a game-changer for our team. The structured courses and practical tools have significantly improved our project delivery timelines and team collaboration.",
    author: "Alice Johnson",
    title: "Lead Project Manager",
    company: "Tech Solutions Inc.",
    avatar: "/avatars/alice.png",
  },
  {
    quote: "I was struggling to manage complex projects until I found PM101 to Pro. The insights and methodologies shared are invaluable, and I've seen a direct impact on my productivity and success.",
    author: "Bob Williams",
    title: "Senior Product Manager",
    company: "Innovate Corp.",
    avatar: "/avatars/bob.png",
  },
  {
    quote: "The platform's intuitive design and comprehensive content make learning project management enjoyable and effective. Highly recommended for anyone looking to advance their PM career.",
    author: "Charlie Brown",
    title: "Project Coordinator",
    company: "Global Enterprises",
    avatar: "/avatars/charlie.png",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
          <div className="flex items-center mt-4">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}, {testimonial.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
