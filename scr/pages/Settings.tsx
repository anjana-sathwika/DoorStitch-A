import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Settings = () => {
  const [language, setLanguage] = useState("english");

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold text-primary">Settings</h1>

        <Card>
          <CardHeader>
            <CardTitle>Language Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="language">Preferred Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent className="bg-card z-[100]">
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                  <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
                  <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                  <SelectItem value="kannada">ಕನ್ನಡ (Kannada)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" onClick={handleSave}>
              Save Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
