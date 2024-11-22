import React from 'react';

export const About = () => {
  let myAbout = {
   minHeight: "80vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-4 px-3 px-md-5" style={myAbout}>
     
      <div className="mb-4">
        <h3 className="text-primary display-6">About Us</h3>
        <p className="text-muted">
          Welcome to My Todo App, your ultimate productivity partner! We understand how overwhelming it can be to manage your daily tasks, deadlines, and responsibilities. That’s why we created an intuitive and user-friendly solution to help you stay organized, focused, and stress-free.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-primary display-6">How It Works</h3>
        <p className="text-muted">
          1. Add a new task with a title and a brief description. <br />
          2. View all your tasks in an organized list. <br />
          3. Mark tasks as completed or delete them when no longer needed. <br />
          4. Your task list is automatically saved locally, ready for your next session. <br />
        </p>
      </div>
    </div>
  );
};

export default About;
