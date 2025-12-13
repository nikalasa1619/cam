import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Workspace defaults</CardTitle>
              <CardDescription>Set how new jobs behave by default.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" placeholder="UTC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ratio">Default aspect ratio</Label>
                  <Input id="ratio" placeholder="1:1" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
                <div>
                  <p className="text-sm font-semibold">Strict rails by default</p>
                  <p className="text-xs text-muted-foreground">Enforces claim + brand checks on every job.</p>
                </div>
                <Switch />
              </div>
              <Button className="rounded-2xl" disabled>Save</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect storage and webhooks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook">Webhook URL</Label>
                <Input id="webhook" placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storage">Storage provider</Label>
                <Select>
                  <SelectTrigger id="storage">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s3">Amazon S3</SelectItem>
                    <SelectItem value="gcs">Google Cloud Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="rounded-2xl" disabled>Save</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose what to be alerted about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
                <span>Job failures</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
                <span>Policy FAIL</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-3 py-2">
                <span>Export created</span>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>System status</CardTitle>
          <CardDescription>Monitor queue health and progress.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span>Queue depth</span>
              <Badge variant="muted">Monitoring</Badge>
            </div>
            <Progress value={30} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span>Generation throughput</span>
              <Badge variant="muted">Placeholder</Badge>
            </div>
            <Progress value={45} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
