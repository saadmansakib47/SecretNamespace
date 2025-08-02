import { CalendarDays, MessageSquare } from "lucide-react";

export function ArticleCard() {
  return (
    <article className="group flex flex-col space-y-2">
      <img
        src="https://placehold.co/800x400"
        alt="Article thumbnail"
        className="rounded-md border bg-muted transition-colors"
      />
      <h2 className="text-2xl font-extrabold">
        <a href="#" className="hover:underline">
          This is an example article title that could be quite long
        </a>
      </h2>
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <span>By Author Name</span>
        <span className="flex items-center">
          <CalendarDays className="mr-1 h-3 w-3" />
          May 15, 2024
        </span>
        <span className="flex items-center">
          <MessageSquare className="mr-1 h-3 w-3" />
          24 comments
        </span>
      </div>
      <p className="text-muted-foreground">
        This is a brief summary of the article content that gives readers an idea
        of what to expect when they click through to read the full piece.
      </p>
    </article>
  );
}