import * as React from "react";
import { DevicePhoneMobileIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";

const me = {
  firstname: "Jean",
  surname: "du Plessis",
};

export default function Contact() {
  function callMe() {
    const number = Math.floor(
      Math.abs(
        ((Math.pow(Math.PI, 4) * Math.pow(10, 9) - 1) / 3 -
          1984 * 1985 * 2014 +
          3294561174) *
          -1
      )
    );

    window.open("tel:+" + number);
  }

  function mailMe() {
    window.open(
      "mailto:" +
        (
          me.firstname +
          me.surname
            .split(" ")
            .map((x) => x.charAt(0))
            .join("") +
          "@gmail.com"
        ).toLowerCase()
    );

    return false;
  }

  return (
    <>
      <section id="contact" className="mt-4">
        <h2>Contact</h2>
        <div className="max-w-max overflow-x-scroll overflow-y-hidden whitespace-nowrap">
          <div
            className="grid grid-rows-2 grid-cols-2"
            style={{ gridTemplateColumns: "3rem 1fr" }}
          >
            <EnvelopeOpenIcon className="self-start justify-self-center row-span-2 w-8" />
            <pre onClick={mailMe} className="cursor-pointer">
              ((me.firstname + me.surname.split(&apos; &apos;).map((x) ={">"}
              x.charAt(0)).join(&apos;&apos;)) + &quot;@gmail.com&quot;).toLowerCase()
            </pre>
            <small>
              If you want to contact me in a professional context your best bet
              is to contact me through{" "}
              <a href="https://linkedin.com/in/jeandp">LinkedIn</a>.
            </small>
          </div>

          <div
            className="grid grid-rows-2 grid-cols-2"
            style={{ gridTemplateColumns: "3rem 1fr" }}
          >
            <DevicePhoneMobileIcon className="self-start justify-self-center row-span-2 w-8" />
            <pre onClick={callMe} className="cursor-pointer">
              abs((((π^4*10^9-1)/3)-(1984*1985*2014)+3294561174)*-1)
            </pre>
            <small>
              I don&apos;t answer calls from unexpected unknown numbers. Best to text
              me on iMessage, Telegram, or Signal.
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
