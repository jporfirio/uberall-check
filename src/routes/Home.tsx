import { Form, useNavigation } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import { countries } from "../constants";

export default function Home() {
  const navigation = useNavigation();

  return (
    <div>
      <h2>COMPANY PRESENCE CHECK</h2>

      <Form action="/result">
        <fieldset>
          <Input label="Company Name" name="name" />
          <Select options={countries} label="Country" name="country" />
          <Input label="Street and number" name="street" />
          <Input
            label="Zip code"
            name="zip"
            type="number"
            placeholder="Amazon"
          />

          <button disabled={navigation.state !== "idle"}>Submit</button>
        </fieldset>
      </Form>
    </div>
  );
}
