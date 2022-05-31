import { Form } from "react-router-dom";
import Input from "../components/Input";

// name, country, street, number, zipcode
export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Form action="/result">
        <fieldset>
          <legend>Form</legend>

          <Input label="Company Name" name="name" />
          <Input label="Country" name="country" />
          <Input label="Street and number" name="street" />
          <Input
            label="Zip code"
            name="zip"
            type="number"
            placeholder="Amazon"
          />

          <button>Submit</button>
        </fieldset>
      </Form>
    </div>
  );
}
