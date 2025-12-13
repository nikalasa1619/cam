import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Info, Link2, Plus, Sparkles, TriangleAlert } from "lucide-react";

export default function CampaignsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <div className="space-y-6 xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Campaign details</CardTitle>
            <CardDescription>Set intent and guardrails before launching a batch.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Campaign name</Label>
                <Input id="name" placeholder="e.g., Summer re-targeting" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="objective">Objective</Label>
                <Select>
                  <SelectTrigger id="objective">
                    <SelectValue placeholder="Select objective" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awareness">Awareness</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Tabs defaultValue="templates">
              <TabsList>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="prompt">Prompt</TabsTrigger>
              </TabsList>
              <TabsContent value="templates" className="space-y-3">
                <div className="rounded-3xl border border-dashed p-6 text-center">
                  <Sparkles className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm font-semibold">No templates saved</p>
                  <p className="text-xs text-muted-foreground">Create a template after your first campaign.</p>
                  <Button variant="outline" className="mt-3 rounded-2xl">Create template</Button>
                </div>
              </TabsContent>
              <TabsContent value="prompt" className="space-y-3">
                <Label htmlFor="prompt">Guidance prompt</Label>
                <Textarea id="prompt" placeholder="Describe the scene, tone, and offer." />
                <p className="text-xs text-muted-foreground">Policies and brand kit will filter risky language.</p>
              </TabsContent>
            </Tabs>

            <div className="rounded-3xl border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Batch settings</p>
                  <p className="text-xs text-muted-foreground">Control variant volume and safety gating.</p>
                </div>
                <Badge variant="muted">Guarded</Badge>
              </div>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="count">Variants per product</Label>
                  <Slider defaultValue={[4]} max={12} step={1} />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="safe-mode" />
                  <Label htmlFor="safe-mode">Apply strict claim policies</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="brand-mode" />
                  <Label htmlFor="brand-mode">Lock brand kit placements</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Products</CardTitle>
              <CardDescription>Select at least one product before starting.</CardDescription>
            </div>
            <Badge variant="muted">0 selected</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Claims</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 4 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-between">
            <Alert className="flex-1">
              <AlertTitle className="flex items-center gap-2 text-sm font-semibold">
                <TriangleAlert className="h-4 w-4" /> Start job disabled
              </AlertTitle>
              <AlertDescription className="text-xs">Add a product, prompt, and ensure brand kit/policies exist.</AlertDescription>
            </Alert>
            {/* Enable when products selected, prompt provided, and rails linked */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-2xl" disabled>
                  Start job
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Start in strict mode</DropdownMenuItem>
                <DropdownMenuItem>Start in preview mode</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Readiness</CardTitle>
            <CardDescription>All prerequisites must be met.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" /> Brand kit attached
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" /> Claim policies enforced
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" /> Products selected
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" /> Prompt supplied
            </div>
          </CardContent>
        </Card>
        <Alert>
          <AlertTitle className="flex items-center gap-2">
            <Link2 className="h-4 w-4" /> Template dependency
          </AlertTitle>
          <AlertDescription>Templates unlock after first campaign. For now, start with a prompt.</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
