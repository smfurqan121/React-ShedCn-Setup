// src/pages/Dashboard.jsx

import { BarChart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Component } from "../components/ui/BarChart";

export default function Dashboard() {
  return (
    <div className="p-6 bg-white h-screen overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Card className="bg-green-100">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-2xl mt-2">1,234</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl mt-2">$45,678</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-2xl mt-2">782</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-2xl mt-2">782</p>
          </CardContent>
        </Card>
      </div>
      <div className="my-4">
        <Component />
      </div>
      
    </div>
  );
}
