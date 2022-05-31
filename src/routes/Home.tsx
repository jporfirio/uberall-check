import { Form } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import { countries } from "../constants";

// name, country, street, number, zipcode
export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Form action="/result">
        <fieldset>
          <legend>Form</legend>

          <Input label="Company Name" name="company" />
          <Select options={countries} label="Country" name="country" />
          <Input label="Street and number" name="street" />
          <Input
            label="Zip code"
            name="zipcode"
            type="number"
            placeholder="Amazon"
          />

          <button>Submit</button>
        </fieldset>
      </Form>
    </div>
  );
}
