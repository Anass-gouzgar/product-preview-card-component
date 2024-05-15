import dynamic from "next/dynamic";

const Image = dynamic(()=> import('./components/image/index.jsx')),
Card = dynamic(()=> import('./components/card/index.jsx'));


export default function Home() {
  return (
    <main className="bg-[#F3EBE4] h-screen flex justify-center items-center p-3 md:p-0">
      <div className="flex flex-col md:flex md:flex-row " >
              <Image />
      <Card />
      </div>

    </main>
  );
}
