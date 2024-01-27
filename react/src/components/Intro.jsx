import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/Peter.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Money talks, but all mine says is <span className="accent">goodbye.</span>
        </h1>
        <p>
          Don't be like me. Start your journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro