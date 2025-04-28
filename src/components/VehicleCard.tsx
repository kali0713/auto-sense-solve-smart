
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/types";
import { Car, Wrench, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface VehicleCardProps {
  vehicle: Vehicle;
  onDelete: () => void;
  onTroubleshoot: () => void;
}

export function VehicleCard({ vehicle, onDelete, onTroubleshoot }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gray-50 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-5 w-5 text-automotive-blue" />
            <CardTitle className="text-lg">{vehicle.make} {vehicle.model}</CardTitle>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Vehicle</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to remove this vehicle from your garage? 
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete} className="bg-red-500 hover:bg-red-600">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Year</span>
            <span className="font-medium">{vehicle.year}</span>
          </div>
          {vehicle.mileage && (
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Mileage</span>
              <span className="font-medium">{vehicle.mileage.toLocaleString()} mi</span>
            </div>
          )}
          {vehicle.engineType && (
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Engine</span>
              <span className="font-medium">{vehicle.engineType}</span>
            </div>
          )}
          {vehicle.transmission && (
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Transmission</span>
              <span className="font-medium">{vehicle.transmission}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 pb-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={onTroubleshoot}
        >
          <Wrench className="h-3.5 w-3.5" />
          Troubleshoot
        </Button>
      </CardFooter>
    </Card>
  );
}
