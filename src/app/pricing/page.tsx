import { Counter } from "@/components/counter";
import React from "react";

const Pricing = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-2 text-lg">
        Choose the right plan for your needs. No credit card required.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-300 p-6">
          <h2 className="text-lg font-medium">Starter</h2>
          <p className="mt-2">For small projects</p>
          <p className="mt-4 text-4xl font-bold">$0 / mo</p>
          <ul className="mt-6 space-y-1">
            <li>1 user</li>
            <li>1 project</li>
            <li>100MB storage</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-300 p-6">
          <h2 className="text-lg font-medium">Growth</h2>
          <p className="mt-2">For growing projects</p>
          <p className="mt-4 text-4xl font-bold">$20 / mo</p>
          <ul className="mt-6 space-y-1">
            <li>5 users</li>
            <li>5 projects</li>
            <li>1GB storage</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-300 p-6">
          <h2 className="text-lg font-medium">Enterprise</h2>
          <p className="mt-2">For large projects</p>
          <p className="mt-4 text-4xl font-bold">$50 / mo</p>
          <ul className="mt-6 space-y-1">
            <li>15 users</li>
            <li>15 projects</li>
            <li>5GB storage</li>
          </ul>
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default Pricing;
