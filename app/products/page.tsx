import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Filter, Upload } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <div className="space-y-6 xl:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upload products</CardTitle>
              <CardDescription>Start with a single hero image. No data is stored until you confirm.</CardDescription>
            </div>
            <Badge variant="muted">Empty</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-3xl border border-dashed p-8 text-center">
              <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm font-semibold">Drop an Amazon product image</p>
              <p className="text-xs text-muted-foreground">We’ll extract dimensions later. For now, upload to unlock generation.</p>
              <Button variant="outline" className="mt-3 rounded-2xl">Choose file</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Optional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="Optional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Usage notes</Label>
              <Textarea id="notes" placeholder="Optional notes for claims" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="consent" />
              <Label htmlFor="consent">I confirm I own rights to these assets.</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Library</CardTitle>
              <CardDescription>Filtered view of uploaded items. Data appears after first upload.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <Badge variant="outline">Sort</Badge>
              <Badge variant="outline">Category</Badge>
              <Badge variant="outline">Status</Badge>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Claims</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Page 1</span>
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
            <CardTitle>Validation checklist</CardTitle>
            <CardDescription>Files must clear these checks before generation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-2xl bg-muted/50 px-3 py-2">
              <span>Image dimensions</span>
              <Badge variant="muted">Pending</Badge>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-muted/50 px-3 py-2">
              <span>Rights & consent</span>
              <Badge variant="muted">Pending</Badge>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-muted/50 px-3 py-2">
              <span>Brand kit linked</span>
              <Badge variant="muted">Missing</Badge>
            </div>
            <Separator />
            <Button className="w-full rounded-2xl" disabled>
              Save and continue
            </Button>
            <p className="text-xs">Upload or connect products to enable this button.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
