import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth-routes.js";
import caseStudyRoutes from "./routes/case-study-routes.js";
import mediaEventRoutes from "./routes/media-event-routes.js";
import enquiryRoutes from "./routes/enquiry-routes.js";
import subscriberRoutes from "./routes/subscriber-routes.js";
import statsRoutes from "./routes/stats-routes.js";
import siteAssetRoutes from "./routes/site-asset-routes.js";
import uploadRoutes from "./routes/upload-routes.js";
import resourceRoutes from "./routes/resource-routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/", (req, res) => res.json({ status: "TrueLedger API running" }));

app.use("/api/auth", authRoutes);
app.use("/api/case-studies", caseStudyRoutes);
app.use("/api/media-events", mediaEventRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/site-assets", siteAssetRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/resources", resourceRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message ?? "Server error" });
});

await connectDB();

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
