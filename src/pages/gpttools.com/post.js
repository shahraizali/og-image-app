import { useRouter } from "next/router";
import GoogleFonts from "next-google-fonts";

function getFontSize(length) {
  if (length > 32) {
    return `text-7xl`;
  }

  return `text-9xl`;
}

// const twitter = <svg className="inline-block w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204"><path d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0022.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0022.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 00104.08 52.76 50.532 50.532 0 0114.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 01-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 01-25.2 26.16z" fill="#1d9bf0"/></svg>;

// Example URL: http://localhost:3000/phiilu.com?title=Hello%20mein%20Name%20ist%20Florian!&url=https://phiilu.com/hello-world
const PhiiluCom = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const link = searchParams.get("url");

  if (!link) return null;

  const linkURL = new URL(link);
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const readTime = searchParams.get("readTime");
  // url=https://google.com&title=New%20AI%20Tools%202023&background=linear-gradient%2890deg%2C%20%236D9EE7%2012.5%25%2C%20%23ADBFE3%2026.04%25%2C%20%23F0C9B4%2039.06%25%2C%20%23F4BA6E%2056.96%25%2C%20%23FFC178%2070.83%25%2C%20%23E58334%2092.71%25%29%3B&color=%23000000
  const background = searchParams.get("background");
  const color = searchParams.get("color");
  
  console.log(background, color);
  const subcontainerBackground = `.${"css-1nztzxj"} { background: ${background}}`
        

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      <style>
        {subcontainerBackground}
      </style>
      <div
        className="relative flex flex-col items-center justify-center p-16 text-gray-100 shadow-md gap-14 css-1nztzxj "
        style={{ width: 1200, height: 630 }}
      >
        <div className="max-w-screen-lg space-y-1 text-center">
          <h1
            className={`text-8xl font-bold text-black font-inter`}
          >
            {title}
          </h1>
          
        </div>
        <div class="flex justify-between absolute bottom-20 right-20 left-20">
          <p class="text-lg text-black font-bold m-4">BestGPTTools.com</p>
          <p class="text-lg text-black font-bold m-4">@DoTheDev</p>
        </div>
      </div>
    </>
  );
};

export default PhiiluCom;
