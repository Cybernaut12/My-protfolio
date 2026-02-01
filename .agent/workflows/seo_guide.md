---
description: Steps to improve SEO and rank higher on Google
---

# SEO Checklist for Cybernout.com

To rank at the top of Google, you need to prove your site is relevant, fast, and trustworthy.

## 1. Technical SEO (Already Implemented)

- [x] **Meta Tags**: We added a clear Title, Description, and Keywords to `index.html`.
- [x] **Social Sharing**: Open Graph tags are added so links look good on Twitter/LinkedIn.
- [x] **Sitemap**: Created `sitemap.xml` to tell Google about your page.
- [x] **Robots.txt**: Created `robots.txt` to allow Google to crawl your site.

## 2. Google Search Console (CRITICAL STEP)

You **MUST** do this manually:

1.  Go to [Google Search Console](https://search.google.com/search-console).
2.  Login with your Google account.
3.  Enter your domain `cybernout.com` on the left side (Domain property).
4.  It will ask you to verify ownership by adding a TXT record to your DNS.
    - Log in to your domain registrar (where you bought cybernout.com).
    - Add the TXT record they provide.
5.  Once verified, go to **Sitemaps** in the sidebar.
6.  Enter `sitemap.xml` and click Submit.
    - This forces Google to index your site faster.

## 3. Content Strategy

- **Keywords**: Your site is about "Software Engineer", "Web Developer", "React", "Python".
- **Blog**: Consider adding a blog section. Google loves fresh content. Writing articles like "How I built my portfolio with React" helps you rank for those terms.
- **Alt Text**: Ensure every image has descriptive alt text (e.g., "Cybernout coding in React" instead of just "profile").

## 4. Performance

- Your site is fast (React/Vite).
- Test it on [PageSpeed Insights](https://pagespeed.web.dev/). Aim for a score of 90+.

## 5. Backlinks (Off-Page SEO)

- Share your portfolio on LinkedIn, Twitter, GitHub, and Reddit.
- Ask friends or colleagues to link to your site from their blogs.
- The more reputable sites that link to you, the higher you rank.
