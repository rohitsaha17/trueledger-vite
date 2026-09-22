import CaseStudy from "../models/case-study.js";
import MediaItem from "../models/media-item.js";
import BlogPost from "../models/blog-post.js";
import Enquiry from "../models/enquiry.js";
import Subscriber from "../models/subscriber.js";

// GET /api/stats — counts for the admin dashboard
export async function getStats(req, res) {
  const caseStudies = await CaseStudy.countDocuments();
  const media = await MediaItem.countDocuments();
  const blogPosts = await BlogPost.countDocuments();
  const enquiries = await Enquiry.countDocuments();
  const subscribers = await Subscriber.countDocuments();
  res.json({ caseStudies, media, blogPosts, enquiries, subscribers });
}
