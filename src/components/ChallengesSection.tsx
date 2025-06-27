import React from 'react';

const ChallengesSection = () => {
  const challenges = [
    {
      title: "Unpredictable Rain",
      detail: "Climate change has made weather patterns increasingly erratic. A single unexpected storm or drought can wipe out an entire season's investment.",
      image: "/rain.avif"
    },
    {
      title: "Pests and Crop Diseases",
      detail: "New pests and diseases emerge constantly, often requiring expensive treatments that small farmers cannot afford.",
      image: "/pests.avif"
    },
    {
      title: "Debt Pressure",
      detail: "Most farmers operate on borrowed money for seeds, fertilizers, and equipment. When crops fail, debt becomes overwhelming.",
      image: "/debtPressure.png"
    },
    {
      title: "Health Risks",
      detail: "Physical strain, exposure to chemicals, and lack of healthcare access create serious health challenges for farming families.",
      image: "/healthrisk.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What does a farmer face in
            <span className="text-primary-600"> one season?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Behind every harvest lies a story of resilience against countless challenges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="group transition-all duration-300 ease-in-out hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3
                    className="text-white font-bold uppercase"
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: '35px',
                      lineHeight: '40px',
                      letterSpacing: '2px',
                    }}
                  >
                    {challenge.title}
                  </h3>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 text-base leading-relaxed mb-4">{challenge.detail}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;