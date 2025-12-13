import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ShieldAlert, ShieldCheck } from "lucide-react";

const channels = ["Meta", "Google", "Amazon"];

export default function ClaimPoliciesPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle>Policy builder</CardTitle>
            <CardDescription>Outline allowed/disallowed claims per channel.</CardDescription>
          </div>
          <Badge variant="muted">Rails impact</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="Meta">
            <TabsList className="flex-wrap gap-2">
              {channels.map((channel) => (
                <TabsTrigger key={channel} value={channel}>{channel}</TabsTrigger>
              ))}
            </TabsList>
            {channels.map((channel) => (
              <TabsContent key={channel} value={channel} className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">No rules added for {channel} yet.</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="rounded-xl">Add rule</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add rule for {channel}</DialogTitle>
                        <DialogDescription>Define claim guidance. Actions are not persisted yet.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="type">Rule type</Label>
                          <Select>
                            <SelectTrigger id="type">
                              <SelectValue placeholder="Allowed or Disallowed" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="allowed">Allowed</SelectItem>
                              <SelectItem value="disallowed">Disallowed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="claim">Claim</Label>
                          <Input id="claim" placeholder="e.g., organic certified" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="disclaimer">Disclaimer</Label>
                          <Textarea id="disclaimer" placeholder="Add channel-specific disclaimer" />
                        </div>
                        <Button className="rounded-2xl" disabled>
                          Save rule
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Claim</TableHead>
                      <TableHead>Disclaimer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Alert>
        <AlertTitle className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Rails impact</AlertTitle>
        <AlertDescription className="space-y-2">
          <p>Policies gate prompts, reviews, and exports. Disallowed claims block generation; warnings require approval.</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Badge variant="destructive" className="rounded-full">FAIL blocks job</Badge>
            <Badge variant="muted">WARN requires approver</Badge>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
