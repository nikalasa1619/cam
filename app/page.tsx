import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronRight, Plug, Upload, Workflow } from "lucide-react";

const pipeline = [
  { title: "Connect", description: "Pull product imagery or upload", icon: Plug },
  { title: "Guardrails", description: "Brand + claims in force", icon: Workflow },
  { title: "Generate", description: "Prompt-driven variants", icon: Upload },
  { title: "Review", description: "Score vs rails", icon: ChevronRight },
  { title: "Export", description: "Package by channel", icon: ChevronRight },
];

export default function OverviewPage() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <div className="space-y-6 xl:col-span-2">
        <Card className="bg-card/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Get started</CardTitle>
                <CardDescription>Upload a product hero image or connect your Amazon store.</CardDescription>
              </div>
              <Badge variant="muted">Empty state</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Alert className="space-y-3">
              <AlertTitle>Nothing queued</AlertTitle>
              <AlertDescription>
                Connect a storefront or upload a product image to enable generation. This ensures claims and brand rails can be enforced from the start.
              </AlertDescription>
              <div className="flex flex-wrap gap-2">
                <Button className="rounded-2xl">Connect storefront</Button>
                <Button variant="outline" className="rounded-2xl">
                  Upload image
                </Button>
              </div>
            </Alert>
            <div className="space-y-4 rounded-3xl border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Pipeline</p>
                  <p className="text-xs text-muted-foreground">Follow the rails from intake to export.</p>
                </div>
                <Badge variant="muted">0 progress</Badge>
              </div>
              <div className="space-y-3">
                {pipeline.map((step, idx) => (
                  <div key={step.title} className="flex items-center gap-3 rounded-2xl border bg-muted/40 px-3 py-2">
                    <step.icon className="h-4 w-4" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    <Badge variant="outline">Step {idx + 1}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent activity</CardTitle>
              <CardDescription>Audit-ready log of your last changes.</CardDescription>
            </div>
            <Badge variant="muted">Skeleton</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 4 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Separator />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Page 1 of 5</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-xl">Previous</Button>
                <Button variant="outline" size="sm" className="rounded-xl">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Rails status</CardTitle>
            <CardDescription>Brand kit + policies must be ready before generation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="text-sm font-semibold">Brand kit</p>
              <p className="text-xs text-muted-foreground">Upload logos, colors, and tone.</p>
              <Button variant="outline" className="mt-3 rounded-xl">Create brand kit</Button>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="text-sm font-semibold">Claim policies</p>
              <p className="text-xs text-muted-foreground">Define allowed/disallowed statements.</p>
              <Button variant="outline" className="mt-3 rounded-xl">Create policies</Button>
            </div>
            <Alert>
              <AlertTitle>Next action</AlertTitle>
              <AlertDescription>Connect a storefront or upload a product image to unlock campaigns.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
