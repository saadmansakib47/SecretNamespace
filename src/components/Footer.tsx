export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Network</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">Sister Site 1</a></li>
              <li><a href="#" className="hover:underline">Sister Site 2</a></li>
              <li><a href="#" className="hover:underline">Sister Site 3</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get the latest posts delivered right to your inbox
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md border px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 SecretNamespace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}