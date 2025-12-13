import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Upload } from "lucide-react";

export default function OnboardingPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Step 1: Source products</CardTitle>
          <CardDescription>Connect your storefront or start with a manual upload.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="connect">
            <TabsList>
              <TabsTrigger value="connect">Connect storefront</TabsTrigger>
              <TabsTrigger value="upload">Manual upload</TabsTrigger>
            </TabsList>
            <TabsContent value="connect">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">No storefront connected yet. Connect Amazon to pull hero images and metadata.</p>
                <Button className="rounded-2xl">Connect Amazon</Button>
              </div>
            </TabsContent>
            <TabsContent value="upload">
              <div className="space-y-4">
                <div className="rounded-3xl border border-dashed p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm font-semibold">Upload product hero image</p>
                  <p className="text-xs text-muted-foreground">Drag and drop or click to pick a file.</p>
                  <Button variant="outline" className="mt-3 rounded-2xl">Choose file</Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Product title</Label>
                    <Input id="title" placeholder="Optional" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" placeholder="Optional" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Step 2: Brand kit & claim policies</CardTitle>
          <CardDescription>Define how creatives should look and what they can say.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Brand Kit</p>
                <p className="text-xs text-muted-foreground">Logos, colors, typography</p>
              </div>
              <Badge variant="muted">Empty</Badge>
            </div>
            <Button variant="outline" className="rounded-2xl">Create brand kit</Button>
          </div>
          <div className="space-y-3 rounded-3xl border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Claim Policies</p>
                <p className="text-xs text-muted-foreground">Allowed/disallowed statements</p>
              </div>
              <Badge variant="muted">Empty</Badge>
            </div>
            <Button variant="outline" className="rounded-2xl">Create policies</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle>Advanced defaults</CardTitle>
            <CardDescription>Only use when you want workspace-wide defaults applied to every run.</CardDescription>
          </div>
          <Badge variant="outline">Optional</Badge>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="advanced">
              <AccordionTrigger>Aspect ratios & safety strictness</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="ratio">Preferred aspect ratio</Label>
                    <Input id="ratio" placeholder="e.g. 1:1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="safe">Safety strictness</Label>
                    <Input id="safe" placeholder="High" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="channels">Default channels</Label>
                    <Input id="channels" placeholder="Meta, Google" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Switch id="review" />
                  <Label htmlFor="review">Require manual review before exports</Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="rounded-2xl">Preview checklist</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Launch readiness</DialogTitle>
            <DialogDescription>Confirm every prerequisite before generating creatives.</DialogDescription>
          </DialogHeader>
          <Accordion type="single" collapsible>
            <AccordionItem value="intake">
              <AccordionTrigger>Intake</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Storefront connected or image uploaded.</p>
                <p>✓ Metadata captured for claims.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rails">
              <AccordionTrigger>Guardrails</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Brand kit defined.</p>
                <p>✓ Claim policies active.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="handoff">
              <AccordionTrigger>Handoff</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Campaign has at least one product.</p>
                <p>✓ Review rubric is acknowledged.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DialogContent>
      </Dialog>
      <Separator />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ChevronRight className="h-4 w-4" />
        <span>Next: Create your first campaign once rails are ready.</span>
      </div>
    </div>
  );
}
