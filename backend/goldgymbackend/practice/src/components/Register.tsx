import "./Register.css"
import { useState } from "react";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    user: "",
    email: "",
    pass: "",
    passRepeat: ""
  });

  const handleFormChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  return (
    <form action="submit.php">
      <div className="inputFields">
        <h1>Create an account for Golden Fitness</h1>

        <label htmlFor="name">Enter your full name:</label>
        <input type="text" name="name" value={form.name} onChange={handleFormChange} />

        <label htmlFor="user">Enter your username:</label>
        <input type="text" name="user" value={form.user} onChange={handleFormChange} />

        <label htmlFor="email">Enter your email:</label>
        <input type="email" name="email" value={form.email} onChange={handleFormChange} />

        <label htmlFor="pass">Enter a password:</label>
        <input type="password" name="pass" value={form.pass} onChange={handleFormChange} />

        <label htmlFor="passagain">Enter your password again:</label>
        <input type="password" name="passRepeat" value={form.passRepeat} onChange={handleFormChange} />

        {form.pass !== form.passRepeat && <p style={{ color: 'red' }}>Passwords don't match!</p>}

        <p style={{ color: '#2466f8', fontSize: '1.5em' }}>
          Your full name is <span style={{ color: 'green' }}>{form.name}</span>, your username is <span style={{ color: 'green' }}>{form.user}</span>, and your email address is <span style={{ color: 'green' }}>{form.email}</span>. Is that correct?
        </p>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}