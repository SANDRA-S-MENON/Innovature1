import React, { useState } from 'react';

const AwarenessClasses = () => {
  const [rating, setRating] = useState({});
  
  const classes = [
    {
      id: 1,
      title: "Environmental Impact of Paper Cups",
      description: "Learn about the environmental harm caused by disposable paper cups and their long-term impact on the planet.",
      duration: "45 minutes",
    },
    {
      id: 2,
      title: "Health Risks of BPA in Paper Cups",
      description: "Understand the health hazards of bisphenol A (BPA) in paper cups and its effect on human health.",
      duration: "40 minutes",
    },
    {
      id: 3,
      title: "Alternative Solutions to Paper Cups",
      description: "Discover eco-friendly alternatives to disposable paper cups and how they contribute to a sustainable future.",
      duration: "30 minutes",
    },
    {
      id: 4,
      title: "Recycling Paper Cups: Myths and Realities",
      description: "Debunk the common myths about recycling paper cups and learn how they are processed in recycling systems.",
      duration: "35 minutes",
    },
    {
      id: 5,
      title: "Economic Impact of Disposable Paper Cups",
      description: "Examine the financial consequences of using disposable paper cups for businesses and the economy.",
      duration: "50 minutes",
    },
    {
      id: 6,
      title: "Cultural Shift Away from Disposable Paper Cups",
      description: "Learn how different cultures are moving towards sustainable alternatives and reducing paper cup consumption.",
      duration: "40 minutes",
    },
    {
      id: 7,
      title: "Government Policies on Disposable Paper Cups",
      description: "A deep dive into the regulations and policies aimed at reducing the use of disposable paper cups in various regions.",
      duration: "55 minutes",
    },
    {
      id: 8,
      title: "The Carbon Footprint of Paper Cups",
      description: "Explore the carbon footprint associated with manufacturing and disposing of disposable paper cups.",
      duration: "60 minutes",
    },
    {
      id: 9,
      title: "Educating the Next Generation About Paper Cups",
      description: "A workshop aimed at schools to educate children on the impact of disposable paper cups on the environment.",
      duration: "30 minutes",
    },
    {
      id: 10,
      title: "Innovations in Sustainable Paper Cup Manufacturing",
      description: "Learn about innovative manufacturing techniques that aim to make paper cups more environmentally friendly.",
      duration: "45 minutes",
    },
  ];

  const handleJoin = (classId) => {
    alert(`You have joined the class with ID: ${classId}`);
  };

  const handleRating = (classId, rate) => {
    setRating({ ...rating, [classId]: rate });
    alert(`You rated Class ID: ${classId} with a rating of ${rate}`);
  };

  return (
    <div>
      <h1>Awareness Classes on Disposable Paper Cups</h1>
      <div className="classes-container">
        {classes.map((classItem) => (
          <div key={classItem.id} className="class-card">
            <h2>{classItem.title}</h2>
            <p>{classItem.description}</p>
            <p><strong>Duration:</strong> {classItem.duration}</p>

            <div className="join-button">
              <button onClick={() => handleJoin(classItem.id)}>Join Class</button>
            </div>

            <div className="rating">
              <h3>Rate this Class:</h3>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleRating(classItem.id, rate)}
                  style={{
                    backgroundColor: rating[classItem.id] === rate ? 'green' : 'gray',
                    color: 'white',
                    margin: '5px'
                  }}
                >
                  {rate}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwarenessClasses;
