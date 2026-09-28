// Registry of every image/video slot the admin can change from Admin → Site Assets.
// `default` is what the site shows until the admin uploads a replacement.

export type AssetKind = "image" | "video";

export interface AssetSlot {
  /** Stable id, "<page>.<section>.<name>" — never rename, overrides are stored under it */
  key: string;
  label: string;
  default: string;
  kind?: AssetKind; // defaults to "image"
}

export interface AssetSection {
  title: string;
  slots: AssetSlot[];
}

export interface AssetPage {
  title: string;
  /** Public route, used for the "View page" link in the admin */
  path?: string;
  sections: AssetSection[];
}
