import type { AssetPage } from "./types";
import { globalAssets } from "./global";
import { homeAssets } from "./home";
import { aboutAssets } from "./about";
import { whoWeWorkWithAssets } from "./who-we-work-with";
import { globalEntitySetupAssets } from "./global-entity-setup";
import { managedAccountingAssets } from "./managed-accounting-bookkeeping";
import { taxComplianceAssets } from "./tax-compliance-advisory";
import { businessAdvisoryAssets } from "./business-advisory";
import { supportToCpasAssets } from "./support-to-cpas";
import { aiSaasAssets } from "./ai-saas-startups";
import { hospitalityAssets } from "./hospitality-restaurants";
import { smbAssets } from "./small-mid-size-businesses";
import { ecommerceAssets } from "./ecommerce-retail";
import { northAmericaAssets } from "./north-america";
import { europeUkAssets } from "./europe-uk";
import { apacAssets } from "./apac";
import { caseStudiesAssets } from "./case-studies";
import { mediaAssets } from "./media";
import { resourcesAssets } from "./resources";
import { contactAssets } from "./contact";
import { faqAssets } from "./faq";

export type { AssetKind, AssetSlot, AssetSection, AssetPage } from "./types";

// Order here is the order pages appear in Admin → Site Assets
export const assetPages: AssetPage[] = [
  globalAssets,
  homeAssets,
  aboutAssets,
  whoWeWorkWithAssets,
  globalEntitySetupAssets,
  managedAccountingAssets,
  taxComplianceAssets,
  businessAdvisoryAssets,
  supportToCpasAssets,
  aiSaasAssets,
  hospitalityAssets,
  smbAssets,
  ecommerceAssets,
  northAmericaAssets,
  europeUkAssets,
  apacAssets,
  caseStudiesAssets,
  mediaAssets,
  resourcesAssets,
  contactAssets,
  faqAssets,
];

/** key → default url, for every slot on the site */
export const assetDefaults: Record<string, string> = Object.fromEntries(
  assetPages.flatMap((page) =>
    page.sections.flatMap((section) => section.slots.map((slot) => [slot.key, slot.default])),
  ),
);
