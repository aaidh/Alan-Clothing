# 🚀 ALAN — Launch & Business Guide

> A complete step-by-step guide to get your store live and make real money.

---

## PART 1 — Get Your Website Online

### Step 1 — Choose a Hosting Method

You have two great options. **Start with Option A** (free):

#### ✅ Option A: GitHub Pages (FREE — Best for Starting Out)

GitHub Pages hosts static HTML/CSS/JS sites completely free, with a fast global CDN.

1. **Create a free account** at [github.com](https://github.com)
2. Click **"New repository"** → name it `alan-store` → set to **Public**
3. Upload your 3 files: `website.html`, `website.css`, `website.js`, `admin.html`
4. Go to **Settings → Pages → Source → Deploy from branch → main**
5. Your site goes live at: `https://yourusername.github.io/alan-store/`

> [!NOTE]
> Rename `website.html` to `index.html` before uploading so it loads as the homepage automatically.

---

#### ⚡ Option B: Netlify (FREE — Easiest, Best Performance)

Netlify is the easiest drag-and-drop hosting with a free custom domain.

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Click **"Add new site" → "Deploy manually"**
3. **Drag and drop your entire project folder** onto the page
4. Your site is live in 30 seconds at a URL like `https://alan-store.netlify.app`
5. You can change the subdomain name for free

> [!TIP]
> Netlify is the **recommended option** — easiest setup, fastest loading, free SSL certificate included automatically.

---

### Step 2 — Get a Professional Domain Name

A custom domain (like `alanfashion.lk`) makes your store look professional and trustworthy.

| Registrar | Price | Best For |
|---|---|---|
| **[domains.lk](https://www.domains.lk)** | ~LKR 3,500/year | `.lk` domain (Sri Lanka) |
| **[Namecheap](https://namecheap.com)** | ~LKR 3,000/year | `.com` domain |
| **[GoDaddy](https://godaddy.com)** | ~LKR 3,500/year | `.com` domain |

**Recommended domain names to try:**
- `alanfashion.lk`
- `shopalansl.com`
- `alancollection.lk`

**Connect domain to Netlify:**
1. In Netlify → **Domain settings → Add custom domain**
2. Enter your domain name
3. In your domain registrar, update the **nameservers** to Netlify's (they give you the values)
4. Done — SSL is automatic ✅

---

### Step 3 — Activate Real Payments with PayHere

Right now your store is in **sandbox/test mode**. To accept real LKR payments:

1. **Register a free merchant account** at [payhere.lk](https://www.payhere.lk)
   - You need: NIC/Passport, Bank account details, Business info
   - Approval takes 1–3 business days
   - **No monthly fee** — they take 2.5% + LKR 20 per successful transaction

2. **Get your credentials** from the PayHere dashboard:
   - Merchant ID
   - Merchant Secret

3. **Open `website.js`** and find these lines at the top:
   ```javascript
   const PAYHERE_CONFIG = {
       sandbox:         true,           // ← Change to: false
       merchant_id:     '1219964',      // ← Replace with YOUR Merchant ID
       merchant_secret: 'YOUR_SECRET',  // ← Replace with YOUR Merchant Secret
   };
   ```

4. Upload the updated `website.js` to your hosting

> [!CAUTION]
> For a production store, **move the hash generation to a backend** (like a simple PHP or Node.js script) so your `merchant_secret` is never visible in the browser. PayHere has tutorials for this on their website.

---

### Step 4 — Track Visitors with Google Analytics (Free)

Know exactly who visits your store, from where, and what they buy.

1. Go to [analytics.google.com](https://analytics.google.com) → Create account
2. Create a **Property** → choose **Web**
3. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. Paste this just before `</head>` in `website.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## PART 2 — Run a Profitable Business

### 💰 Pricing Strategy

Your current prices are already competitive. For maximum profit:

| Strategy | How |
|---|---|
| **Keystone pricing** | Buy item for X → sell for 2× to 3× |
| **Anchor pricing** | Always show "original price" crossed out (Sale badge) |
| **Bundle deals** | "Buy 2 shirts, get 10% off" — encourages larger orders |
| **Free shipping threshold** | Free ship above LKR 10,000 → customers add more to cart |

---

### 📦 Where to Source Products (Sri Lanka)

| Source | What to Find | Area |
|---|---|---|
| **Pettah Market (Colombo 11)** | Fabrics, wholesale clothes | Manning Market, Main St |
| **Maradana wholesale** | Branded-style clothing | Maradana Rd |
| **Biyagama EPZ** | Factory-direct clothing at low cost | Biyagama |
| **Aliexpress / 1688.com** | Trendy items shipped to SL | Online (China) |
| **Local tailors** | Custom-made luxury pieces (highest margin) | Any city |

> [!TIP]
> **Custom-made clothing has the highest profit margin.** Partner with a local tailor, add your ALAN branding, and sell at 3–5× the cost. This is how luxury brands work.

---

### 📱 Marketing — How to Get Customers

#### 🔥 Instagram & TikTok (Most Important for Fashion)

These are the #1 channels for fashion brands in Sri Lanka.

- Post **daily** — product photos, "fit of the day", behind-the-scenes
- Use hashtags: `#SriLankaFashion` `#ColomboStyle` `#LKFashion` `#OOTD`
- Reels/TikTok videos get 10× more reach than photos
- Partner with **micro-influencers** (5k–50k followers) — cheaper and more trustworthy

**Content ideas:**
- "Unboxing" of new arrivals
- "How to style" videos
- Before/after tailoring transformations
- Customer testimonials

#### 📘 Facebook Ads (Paid — High ROI for SL)

- Start with **LKR 500–1,000/day** budget
- Target: Sri Lanka, Ages 18–40, Interests: Fashion, Shopping
- Use carousel ads showing your products
- Link directly to your store

#### 🔍 Google (Free — Long Term)

Add these meta tags to improve your search ranking. In `website.html` `<head>`:
```html
<meta name="description" content="ALAN — Premium luxury fashion for men and women in Sri Lanka. Shop blazers, dresses, accessories. Secure LKR payments via PayHere.">
<meta name="keywords" content="fashion Sri Lanka, luxury clothing Colombo, men fashion LKR, women clothing Sri Lanka">
```

---

### 📧 Email Marketing (Free with Mailchimp)

You're already collecting newsletter emails in your admin panel. Use them!

1. Sign up free at [mailchimp.com](https://mailchimp.com)
2. Import subscriber emails from your admin panel
3. Send weekly emails:
   - New arrivals
   - Exclusive discount codes
   - Sale announcements

> [!NOTE]
> Email marketing has the **highest ROI** of any marketing channel — average LKR 40 return for every LKR 1 spent.

---

### 📈 Monthly Revenue Roadmap

| Month | Goal | Actions |
|---|---|---|
| **Month 1** | Get store live, first 5 orders | Launch on Instagram, tell friends & family, post daily |
| **Month 2** | 20+ orders/month | Start Facebook ads (LKR 500/day), partner with 1 influencer |
| **Month 3** | 50+ orders/month | Email campaigns, introduce new product lines |
| **Month 6** | LKR 150,000+/month revenue | Retargeting ads, loyalty program, expand catalogue |
| **Year 1** | Scale to full-time business | Hire a part-time packer, open social media shop |

---

## PART 3 — Legal & Admin (Sri Lanka)

> [!IMPORTANT]
> To run a legal business and use PayHere's live mode, you'll need:

| Requirement | How to Get It |
|---|---|
| **Business Registration** | Register at the Registrar of Companies (ROC) — around LKR 5,000 |
| **Bank Account** | Open a business account at any commercial bank |
| **PayHere Account** | Requires NIC + bank details (personal account works to start) |
| **Tax (VAT)** | Only required if annual turnover exceeds LKR 80 million — not relevant yet |

> [!TIP]
> You can start **as an individual** with just your NIC and personal bank account to register with PayHere. You don't need a registered company to begin.

---

## Quick Launch Checklist

- `[ ]` Rename `website.html` → `index.html`
- `[ ]` Sign up for Netlify and drag-and-drop your folder
- `[ ]` Register a `.lk` or `.com` domain
- `[ ]` Connect domain to Netlify
- `[ ]` Register at payhere.lk and get merchant credentials
- `[ ]` Update `PAYHERE_CONFIG` in `website.js` with real credentials and `sandbox: false`
- `[ ]` Add Google Analytics tracking code
- `[ ]` Create Instagram & TikTok pages for ALAN
- `[ ]` Post your first product photo
- `[ ]` Tell 20 people about your store 🎉

---

*Built with ALAN by Antigravity AI • Good luck with your store! 🚀*
