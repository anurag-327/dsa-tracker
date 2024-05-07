import Footer from "@/components/Footer";
import Header from "@/components/Header";
import List from "@/components/List";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <List />
      <Footer />
    </main>
  );
}
