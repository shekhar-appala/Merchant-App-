// components/LoginForm.js
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState();
  const [editform, seteditform] = useState(false)
  const [Name, setName] = useState("")
  const [num, setnum] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://api.aroundme.co.in/login/businesslogin/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const Data = await res.json();

      setdata(Data);

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      //   alert('Login successful!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    const updateData = {
        "name": Name,
        "whatsapp_no": num
    };
   
    try {
      const res = await fetch('https://api.aroundme.co.in/businessapp/BusinessOwner/edit/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data?.access}`, // Send token in Authorization header
        },
        body: JSON.stringify(updateData),
      });

      const responseData = await res.json(); // Rename this variable

      if (!res.ok) {
        throw new Error(responseData.message || 'Update failed');
      }

      setdata((prevData) => ({
        ...prevData,
        Business_Owner: {
          ...prevData.Business_Owner,
          ...updateData // Apply the updates to the nested fields
        }
      }));
      
      
      seteditform(false); 

    } catch (err) {
      setError(err.message);
    }
};

//   console.log(data);
  return (
    <>
      {data ? (
        <div>
            <h4>{data.message}</h4>
            <div className="text-center">
                <h1>Profile details</h1>
                <p><b>Name</b>: {data?.Business_Owner?.name}</p>
                <p><b>Mobile No</b>: {data?.Business_Owner?.mobile_no}</p>
                <p><b>Whatsapp No</b>: {data?.Business_Owner?.whatsapp_no}</p>
                <p><b>Email</b>: {data?.Business_Owner?.email_optional}</p>

                <button className="btn btn-info" onClick={()=>seteditform(true)}>Edit profile</button>

                {editform ? (<form className="text-center container w-50" onSubmit={handleUpdate}>
          <h1>Edit Profile</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div class="form-group row mb-3  ">
            <div class="col-6">
              <label for="username" class=" col-form-label">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                required
                value={Name}
                id="username"
                placeholder="Name"
              />
            </div>

            <div class="col-6">
              <label for="num" class=" col-form-label">
                Whatsapp No
              </label>
              <input
                type="tel"
                value={num}
                onChange={(e) => setnum(e.target.value)}
                required
                class="form-control"
                id="num"
                placeholder="Whatsapp No"
              />
            </div>
          </div>

          <div class="form-group ">
            <div>
              <button
                type="submit"
                class="btn btn-primary"                
              >
               Update
              </button>
            </div>
          </div>
        </form>):''}
            </div>
        </div>
      ) : (
        <form className="text-center container w-50" onSubmit={handleSubmit}>
          <h1>User Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div class="form-group row mb-3  ">
            <div class="col-6">
              <label for="username" class=" col-form-label">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                class="form-control"
                required
                value={username}
                id="username"
                placeholder="Username"
              />
            </div>

            <div class="col-6">
              <label for="inputPassword3" class=" col-form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="form-group ">
            <div>
              <button
                type="submit"
                class="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
