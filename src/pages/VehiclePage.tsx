
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Vehicle } from "@/types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { VehicleCard } from "@/components/VehicleCard";
import { NewVehicleForm } from "@/components/NewVehicleForm";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const VehiclePage = () => {
  const navigate = useNavigate();
  const [showNewVehicleForm, setShowNewVehicleForm] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem("userVehicles");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddVehicle = (vehicle: Vehicle) => {
    const newVehicle = {
      ...vehicle,
      id: `vehicle-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    localStorage.setItem("userVehicles", JSON.stringify(updatedVehicles));
    
    setShowNewVehicleForm(false);
    toast({
      title: "Vehicle Added",
      description: `Your ${vehicle.year} ${vehicle.make} ${vehicle.model} has been added successfully.`,
    });
  };

  const handleDeleteVehicle = (vehicleId: string) => {
    const updatedVehicles = vehicles.filter(v => v.id !== vehicleId);
    setVehicles(updatedVehicles);
    localStorage.setItem("userVehicles", JSON.stringify(updatedVehicles));
    
    toast({
      title: "Vehicle Removed",
      description: "Vehicle has been removed from your garage.",
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col items-center gap-6 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Garage</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Manage your vehicles and track their maintenance history
          </p>
        </div>

        {vehicles.length === 0 && !showNewVehicleForm && (
          <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground mb-6">You haven't added any vehicles yet</p>
            <Button 
              onClick={() => setShowNewVehicleForm(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Your First Vehicle
            </Button>
          </div>
        )}

        {vehicles.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Vehicles</h2>
              {!showNewVehicleForm && (
                <Button 
                  onClick={() => setShowNewVehicleForm(true)}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Vehicle
                </Button>
              )}
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {vehicles.map((vehicle) => (
                <VehicleCard 
                  key={vehicle.id}
                  vehicle={vehicle}
                  onDelete={() => handleDeleteVehicle(vehicle.id!)}
                  onTroubleshoot={() => navigate("/symptoms")}
                />
              ))}
            </div>
          </>
        )}

        {showNewVehicleForm && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Vehicle</h2>
              <Button 
                variant="ghost" 
                onClick={() => setShowNewVehicleForm(false)}
              >
                Cancel
              </Button>
            </div>
            <NewVehicleForm onSubmit={handleAddVehicle} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VehiclePage;
