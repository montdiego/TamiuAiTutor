export default function Home() {
  return (
    <div>
      <div className="mt-3 my-10  p-10 h-screen ">
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div className="">
            <img src="./Logo_Transparent.png" />
          </div>
          <div className=" text-theme-background text-6xl font-bold mt-[30%] text-center stack-sans-notch-regular">
            Your Trustful <h1 className="inline text-theme-foreground">AI Advising</h1> Coacher
          </div>
        </div>
      </div>
    </div>
  );
}
