<div align="center">

<br/>

```
  █████╗  ██╗      █████╗  ███╗   ██╗
 ██╔══██╗ ██║     ██╔══██╗ ████╗  ██║
 ███████║ ██║     ███████║ ██╔██╗ ██║
 ██╔══██║ ██║     ██╔══██║ ██║╚████║
 ██║  ██║ ███████╗██║  ██║ ██║ ╚███║
 ╚═╝  ╚═╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚══╝
```

**Premium Fashion House — SS 2024 Collection**

<br/>

[![Live Store](https://img.shields.io/badge/🛍️_Live_Store-Visit_Now-c8a96e?style=for-the-badge&labelColor=0a0a0a)](https://aaidh.github.io/Alan-Clothing/website.html)
[![Admin Panel](https://img.shields.io/badge/🔧_Admin_Panel-Open-444444?style=for-the-badge&labelColor=0a0a0a)](https://aaidh.github.io/Alan-Clothing/admin.html)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github)](https://pages.github.com/)

<br/>

> *"Luxury essentials for the modern individual.*
> *Crafted to endure. Designed to inspire."*

<br/>

---

</div>

## ✦ What is ALAN?

**ALAN** is a fully functional luxury fashion e-commerce web store — built with zero frameworks, zero backend servers, and zero monthly cost. It delivers a premium shopping experience powered by hand-crafted HTML, CSS, and JavaScript, with real-time cloud data sync via **Firebase Firestore**.

From a cinematic hero section to a full checkout flow with PayHere payments, every detail is designed to feel premium and production-ready.

<br/>

## 🌐 Live URLs

| Page | URL |
|---|---|
| 🛍️ **Customer Store** | https://aaidh.github.io/Alan-Clothing/website.html |
| 🔧 **Admin Dashboard** | https://aaidh.github.io/Alan-Clothing/admin.html |

<br/>

---

## ✨ Feature Overview

### 🛒 Customer Storefront

| Feature | Description |
|---|---|
| **Cinematic Hero** | Full-screen imagery with animated scroll reveal effects |
| **Collections Grid** | Men's, Women's & Accessories with one-click filtering |
| **Product Catalogue** | 12+ luxury products with quick-view, size & colour selector |
| **Live Search** | Instant product search with animated results dropdown |
| **Shopping Cart** | Smooth slide-in bag with live subtotal & item controls |
| **Wishlist** | Save favourites, persisted across browser sessions |
| **User Auth** | Sign Up / Sign In with full form validation |
| **Full Checkout** | Shipping info → Coupon codes → PayHere payment gateway |
| **Newsletter** | Email capture with real-time cloud save to Firebase |
| **Contact Form** | Messages sent instantly to the Admin inbox via Firebase |
| **Responsive Design** | Mobile-first layout, works on all screen sizes |

<br/>

### 🔧 Admin Dashboard

| Feature | Description |
|---|---|
| **Secure Login** | Session-based authentication (username + password) |
| **Live Dashboard** | Real-time stats: products, orders, revenue, messages |
| **Product Manager** | Add, edit, hide or delete products — synced to store instantly |
| **Orders Tracker** | Full order history with customer details, items & totals |
| **Customer Accounts** | All registered users with order counts |
| **Newsletter List** | Live subscriber list pulled from Firebase |
| **Messages Inbox** | Contact form messages with read/unread status & email reply |
| **Cloud Sync** | All data loaded from Firebase — works on any computer globally |

<br/>

---

## ☁️ Firebase Cloud Integration

> This project uses **Google Firebase Firestore** as its real-time cloud database — meaning all customer interactions are stored in the cloud and accessible from any device, anywhere.

```
Customer fills form       Admin opens panel
on any device             on any device
      │                         │
      ▼                         ▼
 ┌─────────────────────────────────────┐
 │        Firebase Firestore           │
 │       (Google Cloud Database)       │
 │                                     │
 │  📁 products     📁 orders          │
 │  📁 subscribers  📁 messages        │
 │  📁 users                           │
 └─────────────────────────────────────┘
```

### What gets synced to the cloud:

| Collection | Trigger | Visible in Admin |
|---|---|---|
| `products` | Admin adds/edits product | ✅ Appears on store for all visitors |
| `orders` | Customer completes checkout | ✅ Any device, any browser |
| `subscribers` | Customer signs up to newsletter | ✅ Any device, any browser |
| `messages` | Customer sends contact form | ✅ Any device, any browser |
| `users` | Customer creates account | ✅ Any device, any browser |

<br/>

---

## 💳 Payment Integration

Payments are handled by **[PayHere](https://www.payhere.lk/)** — Sri Lanka's #1 payment gateway.

| Method | Status |
|---|---|
| Visa & Mastercard | ✅ Supported |
| American Express | ✅ Supported |
| Internet Banking | ✅ Supported |
| Cash Deposit | ✅ Supported |
| **Currency** | 🇱🇰 **LKR (Sri Lankan Rupee)** |

> **🧪 Test Mode Active** — Use card `4111 1111 1111 1111`, any future expiry, OTP: `123456`

<br/>

---

## 🗂️ Project Structure

```
Alan-Clothing/
│
├── 📄 index.html        ← GitHub Pages entry point (auto-redirect)
├── 📄 website.html      ← Full customer-facing storefront
├── 🎨 website.css       ← All storefront styles (44KB, pure CSS)
├── ⚡ website.js        ← Store logic + Firebase integration
└── 🔧 admin.html        ← Self-contained admin dashboard + Firebase sync
```

<br/>

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Vanilla CSS — custom properties, grid, flexbox, animations |
| **Logic** | Vanilla JavaScript ES6+ — no frameworks |
| **Database** | Firebase Firestore (Google Cloud) |
| **Fonts** | Playfair Display + DM Sans (Google Fonts) |
| **Icons** | Boxicons 2.1.4 |
| **Payment** | PayHere SDK (LKR) |
| **Hosting** | GitHub Pages |

<br/>

---

## 🔐 Admin Access

Navigate to [`/admin.html`](https://aaidh.github.io/Alan-Clothing/admin.html) and sign in:

```
Username : admin
Password : alan2024
```

> 💡 When you log in, the dashboard auto-syncs all data from Firebase Firestore in real time. No need to be on the same computer or browser — open it from your phone, your office PC, or anywhere.

<br/>

---

## 📦 Running Locally

No build step, no npm install. Just clone and open:

```bash
# Clone the repo
git clone https://github.com/aaidh/Alan-Clothing.git

# Open the store in your browser
start Alan-Clothing/website.html

# Open the admin panel
start Alan-Clothing/admin.html
```

> 💡 For best results, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.

<br/>

---

## 🎨 Design Highlights

- 🖤 **Luxury dark aesthetic** — `#0a0a0a` black base with gold `#c8a96e` accents
- ✍️ **Editorial typography** — Playfair Display headings, DM Sans body
- ✨ **Scroll-reveal animations** — every section animates on viewport entry
- 📱 **Fully responsive** — hamburger nav, stacked layouts, touch-friendly controls
- 🔐 **256-bit SSL** — PayHere secured checkout
- ♻️ **Free Returns** · 🌱 **Sustainably Made** · 🌍 **Ships Worldwide** · 📦 **2-Year Warranty**

<br/>

---

## 🧠 Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   GitHub Pages                       │
│                  (Static Hosting)                    │
│                                                      │
│  website.html ──► website.css                        │
│       │           website.js ──► Firebase Firestore  │
│       │                │              │              │
│  Customer UI      Auth, Cart,    Cloud Database      │
│                   Checkout,      (Real-time sync)    │
│                   Forms                              │
│                                                      │
│  admin.html ─────────────────► Firebase Firestore    │
│  (Admin UI)                   (Read all collections) │
└─────────────────────────────────────────────────────┘
```

<br/>

---

<div align="center">

Made with ♥ by **Alan Fashion House**

*© 2024 ALAN Fashion House. All rights reserved.*

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com)

</div>
