import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export default function BrandKitPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Brand assets</CardTitle>
          <CardDescription>Upload logos and add placement guidance.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-3xl border border-dashed p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-semibold">Upload primary logo</p>
            <Button variant="outline" className="mt-3 rounded-2xl">Choose file</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="placement">Placement notes</Label>
            <Textarea id="placement" placeholder="e.g., logo bottom-left, 12px padding" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="font">Primary font</Label>
              <Input id="font" placeholder="e.g., Inter" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="headline">Headline weight</Label>
              <Input id="headline" placeholder="Semi-bold" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="color1">Primary color</Label>
              <Input id="color1" placeholder="#0F172A" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="color2">Accent color</Label>
              <Input id="color2" placeholder="#3B82F6" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="color3">Background</Label>
              <Input id="color3" placeholder="#F8FAFC" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="voice">Voice & tone</Label>
            <Textarea id="voice" placeholder="Concise, confident, benefit-led." />
          </div>
          <Button className="rounded-2xl" disabled>
            Save brand kit
          </Button>
          <p className="text-xs text-muted-foreground">Upload assets to enable saving.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>See how rails apply across placements.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="logo">
            <TabsList>
              <TabsTrigger value="logo">Logo safe area</TabsTrigger>
              <TabsTrigger value="type">Typography</TabsTrigger>
              <TabsTrigger value="color">Color</TabsTrigger>
            </TabsList>
            <TabsContent value="logo" className="space-y-3">
              <Badge variant="muted">Placeholder</Badge>
              <div className="h-48 rounded-3xl border bg-muted/60"></div>
            </TabsContent>
            <TabsContent value="type" className="space-y-3">
              <Badge variant="muted">Preview</Badge>
              <div className="space-y-2 rounded-3xl border p-4">
                <p className="text-lg font-semibold">Headline style</p>
                <p className="text-sm text-muted-foreground">Body copy preview with tone guidance.</p>
              </div>
            </TabsContent>
            <TabsContent value="color" className="space-y-3">
              <Badge variant="muted">Palette</Badge>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-2xl border bg-primary/80" />
                <div className="h-16 rounded-2xl border bg-blue-300" />
                <div className="h-16 rounded-2xl border bg-muted" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
