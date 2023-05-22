import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

const gallery = [
  {
    _id: 1,
    title: "Toy 1",
    shortDescription:
      "Description of Toy 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photURL:
      "https://media.istockphoto.com/id/1479074596/photo/latin-woman-with-virtual-reality-glasses-with-toy-gun-inside-a-computer-game.jpg?s=2048x2048&w=is&k=20&c=qLWIHRvEinpr-_BQz3AiVaTnnIKw7nvKeUnupqdoej4=",
  },
  {
    _id: 2,
    title: "Toy 2",
    shortDescription:
      "Description of Toy 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photURL:
      "https://media.istockphoto.com/id/1479074596/photo/latin-woman-with-virtual-reality-glasses-with-toy-gun-inside-a-computer-game.jpg?s=2048x2048&w=is&k=20&c=qLWIHRvEinpr-_BQz3AiVaTnnIKw7nvKeUnupqdoej4=",
  },
  {
    _id: 3,
    title: "Toy 3",
    shortDescription:
      "Description of Toy 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photURL:
      "https://media.istockphoto.com/id/1479074596/photo/latin-woman-with-virtual-reality-glasses-with-toy-gun-inside-a-computer-game.jpg?s=2048x2048&w=is&k=20&c=qLWIHRvEinpr-_BQz3AiVaTnnIKw7nvKeUnupqdoej4=",
  },
  {
    _id: 4,
    title: "Toy 4",
    shortDescription:
      "Description of Toy 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photURL:
      "https://media.istockphoto.com/id/1479074596/photo/latin-woman-with-virtual-reality-glasses-with-toy-gun-inside-a-computer-game.jpg?s=2048x2048&w=is&k=20&c=qLWIHRvEinpr-_BQz3AiVaTnnIKw7nvKeUnupqdoej4=",
  },
  {
    _id: 5,
    title: "Toy 5",
    shortDescription:
      "Description of Toy 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photURL:
      "https://media.istockphoto.com/id/1479074596/photo/latin-woman-with-virtual-reality-glasses-with-toy-gun-inside-a-computer-game.jpg?s=2048x2048&w=is&k=20&c=qLWIHRvEinpr-_BQz3AiVaTnnIKw7nvKeUnupqdoej4=",
  },
  {
    _id: 6,
    title: "Toy 6",
    shortDescription:
      "Description of Toy 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photURL:
      "https://media.istockphoto.com/id/1479074596/photo/latin-woman-with-virtual-reality-glasses-with-toy-gun-inside-a-computer-game.jpg?s=2048x2048&w=is&k=20&c=qLWIHRvEinpr-_BQz3AiVaTnnIKw7nvKeUnupqdoej4=",
  },
];

const GallerySection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-offset="300"
      className="py-24 bg-white dark:bg-gray-900 text-neutral dark:text-white"
    >
      <div className="container mx-auto px-3">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Gallery</h2>
          <p className="mt-2 text-lg">Check out our exciting collection of toys in action!</p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              className="bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 rounded-lg shadow-md dark:shadow-slate-600"
              key={item?._id}
            >
              <img
                src={item?.photURL}
                alt={item?.title}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium">{item?.title}</h3>
                <p className="mt-2">{item?.shortDescription}</p>
                <button
                  onClick={() => navigate(`/toys/${item?._id}`)}
                  className="btn btn-accent px-6 sm:px-7 mt-4 tracking-widest"
                >
                  View Toy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
