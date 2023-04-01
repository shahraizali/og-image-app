import GoogleFonts from "next-google-fonts";

const PhiiluCom = () => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      <div
        className="relative flex flex-col items-center justify-center p-16 text-gray-100 shadow-md gap-14 css-1nztzxj"
        style={{ width: 1200, height: 630 }}
      >
        <div className="max-w-screen-lg space-y-1 text-center">
          <h1
            className={`text-8xl font-bold text-black font-inter`}
          >
            Image Generator
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
