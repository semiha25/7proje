import React, { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import H1 from "./components/H1";
import Input from "./components/Input";

export default function App() {
  const [fiyat, setFiyat] = useState(0);
  const [kar, setKar] = useState(0);
  const [satisFiyati, setSatisFiyati] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setSatisFiyati(fiyat);
  };
  return (
    <>
      <Form>
        <Input value={fiyat} handleChange={setFiyat}>
          Fiyat Girin:
        </Input>
        <br />
        <Input value={kar} handleChange={setKar}>
          Kar oranını Girin:
        </Input>
        <br />
        <Button handleClick={handleClick}>Hesapla</Button>
      </Form>
      <H1>Satış fiyatı: {satisFiyati}</H1>
    </>
  );
}
