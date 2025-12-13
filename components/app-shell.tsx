"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ActivitySquare,
  Archive,
  BookOpen,
  Boxes,
  CheckSquare,
  ClipboardList,
  FileOutput,
  Image as ImageIcon,
  LayoutDashboard,
  Palette,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";

const nav = [
  {
    label: "Workspace",
    items: [
      { title: "Overview", href: "/", icon: LayoutDashboard },
      { title: "Onboarding", href: "/onboarding", icon: Archive },
      { title: "Products", href: "/products", icon: Boxes },
      { title: "Brand Kit", href: "/brand-kit", icon: Palette },
    ],
  },
  {
    label: "Creative",
    items: [
      { title: "Claim Policies", href: "/claim-policies", icon: ShieldCheck },
      { title: "Campaigns", href: "/campaigns", icon: Sparkles },
      { title: "Jobs", href: "/jobs", icon: ClipboardList },
      { title: "Variants", href: "/variants", icon: ImageIcon },
      { title: "Exports", href: "/exports", icon: FileOutput },
    ],
  },
  {
    label: "Governance",
    items: [
      { title: "Activity", href: "/activity", icon: ActivitySquare },
      { title: "Team", href: "/team", icon: Users },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": { title: "Overview", description: "Guide work from intake to export with guardrails." },
  "/onboarding": { title: "Onboarding", description: "Connect sources and define rails before generating." },
  "/products": { title: "Products", description: "Upload images and metadata to start generating." },
  "/brand-kit": { title: "Brand Kit", description: "Keep brand assets and tone consistent across creatives." },
  "/claim-policies": { title: "Claim Policies", description: "Codify what can and cannot be said in ads." },
  "/campaigns": { title: "Campaigns", description: "Batch prompts and select products to launch jobs." },
  "/jobs": { title: "Jobs", description: "Monitor and trace creative generation runs." },
  "/variants": { title: "Variants", description: "Review outputs against brand and policy rails." },
  "/exports": { title: "Exports", description: "Assemble channel-ready asset packs." },
  "/activity": { title: "Activity", description: "Audit trail for decisions and system actions." },
  "/team": { title: "Team", description: "Control collaborator roles and approvals." },
  "/settings": { title: "Settings", description: "Workspace defaults, integrations, and notifications." },
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const currentMeta = useMemo(() => pageMeta[pathname] ?? { title: "", description: "" }, [pathname]);

  const handleNavigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-8 pt-6 lg:px-8">
          <aside className="hidden w-64 flex-none lg:block">
            <div className="sticky top-6 space-y-6 rounded-3xl border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
                <div>
                  <p className="text-sm font-semibold">Creative Ad Maker</p>
                  <p className="text-xs text-muted-foreground">Safety-first workspace</p>
                </div>
                <Badge variant="muted">Rails on</Badge>
              </div>
              <nav className="space-y-4">
                {nav.map((group) => (
                  <div key={group.label} className="space-y-2">
                    <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {group.label}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition hover:bg-muted",
                              active && "bg-muted text-foreground"
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            <Icon className="h-4 w-4" />
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            <header className="sticky top-0 z-30 -mx-4 mb-2 border-b bg-background/80 px-4 py-3 backdrop-blur lg:mx-0 lg:rounded-3xl lg:border lg:px-6 lg:py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold">{currentMeta.title}</h1>
                    <Badge variant="muted">Rails enforced</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{currentMeta.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex">
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search (⌘K)"
                      className="w-56"
                      aria-label="Search"
                      onFocus={() => setOpen(true)}
                    />
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden" onClick={() => setOpen(true)} aria-label="Open search">
                        <Search className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Search and jump</TooltipContent>
                  </Tooltip>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" className="rounded-2xl">New</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52">
                      <DropdownMenuLabel>Start</DropdownMenuLabel>
                      <DropdownMenuItem onSelect={() => toast.info("Connect a storefront to begin")}>Connect storefront</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => toast.info("Upload a product image")}>Upload product</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onSelect={() => toast.info("Draft a campaign once guardrails are ready")}>Campaign</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden" aria-label="Open navigation">Menu</Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold">Creative Ad Maker</p>
                            <p className="text-xs text-muted-foreground">Navigation</p>
                          </div>
                          <Badge variant="muted">Rails</Badge>
                        </div>
                        <Separator />
                        <nav className="space-y-4">
                          {nav.map((group) => (
                            <div key={group.label} className="space-y-2">
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{group.label}</p>
                              <div className="space-y-1">
                                {group.items.map((item) => {
                                  const active = pathname === item.href;
                                  const Icon = item.icon;
                                  return (
                                    <Button
                                      key={item.href}
                                      variant={active ? "secondary" : "ghost"}
                                      className="w-full justify-start gap-2"
                                      onClick={() => handleNavigate(item.href)}
                                    >
                                      <Icon className="h-4 w-4" />
                                      {item.title}
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </nav>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>

            <div className="space-y-6">{children}</div>
          </main>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Jump to page or action" />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {nav.flatMap((group) => group.items).map((item) => (
                <CommandItem key={item.href} value={item.title} onSelect={() => handleNavigate(item.href)}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Quick actions">
              <CommandItem onSelect={() => toast.info("Connect storefront")}>Connect storefront</CommandItem>
              <CommandItem onSelect={() => toast.info("Upload product to begin")}>Upload product</CommandItem>
              <CommandItem onSelect={() => toast.info("Draft a prompt")}>Draft prompt</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <Toaster position="bottom-right" />
      </div>
    </TooltipProvider>
  );
}
