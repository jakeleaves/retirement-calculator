// src/lib/convex.ts
import { ConvexReactClient } from "convex/react";

// Initialize the Convex client with your Convex project URL
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default convex;
