import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { register } from "../../features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password, repeatPassword, name}));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-40 mt-16 border p-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Full Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="abdallah bouzhar"
          required={true}
          shadow={true}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@mail.com"
          required={true}
          shadow={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          required={true}
          shadow={true}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree">
          I agree with the
          <a
            href="/forms"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
  );
}
