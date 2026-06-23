-- TrueLedger CMS Schema
-- Run this in your Supabase SQL Editor (supabase.com > project > SQL Editor)

-- Case Studies
create table if not exists public.case_studies (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  client_name text not null default '',
  industry text not null default '',
  challenge text not null default '',
  solution text not null default '',
  results text not null default '',
  featured_image text not null default '',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Media Gallery
create table if not exists public.media_items (
  id uuid default gen_random_uuid() primary key,
  title text not null default '',
  description text not null default '',
  image_url text not null,
  category text not null default '',
  published boolean not null default false,
  created_at timestamptz not null default now()
);

-- Blog Posts
create table if not exists public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  featured_image text not null default '',
  author text not null default '',
  category text not null default '',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger case_studies_updated_at
  before update on public.case_studies
  for each row execute function public.handle_updated_at();

create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.handle_updated_at();

-- Row Level Security (public read, authenticated write)
alter table public.case_studies enable row level security;
alter table public.media_items enable row level security;
alter table public.blog_posts enable row level security;

-- Public can read published items
create policy "Public can read published case studies"
  on public.case_studies for select using (published = true);

create policy "Public can read published media"
  on public.media_items for select using (published = true);

create policy "Public can read published blog posts"
  on public.blog_posts for select using (published = true);

-- Authenticated users (admin) can do everything
create policy "Admin full access to case studies"
  on public.case_studies for all using (auth.role() = 'authenticated');

create policy "Admin full access to media"
  on public.media_items for all using (auth.role() = 'authenticated');

create policy "Admin full access to blog posts"
  on public.blog_posts for all using (auth.role() = 'authenticated');
