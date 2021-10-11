import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <h2 title="About me">About</h2>
        <p>
          I live with my wife{" "}
          <span className="text-lg" title=":woman-superhero:">
            🦸‍♀
          </span>
          , quadruplet daughters{" "}
          <span className="text-lg tracking-widest" title=":girls:">
            💁‍♀️💁‍♀️💁‍♀️💁‍♀️
          </span>{" "}
          and 3 dogs{" "}
          <span className="text-lg tracking-widest" title=":dog:">
            🐶🐶🐶
          </span>{" "}
          in beautiful Cape Town, South Africa{" "}
          <span className="text-lg" title=":south-africa:">
            🇿🇦
          </span>
          .
        </p>

        <figure>
          <Image
            src="/family@2x.png"
            alt="Du Plessis family"
            title="Du Plessis family"
            width={400}
            height={267}
            className="rounded-md"
          />
        </figure>

        <p>
          I&apos;m a Christian, striving to live in harmony with God, humans, and
          nature. While I grew up in a conservative Christian context, I don&apos;t
          identify with any specific denomination. Instead, I focus on what
          Jesus asks us to do: <em>&quot;A new commandment I give to you, that you love one
          another: just as I have loved you, you also are to love one another&quot;</em>.
        </p>

        <p>
          I strongly dislike social media platforms, so you won&apos;t find me on any
          except LinkedIn, which I deem a necessary tool for work purposes. My
          dislike stems from social media platforms&apos; use of algorithms that
          focuses on driving engagement but has the side-effect of creating echo
          chambers reinforcing people&apos;s views. Humans also seemed to have lost
          the ability to disagree and have civil discourse on these platforms.
        </p>

        <p>
          I&apos;m an introvert in the sense that meeting new people or being in
          large crowds is draining to me. Yet, you&apos;ll find me more than happy to
          engage in social activity in an environment of friends or colleagues.
          Even so, I find refuge in solitude and choose to recharge in isolation
          from others.
        </p>
      </section>
    </>
  );
}
