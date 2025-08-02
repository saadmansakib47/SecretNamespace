import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { SubscribeCTA } from "@/components/SubscribeCTA";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {[...Array(5)].map((_, i) => (
                <ArticleCard key={i} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <SubscribeCTA />
    </div>
  );
}