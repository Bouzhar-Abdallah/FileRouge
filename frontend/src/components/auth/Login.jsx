import React from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/login/loginSlice";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.login.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-5 md:mx-40 mt-16 border p-5">
        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="example@email.com"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
        placeholder="password"
        id="password" 
        type="password" 
        required={true} 
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
