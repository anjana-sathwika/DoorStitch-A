import { Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Orders = () => {
  // Demo orders
  const orders = [
    {
      id: "ORD-001",
      design: "Designer Blouse",
      tailor: "D. Nagalaxmi",
      status: "In Progress",
      date: "2025-01-15",
    },
    {
      id: "ORD-002",
      design: "Party Wear Gown",
      tailor: "GopiKrishnan",
      status: "Completed",
      date: "2025-01-10",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500/10 text-blue-600";
      case "Completed":
        return "bg-green-500/10 text-green-600";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-600";
      default:
        return "bg-gray-500/10 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-primary">My Orders</h1>

        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{order.design}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Order #{order.id}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Tailor:</span>{" "}
                      <span className="font-medium">{order.tailor}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Order Date:</span>{" "}
                      <span className="font-medium">{order.date}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">No orders yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
