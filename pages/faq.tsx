import Link from "next/link";
import { getFont } from "../remotion/font";
import { button } from "../src/components/button";
import { BACKGROUND_COLOR, BASE_COLOR } from "../src/palette";

getFont();

const Faq: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: BACKGROUND_COLOR,
        position: "absolute",
        width: "100%",
        minHeight: "100vh",
        fontFamily: "Jelle",
        color: BASE_COLOR,
        lineHeight: 1.5,
      }}
    >
      <section
        style={{
          maxWidth: 800,
          margin: "auto",
          paddingLeft: 28,
          paddingRight: 28,
        }}
      >
        <br />
        <br />
        <br />
        <Link href="/" passHref>
          <button style={{ ...button, width: "100%" }}>Back to homepage</button>
        </Link>
        <br />
        <br />
        <h1>FAQ</h1>

        <h2>How does it work?</h2>
        <p>
          We call GitHub{"'"}s GraphQL API to fetch and calculate your 2021
          statistics. The video is written in React using Remotion.
        </p>
        <p>
          To display the video, the{" "}
          <a
            target="_blank"
            href="https://remotion.dev/docs/player"
            rel="noreferrer"
            style={{
              color: "black",
            }}
          >
            @remotion/player
          </a>{" "}
          library is being used. When a username is entered for the first time,
          we render the video to an MP4 in an AWS Lambda function and cache it
          in an S3 bucket.
        </p>
        <p>
          Want to make your own programmatic video solution? Check out{" "}
          <a
            style={{
              color: "black",
            }}
            target={"_blank"}
            href="https://remotion.dev"
            rel="noreferrer"
          >
            Remotion!
          </a>
        </p>

        <h2>Is the project open source?</h2>
        <p>
          Not yet, however we will release it as a Remotion reference project in
          2022 when Remotion 3.0 is stable!
        </p>
        <h2>Who is behind GitHub Unwrapped?</h2>
        <p>
          This is a hackathon project by{" "}
          <a
            style={{
              color: "black",
            }}
            target="_blank"
            href="https://twitter.com/JNYBGR"
            rel="noreferrer"
          >
            Jonny Burger
          </a>
          . No affiliation with GitHub.{" "}
        </p>
        <h2>What is the song?</h2>
        <p>
          <a
            style={{
              color: "black",
            }}
            target="_blank"
            href="https://musicvine.com/track/adi-goldstein/the-librarian"
            rel="noreferrer"
          >
            {'"'}The Librarian{'"'} by Adi Goldstein.
          </a>
        </p>
        <h2>Contact</h2>
        <p>
          <a
            style={{
              color: "black",
            }}
            target="_blank"
            href="mailto:hi@jonny.io"
            rel="noreferrer"
          >
            hi@jonny.io
          </a>
        </p>
      </section>
    </div>
  );
};

export default Faq;
