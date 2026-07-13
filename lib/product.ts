export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "SEOMeta",
  slug: "seo-meta",
  tagline: "Title, meta & OG tags in seconds",
  description: "Enter your page title, description, and keywords and get clean, length-safe HTML title, meta description, and Open Graph tags ready to drop in. For indie founders doing their own SEO.",
  toolTitle: "Generate SEO tags",
  resultLabel: "Your tags",
  ctaLabel: "Generate tags",
  features: [
  "Length-safe",
  "OG + Twitter",
  "Copy HTML",
  "No tooling"
],
  inputs: [
  {
    "key": "pagetitle",
    "label": "Page title",
    "type": "input",
    "placeholder": "e.g. TaskNinja - Async Standups"
  },
  {
    "key": "description",
    "label": "Meta description",
    "type": "textarea",
    "placeholder": "e.g. TaskNinja helps remote teams run async standups"
  },
  {
    "key": "keywords",
    "label": "Keywords",
    "type": "input",
    "placeholder": "e.g. async standup, remote work, productivity"
  }
] as InputField[],
  systemPrompt: "You are an SEO specialist. Given page title, description, keywords, output an HTML title (<=60 chars), meta description (<=155 chars), and Open Graph + Twitter card tags.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Bulk, sitemap"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "API, brand rules"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const t = (inputs['pagetitle'] || 'Your Page Title').slice(0, 60)
  const d = (inputs['description'] || 'Your page description.').slice(0, 155)
  const k = inputs['keywords'] || 'keyword1, keyword2'
  return '<title>' + t + '</title>\n<meta name="description" content="' + d + '">\n<meta name="keywords" content="' + k + '">\n<meta property="og:title" content="' + t + '">\n<meta property="og:description" content="' + d + '">\n<meta name="twitter:card" content="summary_large_image">\n\n--- (Mock tags. Add OPENAI_API_KEY for length-optimized, CTR-tested copy.)'
}
}
