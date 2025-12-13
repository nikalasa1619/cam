import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";

export default function ExportsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Pack builder</CardTitle>
            <CardDescription>Choose a channel and what to include in the pack.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pack">Pack name</Label>
                <Input id="pack" placeholder="e.g., Meta Spring drop" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="channel">Channel</Label>
                <Select>
                  <SelectTrigger id="channel">
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meta">Meta</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="rounded-3xl border p-4">
              <p className="text-sm font-semibold">Contents</p>
              <p className="text-xs text-muted-foreground">Select at least one item to enable creation.</p>
              <div className="mt-3 space-y-2">
                {[
                  "Manifest",
                  "Report",
                  "Thumbnails",
                  "Raw prompts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox id={item} />
                    <Label htmlFor={item}>{item}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Tabs defaultValue="notes">
              <TabsList>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
              </TabsList>
              <TabsContent value="notes" className="space-y-2">
                <Label htmlFor="notes">Export notes</Label>
                <Textarea id="notes" placeholder="Remind approvers of constraints." />
              </TabsContent>
              <TabsContent value="rules" className="space-y-3">
                <Badge variant="muted">Pack rules</Badge>
                <div className="space-y-2 rounded-3xl border p-4 text-sm text-muted-foreground">
                  <p>FAIL: Block export and notify approver.</p>
                  <p>WARN: Hold until approver toggles.</p>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex items-center gap-2">
              {/* Enable once at least one approved variant and pack contents selected */}
              <Button className="rounded-2xl" disabled>Create pack</Button>
              <Badge variant="muted">Requires variant selection</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Variant selection</CardTitle>
            <CardDescription>Select variants to include.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-2xl bg-muted/50 px-3 py-2">
              <span>Selected variants</span>
              <Badge variant="muted">0</Badge>
            </div>
            <p className="text-xs">Add approved variants from Review to enable export.</p>
          </CardContent>
        </Card>
        <Alert>
          <AlertTitle className="flex items-center gap-2"><Info className="h-4 w-4" /> Safety handling</AlertTitle>
          <AlertDescription>Exports respect policy FAIL/WARN states. Approvers must clear WARN before release.</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
