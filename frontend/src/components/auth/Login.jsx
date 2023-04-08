import { Label, TextInput, Checkbox, Button } from "flowbite-react";

export default function Login() {
  return (
    <form className="flex flex-col gap-4 mx-40 mt-16 border p-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="example@email.com"
          required={true}
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
