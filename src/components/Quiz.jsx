import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', quizTopic: '' });

  const quizzes = [
    { id: 1, name: 'Mental Health Awareness Quiz', topic: 'Mental Health', description: 'Test your knowledge on mental health awareness!' },
    { id: 2, name: 'Eco-Friendly Living Quiz', topic: 'Environmental Awareness', description: 'How eco-friendly are you? Take this quiz to find out!' },
    { id: 3, name: 'General Wellness Quiz', topic: 'Wellness and Health', description: 'Evaluate your knowledge about general wellness!' },
    { id: 4, name: 'Nutrition Knowledge Quiz', topic: 'Nutrition and Diet', description: 'How much do you know about healthy eating and nutrition?' },
  ];

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(quiz);
    setFormData((prevState) => ({ ...prevState, quizTopic: quiz.topic }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`You have joined the "${selectedQuiz.name}" quiz on the topic of ${selectedQuiz.topic}!`);
    // Submit form data or process further (e.g., send to server)
  };

  return (
    <div className="quiz-competitions">
      <h1>Join a Quiz Competition</h1>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <div className="quiz-card" key={quiz.id} onClick={() => handleQuizClick(quiz)}>
            <h3>{quiz.name}</h3>
            <p>{quiz.description}</p>
          </div>
        ))}
      </div>

      {selectedQuiz && (
        <div className="quiz-form-container">
          <h2>Join the "{selectedQuiz.name}" Quiz</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Join Quiz</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Quiz;
