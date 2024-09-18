import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

export default function dashboard() {
  return (
    <div className="">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <DropdownMenu>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
                <CardDescription>
                  Overview of current inventory levels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-start gap-2 rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium">Total Items</div>
                      <div className="text-3xl font-bold">1,250</div>
                    </div>
                    <div className="flex flex-col items-start gap-2 rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium">In Stock</div>
                      <div className="text-3xl font-bold">950</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-start gap-2 rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium">Assigned</div>
                      <div className="text-3xl font-bold">200</div>
                    </div>
                    <div className="flex flex-col items-start gap-2 rounded-lg bg-muted p-4">
                      <div className="text-sm font-medium">Pending</div>
                      <div className="text-3xl font-bold">100</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-06-chunk-1">
              <CardHeader>
                <CardTitle>New Hires</CardTitle>
                <CardDescription>
                  Employees who recently joined the company.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Start Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell>2023-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>Product Manager</TableCell>
                      <TableCell>2023-05-01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Michael Johnson
                      </TableCell>
                      <TableCell>Sales Representative</TableCell>
                      <TableCell>2023-06-01</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-06-chunk-2">
              <CardHeader>
                <CardTitle>Offboarding</CardTitle>
                <CardDescription>
                  Employees who are leaving the company.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Last Day</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Sarah Lee</TableCell>
                      <TableCell>Marketing Coordinator</TableCell>
                      <TableCell>2023-07-31</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">David Kim</TableCell>
                      <TableCell>IT Support Specialist</TableCell>
                      <TableCell>2023-08-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emily Chen</TableCell>
                      <TableCell>HR Generalist</TableCell>
                      <TableCell>2023-09-01</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-06-chunk-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Access the most common tasks.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button size="sm" variant="outline" className="h-10 gap-2">
                    <PackageIcon className="h-4 w-4" />
                    Assign Supplies
                  </Button>
                  <Button size="sm" variant="outline" className="h-10 gap-2">
                    <FilePenIcon className="h-4 w-4" />
                    Update Inventory
                  </Button>
                  <Button size="sm" variant="outline" className="h-10 gap-2">
                    <UsersIcon className="h-4 w-4" />
                    Manage Employees
                  </Button>
                  <Button size="sm" variant="outline" className="h-10 gap-2">
                    <FileIcon className="h-4 w-4" />
                    Offboarding
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-06-chunk-4">
              <CardHeader>
                <CardTitle>Inventory Usage</CardTitle>
                <CardDescription>
                  Breakdown of inventory usage by department.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Sales</div>
                    <div className="text-sm text-muted-foreground">45%</div>
                  </div>
                  <Progress value={45} />
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Marketing</div>
                    <div className="text-sm text-muted-foreground">25%</div>
                  </div>
                  <Progress value={25} />
                  <div className="flex items-center justify-between">
                    <div className="font-medium">IT</div>
                    <div className="text-sm text-muted-foreground">15%</div>
                  </div>
                  <Progress value={15} />
                  <div className="flex items-center justify-between">
                    <div className="font-medium">HR</div>
                    <div className="text-sm text-muted-foreground">10%</div>
                  </div>
                  <Progress value={10} />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
