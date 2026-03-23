import React from "react";

export default function About() {
  return (
    <div className="w-full mt-10 flex flex-col space-y-6 px-4 md:px-12">
      
      {/* Heading */}
      <h1 className="w-full text-xl md:text-3xl font-bold text-black text-center md:text-left leading-snug">
        TechMart — #1 Online Marketplace for Technology
      </h1>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto md:mx-0 text-sm md:text-base flex flex-col space-y-4 text-gray-700 font-normal leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae architecto ut accusamus commodi harum similique amet temporibus quidem quia maxime distinctio nostrum exercitationem, deserunt perferendis, itaque quos. Fugiat, excepturi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil quam, excepturi neque esse rem officia possimus vero voluptatem quisquam in at sit, ad aperiam vitae doloribus molestias nisi. Veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti asperiores inventore consequatur perferendis fugit sit, cum qui cupiditate est voluptatum autem veniam possimus reprehenderit architecto amet? Quos, non quis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, animi! In fugiat quaerat facere facilis excepturi molestias tempore vero soluta incidunt earum molestiae suscipit minima quis, porro aspernatur aliquid voluptate?
        </p>

        {/* Call to action */}
        <a
          href=""
          className="inline-block mt-2 text-green-600 font-medium hover:underline text-base md:text-lg"
        >
          View All
        </a>
      </div>
    </div>
  );
}