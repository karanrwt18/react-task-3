
import { useState } from "react";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !course) {
      alert("Please fill all fields!");
      return;
    }

    setStudent({ name, email, course });

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="React JS">React JS</option>
          <option value="Web Development">Web Development</option>
          <option value="Java">Java</option>
        </select>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {student && (
        <div>
          <h3>Submitted Student Details</h3>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}

export default StudentRegistration;
