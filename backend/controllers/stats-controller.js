import CaseStudy from "../models/case-study.js";
import MediaEvent from "../models/media-event.js";
import Resource from "../models/resource.js";
import Enquiry from "../models/enquiry.js";
import Subscriber from "../models/subscriber.js";

// GET /api/stats — counts for the admin dashboard
export async function getStats(req, res) {
  const caseStudies = await CaseStudy.countDocuments();
  const mediaEvents = await MediaEvent.countDocuments();
  const resources = await Resource.countDocuments();
  const enquiries = await Enquiry.countDocuments();
  const subscribers = await Subscriber.countDocuments();
  res.json({ caseStudies, mediaEvents, resources, enquiries, subscribers });
}
