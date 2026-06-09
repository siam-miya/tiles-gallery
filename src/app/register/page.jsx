"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const image = e.target.image.value

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image
    });
    // console.log({ data, error })

    const user = data?.user
    console.log(user)

    if (!data) {
      toast.error(error.message)
    } if (data) {
      toast.success(`Successfully registered! Welcome ${user?.name}`)
      router.push("/login")
    }
 
  }

  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4 mt-5 mb-5">
      <Form
        className="flex w-full max-w-md flex-col gap-5 rounded-xl bg-white p-6 shadow-lg border border-gray-100"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="name"
          type="text"
        >
          <Label>Your Name</Label>
          <Input placeholder="inter your name" />
          <FieldError />
        </TextField>

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
          name="image"
          type="text"
        >
          <Label>Photo URL</Label>
          <Input placeholder="inter your photo URL" />
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
      </Form>
    </div>
  )
}

export default Register
