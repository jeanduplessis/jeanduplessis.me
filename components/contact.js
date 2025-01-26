import * as React from "react";
import { DevicePhoneMobileIcon, EnvelopeOpenIcon } from "@heroicons/react/20/solid";

const me = {
  firstname: "Jean",
  surname: "du Plessis",
};

export default function Contact() {
  function callMe() {
    window.open("tel:+27832642825");
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
              jeandp@gmail.com
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
              +27 83 264 2825
            </pre>
            <small>
              I don&apos;t answer calls from unexpected unknown numbers. Best to text
              me on iMessage or WhatsApp.
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
