import * as React from "react";
import { Slash } from "lucide-react";
import { cn } from "@/lib/utils";

const Breadcrumb = ({ children, className }: React.HTMLAttributes<HTMLElement>) => (
  <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-sm", className)}>
    {children}
  </nav>
);

const BreadcrumbItem = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center gap-1 text-muted-foreground">{children}</span>
);

const BreadcrumbSeparator = () => <Slash className="h-4 w-4 text-muted-foreground" />;

const BreadcrumbPage = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-foreground">{children}</span>
);

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage };
