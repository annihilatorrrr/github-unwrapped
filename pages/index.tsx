import Head from "next/head";
import { useRouter } from "next/router";
import { lighten } from "polished";
import React, { useCallback, useState } from "react";
import { Decoration } from "../remotion/Decoration";
import { getFont } from "../remotion/font";
import { button } from "../src/components/button";
import { BACKGROUND_COLOR, BASE_COLOR } from "../src/palette";
import { useWindowSize } from "../src/use-window-size";

const input = (): React.CSSProperties => ({
  padding: 16,
  borderRadius: 8,
  fontSize: 28,
  fontFamily: "Jelle",
  textAlign: "center",
});

const container: React.CSSProperties = {
  height: "100%",
  width: "100%",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};

const abs: React.CSSProperties = {
  height: "100%",
  width: "100%",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  backgroundColor: BACKGROUND_COLOR,
};

const headerStyle: React.CSSProperties = {
  maxWidth: 800,
  paddingLeft: 20,
  paddingRight: 20,
  textAlign: "center",
};

const h1: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: 48,
  color: BASE_COLOR,
  fontFamily: "Jelle",
};

const paragraph: React.CSSProperties = {
  color: BASE_COLOR,
  lineHeight: 1.5,
  fontFamily: "Jelle",
};

getFont();

const buttonStyle = (disabled: boolean): React.CSSProperties =>
  disabled
    ? {
        ...button,
        backgroundColor: lighten(0.6, BASE_COLOR),
        borderBottomColor: lighten(0.4, BASE_COLOR),
      }
    : button;

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();

  const onSubmit: React.FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (username.trim() === "") {
        return;
      }
      setLoading(true);
      router.push(`/${username}`);
    },
    [router, username]
  );

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();
      setUsername(e.target.value);
    },
    []
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <div style={abs}>
        <Decoration
          start={[1, 0.5]}
          end={[0.7, 0]}
          width={size.width}
          height={size.height}
        ></Decoration>
        <Decoration
          start={[0, 0.55]}
          end={[0.5, 1]}
          width={size.width}
          height={size.height}
        ></Decoration>
        <div style={container}>
          <header style={headerStyle}>
            <div style={h1}>Your coding year in review</div>
            <p style={paragraph}>
              Get a personalized video of your Github activity in 2021. Type
              your username to get started!
            </p>
            <br />

            <form onSubmit={onSubmit}>
              <input
                value={username}
                onChange={onChange}
                type={"text"}
                disabled={loading}
                autoComplete="none"
                name="github_username"
                style={input()}
                className="github-username"
                placeholder="GitHub username"
              ></input>
              <br />
              <br />
              <input
                style={buttonStyle(loading)}
                type="submit"
                value={loading ? "Getting your Wrapped..." : "Get your Wrapped"}
              />
            </form>
          </header>
        </div>
      </div>
    </div>
  );
}
