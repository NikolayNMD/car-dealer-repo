import VehicleWrap from "./components/VehicleWrap";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-around">
      <Header />
      <VehicleWrap />
    </main>
  );
}
