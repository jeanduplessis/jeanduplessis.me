import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <h2 title="About me">About me</h2>

        <p>
          Hey there 👋, I&apos;m Jean (
          <a
            href="http://ipa-reader.xyz/?text=%CA%92%C9%91%CC%83n%20dy%20pl%C9%9Bsi&voice=Joey"
            target="_blank"
            title="Listen to pronunciation"
            rel="noreferrer noopener"
            className="!no-underline"
          >
            🔊
          </a>
          ).
        </p>

        <p>
          I live with my wife Tracy 💁‍♀️ , quadruplet daughters Grace 👧, Isabella
          👧, Hannah 👧, and Jane 👧 and 3 dogs Cody 🐶, Maddy 🐶, and Max 🐶 in
          beautiful Cape Town, South Africa 🇿🇦 .
        </p>

        <figure>
          <Image
            src="/family@2x.webp"
            alt="Du Plessis family"
            title="Du Plessis family"
            width={400}
            height={267}
            className="rounded-md"
          />
        </figure>

        <p>
          Our family loves the outdoors, whether hiking in the mountains ⛰ or
          spending time at the beach 🏖. You&apos;ll also find me frequenting any
          restaurant with kids&apos; play or entertainment areas to buy me some
          quiet time 🤫.
        </p>

        <p>
          When I can wrestle the TV away from my kids I love watching
          documentaries that teach me something new (I&apos;m a fan of Curiosity
          Stream), standup comedy (my favorites are Trevor Noah and Hasan
          Minhaj), or playing on my PS5 (mostly sports, strategy, story-driven,
          or city simulation games. Not a big fan of FPS games).{" "}
        </p>

        <p>
          I&apos;m a Christian ✝️, striving to live in harmony with God, humans,
          and nature 🌍. In terms of living out my Christianity I try to focus on
          what Jesus asks us to do:{" "}
          <em>
            &quot;A new commandment I give to you, that you ❤️ one another:
            just as I have ❤️ you, you also are to ❤️ one another&quot;
          </em>
          .
        </p>

        <p>
          I strongly dislike social media platforms 🙅‍♂️. You won&apos;t find me
          engaging on any, except LinkedIn, which I deem a necessary tool for
          work purposes as a hiring manager. My dislike stems from social media
          platforms&apos; use of algorithms that focuses on driving engagement
          but has the side-effect of creating echo chambers reinforcing
          people&apos;s views. That, and the pervasive tracking 👁 that they do to
          target you with ads. Humans also seemed to have lost the ability to
          disagree and have civil discourse 💬 on these platforms.
        </p>

        <p>
          I&apos;m an introvert. Meeting new people or being in large unfamiliar
          crowds is draining to me. Yet, you&apos;ll find me more than happy to
          engage in social activity in an environment of friends or colleagues.
          Even so, I find refuge in solitude and choose to recharge in isolation
          from others.
        </p>

        <p>I also like emojis 🤷‍♂️💩.</p>
      </section>
    </>
  );
}
