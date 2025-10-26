import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const Measurements = () => {
  const [measurements, setMeasurements] = useState({
    bust: "36",
    waist: "30",
    hip: "38",
    shoulder: "15",
    armLength: "22",
    length: "42",
  });

  const handleSave = () => {
    toast.success("Measurements saved successfully!");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold text-primary">My Measurements</h1>

        <Card>
          <CardHeader>
            <CardTitle>Body Measurements (in inches)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="bust">Bust</Label>
                <Input
                  id="bust"
                  type="number"
                  value={measurements.bust}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, bust: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="waist">Waist</Label>
                <Input
                  id="waist"
                  type="number"
                  value={measurements.waist}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, waist: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="hip">Hip</Label>
                <Input
                  id="hip"
                  type="number"
                  value={measurements.hip}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, hip: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="shoulder">Shoulder Width</Label>
                <Input
                  id="shoulder"
                  type="number"
                  value={measurements.shoulder}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, shoulder: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="armLength">Arm Length</Label>
                <Input
                  id="armLength"
                  type="number"
                  value={measurements.armLength}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, armLength: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="length">Garment Length</Label>
                <Input
                  id="length"
                  type="number"
                  value={measurements.length}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, length: e.target.value })
                  }
                />
              </div>
            </div>
            <Button className="w-full mt-4" onClick={handleSave}>
              Save Measurements
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Measurements;
