import React, { useEffect } from "react";
import Aos from "aos";

const questions = [
  {
    _id: "1",
    question:
      "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
    answer:
      "Access tokens and refresh tokens are used for authentication. Access tokens are obtained after successful login and are used to authenticate and authorize subsequent API requests. Refresh tokens are long-lived tokens that allow getting new access tokens without re-login. Store access tokens in client-side memory or secure storage, while refresh tokens should be stored securely on the server-side.",
  },
  {
    _id: "2",
    question: "Compare SQL and NoSQL databases?",
    answer:
      "SQL databases use structured query language (SQL) and have predefined structures. They're suitable for complex and structured data. NoSQL databases are flexible, handle unstructured or semi-structured data, and scale horizontally.",
  },
  {
    _id: "3",
    question: "What is Express.js? What is Nest.js?",
    answer:
      "Express.js is a popular web framework for Node.js, allowing the creation of web applications and APIs easily. Nest.js is a progressive Node.js framework built on top of Express.js, offering features like dependency injection, module organization, and TypeScript support for efficient and scalable server-side applications.",
  },
  {
    _id: "4",
    question: "What is MongoDB aggregate and how does it work?",
    answer:
      "MongoDB aggregate is a powerful feature for advanced data processing in MongoDB. It allows performing complex queries, transformations, and aggregations on data. Aggregation pipelines are used with stages like $match, $group, $sort, $project to filter, group, and manipulate data. Aggregation enables flexible data analysis and efficient handling of large volumes of data.",
  },
];

const BlogPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section data-aos="fade-right" data-aos-offset="300" className="mt-44 mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((question) => (
            <div
              key={question?._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {question?.question}
              </h2>
              <div className="bg-gray-200 dark:bg-gray-700 h-1 w-16 mb-6"></div>
              <p className="text-gray-700 dark:text-gray-300">{question?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
