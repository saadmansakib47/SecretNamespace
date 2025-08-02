import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-2">Top Stories</h3>
        <ul className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <a href="#" className="text-sm hover:underline">
                This is an important trending story #{i}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-2">Subscribe</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Get the latest posts delivered right to your inbox
        </p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <Button className="w-full">Subscribe</Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-2">Podcasts</h3>
        <ul className="space-y-3">
          {[1, 2].map((i) => (
            <li key={i}>
              <a href="#" className="text-sm hover:underline">
                Latest podcast episode #{i}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}