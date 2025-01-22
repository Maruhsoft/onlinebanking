import React from 'react';

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          130 years of Leading Banking Services
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            FirstBank has been setting the pace in banking services since 1894. As Nigeria's premier and leading financial services provider, FirstBank has distinguished itself as a brand of strength and dynamism, with a rich heritage of excellent customer service and innovative banking solutions.
          </p>
          <p>
            With over 750 business locations and more than 150,000 Banking Agents spread across 99% of the 774 Local Government Areas in Nigeria, FirstBank provides a comprehensive range of retail and corporate financial services through its various subsidiaries.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">FirstBank at 130</h3>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            alt="130 Years Anniversary"
            className="rounded-lg mb-4"
          />
          <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
            Learn More
          </button>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our History</h3>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            alt="Historical Building"
            className="rounded-lg mb-4"
          />
          <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
            Learn More
          </button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Networked across Africa, Europe and Asia
        </h2>
        <p className="text-gray-700">
          As a leading player in the international banking landscape, FirstBank has established a strong presence across key markets in Africa, Europe, and Asia. Our extensive network includes subsidiaries in the Democratic Republic of Congo, Ghana, The Gambia, Guinea, Sierra Leone, and the UK, as well as a Representative Office in Beijing, China.
        </p>
      </section>
    </div>
  );
};

export default AboutContent;