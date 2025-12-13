import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Filter } from "lucide-react";

export default function ActivityPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <div className="flex flex-wrap items-center gap-3">
          <Input className="w-64" placeholder="Search events" aria-label="Search events" />
          <Button variant="outline" className="rounded-xl"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
          <Label className="text-sm text-muted-foreground">Types: Ingestion, Policy, Export</Label>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <CardDescription>Audit trail ready after your first change.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3 rounded-3xl border p-4">
                <div className="flex flex-col items-center text-xs text-muted-foreground">
                  <Badge variant="muted">Pending</Badge>
                </div>
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Retention</CardTitle>
          <CardDescription>Explains how long audit data is kept.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>Activity is retained for 90 days by default.</p>
          <p>Request export before purge to keep a record.</p>
          <Textarea placeholder="Notes to compliance" />
        </CardContent>
      </Card>
    </div>
  );
}
