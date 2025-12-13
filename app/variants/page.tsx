import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Eye, LayoutGrid, List, MoreHorizontal } from "lucide-react";

export default function VariantsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Tabs defaultValue="grid">
          <TabsList>
            <TabsTrigger value="grid"><LayoutGrid className="mr-2 h-4 w-4" /> Grid</TabsTrigger>
            <TabsTrigger value="list"><List className="mr-2 h-4 w-4" /> List</TabsTrigger>
          </TabsList>
          <TabsContent value="grid" className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="space-y-3 p-4">
                  <Skeleton className="h-40 w-full rounded-2xl" />
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="muted">Pending</Badge>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-xl"><Eye className="mr-2 h-4 w-4" /> Preview</Button>
                      </SheetTrigger>
                      <SheetContent side="right">
                        <SheetHeader>
                          <SheetTitle>Variant preview</SheetTitle>
                        </SheetHeader>
                        <div className="space-y-4 py-4">
                          <Skeleton className="h-48 w-full rounded-2xl" />
                          <Textarea placeholder="Review notes" />
                          <Badge variant="outline">Brand kit: Pending</Badge>
                          <Badge variant="outline">Policy: Pending</Badge>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="list" className="mt-4 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-xl" />
                    <div>
                      <p className="text-sm font-semibold">Variant {i + 1}</p>
                      <p className="text-xs text-muted-foreground">Awaiting review</p>
                    </div>
                  </div>
                  <Badge variant="muted">Pending</Badge>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-xl"><MoreHorizontal className="h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Approve selected</DropdownMenuItem>
            <DropdownMenuItem>Reject selected</DropdownMenuItem>
            <DropdownMenuItem>Request revision</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Review rubric</CardTitle>
          <CardDescription>Score variants before export.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
            <span>Brand kit alignment</span>
            <Badge variant="muted">Pending</Badge>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
            <span>Claim safety</span>
            <Badge variant="muted">Pending</Badge>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
            <span>Channel fit</span>
            <Badge variant="muted">Pending</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
