import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CreateAddressInfo = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Add Address</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add New Address</SheetTitle>
          </SheetHeader>
          <hr className="my-5" />
          <div className="grid gap-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="FirstName" className="text-right">
                First Name
              </Label>
              <Input
                id="FirstName"
                placeholder="First Name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="LastName" className="text-right">
                Last Name
              </Label>
              <Input
                id="LastName"
                placeholder="Last Name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input
                id="Email"
                placeholder="Email"
                className="col-span-3"
                type="email"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Phone" className="text-right">
                Phone
              </Label>
              <Input
                id="Phone"
                placeholder="Phone Number"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Address" className="text-right">
                Address
              </Label>
              <Input
                id="Address"
                placeholder="Your Full Address"
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild className="my-5">
              <Button type="submit" className="w-full">
                Add Address
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CreateAddressInfo;
