import AppTitle from "blocks/apps/AppTitle";
import Layout from "blocks/layout";
import AppResult from "components/apps/AppResult";
import AppStep from "components/apps/AppStep";
import Button from "components/buttons/Button";
import NetworkSelector from "components/evm/NetworkSelector";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { NextPage } from "next";
import { name, id } from "./manifest.json";
import { Meta } from "types";
import { useState } from "react";
import { object, string, number } from "yup";
import { ethAddressRegex } from "utils/regex";

type NftQueryModel = {
  address: string;
  type: "address" | "conrtact";
  network: number;
};
const Index: NextPage = () => {
  const meta: Meta = {};
  const [result, setResult] = useState([]);

  const initialValues: NftQueryModel = {
    address: "",
    type: "address",
    network: 0x1
  };
  const schema = object({
    address: string().required("Required").matches(ethAddressRegex, "Invalid address"),
    type: string().required("Required"),
    network: number().required("Required")
  });
  const submit = () => {};
  return (
    <Layout meta={meta}>
      <div className="flex flex-col gap-4">
        <AppTitle name={name} id={id}></AppTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          validateOnBlur
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <AppStep step={1} className="bg-evm">
                <label>
                  <span className="block text-2xl mb-4">Network</span>
                  <NetworkSelector name="network" className="select" />
                  <ErrorMessage name="network">
                    {(msg) => <div className="text-error">{msg}</div>}
                  </ErrorMessage>
                </label>
              </AppStep>
              <AppStep step={2} className="bg-evm">
                <label>
                  <span className="block text-2xl mb-4">Type</span>
                  <Field as="select" name="type" className="select">
                    <option value="address" className="mb-2">
                      Address
                    </option>
                    <option value="contract" className="mb-2">
                      Contract
                    </option>
                  </Field>
                  <ErrorMessage name="method">
                    {(msg) => <div className="text-error">{msg}</div>}
                  </ErrorMessage>
                </label>
              </AppStep>
              <AppStep step={3} className="bg-evm">
                <label className="w-full">
                  <span className="block text-2xl mb-4">Address</span>
                  <Field className="input" as="input" type="value" name="address" />
                  <ErrorMessage name="address">
                    {(msg) => <div className="text-error">{msg}</div>}
                  </ErrorMessage>
                </label>
              </AppStep>
              <AppStep step={4} className="bg-evm">
                <div className="w-full">
                  <Button type="submit" disabled={isSubmitting} className="bg-evm border-evm mb-4">
                    Post
                  </Button>
                </div>
              </AppStep>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};
export default Index;
