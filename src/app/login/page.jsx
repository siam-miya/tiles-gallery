"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {

  const onSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"

    });
    // console.log({ data, error })

    const user = data?.user
    console.log(user)

    if (!data) {
      toast.error(error.message)
    } if (data) {
      toast.success(`Successfully login Welcome to home ${user?.name}`)
    }
  }

  const handleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    })
  }

  return (
    <div>
      <div className="flex min-h-[50vh] items-center justify-center bg-gray-50 px-4">
        <Form
          className="flex w-full max-w-md flex-col gap-5 rounded-xl bg-white p-6 shadow-lg border border-gray-100"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Checkbox />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <Button onClick={handleSignIn} className={"w-full"}><FaGoogle />SignUp With Google</Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
