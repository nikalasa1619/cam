import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Filter, RefreshCcw, Search, StopCircle } from "lucide-react";

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Input className="w-64" placeholder="Search jobs" aria-label="Search jobs" />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="rounded-xl"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Filter jobs</DialogTitle>
            </DialogHeader>
            <div className="grid gap-3">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input id="status" placeholder="Queued, Completed" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="owner">Owner</Label>
                <Input id="owner" placeholder="Optional" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="rounded-xl"><Calendar className="mr-2 h-4 w-4" /> Date range</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Date picker placeholder</p>
          </PopoverContent>
        </Popover>
        <Button variant="outline" className="rounded-xl"><RefreshCcw className="mr-2 h-4 w-4" /> Refresh</Button>
      </div>

      <Tabs defaultValue="queue">
        <TabsList>
          <TabsTrigger value="queue">Queue</TabsTrigger>
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="queue" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Queue</CardTitle>
                <CardDescription>New runs appear here with status.</CardDescription>
              </div>
              <Badge variant="muted">Skeleton</Badge>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-44" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell className="flex gap-2">
                        <Button variant="ghost" size="sm" className="rounded-xl"><RefreshCcw className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" className="rounded-xl"><StopCircle className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="steps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Step trace</CardTitle>
              <CardDescription>Follow guardrail checks per job.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-3xl border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Step {i + 1}</p>
                      <p className="text-xs text-muted-foreground">Brand + claim validation</p>
                    </div>
                    <Badge variant="muted">Pending</Badge>
                  </div>
                  <div className="mt-3 h-14 rounded-2xl bg-muted/50" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logs</CardTitle>
              <CardDescription>Raw trace appears after first run.</CardDescription>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-48 w-full rounded-3xl" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
