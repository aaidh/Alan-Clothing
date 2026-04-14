<div align="center">

<br/>

<img src="logo.svg" alt="ALAN Premium Fashion House" width="400" />

<br/>

[![Live Store](https://img.shields.io/badge/🛍️_Live_Store-Visit_Now-c8a96e?style=for-the-badge&labelColor=0a0a0a)](https://aaidh.github.io/Alan-Clothing/website.html)
[![Admin Panel](https://img.shields.io/badge/🔧_Admin_Panel-Open-444444?style=for-the-badge&labelColor=0a0a0a)](https://aaidh.github.io/Alan-Clothing/admin.html)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github)](https://pages.github.com/)

<br/>

> *"Luxury essentials for the modern individual.*
> *Crafted to endure. Designed to inspire."*

<br/><br/>

</div>

## ✦ &nbsp; Overview

**ALAN** is a fully functional luxury fashion e-commerce experience — built with zero frameworks, zero backend servers, and zero monthly cost. A premium shopping journey powered by hand-crafted HTML, CSS, and JavaScript, with real-time cloud data sync via **Firebase Firestore**.

Every detail is intentional — from the cinematic hero to a full checkout flow with real LKR payments via PayHere.

<br/>

## ✦ &nbsp; Live URLs

| Page | URL |
|---|---|
| 🛍️ Customer Store | https://aaidh.github.io/Alan-Clothing/website.html |
| 🔧 Admin Dashboard | https://aaidh.github.io/Alan-Clothing/admin.html |

<br/>

## ✦ &nbsp; The Store

| Feature | Description |
|---|---|
| Cinematic Hero | Full-screen imagery with scroll-reveal animations |
| Collections Grid | Men's, Women's & Accessories with instant filtering |
| Product Catalogue | 12+ luxury products with quick-view, size & colour selector |
| Live Search | Instant search with animated dropdown results |
| Shopping Cart | Slide-in bag with live subtotal and quantity controls |
| Wishlist | Save favourites, persisted across sessions |
| User Accounts | Sign Up & Sign In with full form validation |
| Checkout Flow | Shipping → Coupon codes → PayHere payment |
| Newsletter | Email capture saved to Firebase in real time |
| Contact Form | Messages delivered instantly to the Admin inbox |
| Responsive | Mobile-first — works perfectly on all screen sizes |

<br/>

## ✦ &nbsp; The Admin Panel

| Feature | Description |
|---|---|
| Secure Login | Session-based admin authentication |
| Live Dashboard | Real-time stats — products, orders, revenue, messages |
| Product Manager | Add, edit, hide or delete — syncs to store instantly |
| Orders Tracker | Full order history with customer details and totals |
| Customer Accounts | All registered users with order counts |
| Newsletter List | Live subscriber list from Firebase |
| Messages Inbox | Contact form messages with read/unread and email reply |
| Cloud Sync | Loads all data from Firebase — works from any device globally |

<br/>

## ✦ &nbsp; Firebase Cloud Integration

Every customer interaction is saved to **Google Firebase Firestore** and available instantly from any device — your phone, a different computer, anywhere.

```
Customer on any device              Admin on any device
        │                                   │
        ▼                                   ▼
  ┌─────────────────────────────────────────────┐
  │            Firebase Firestore               │
  │                                             │
  │   📁 products     📁 orders                 │
  │   📁 subscribers  📁 messages               │
  │   📁 users                                  │
  └─────────────────────────────────────────────┘
```

| Collection | Written When | Admin Sees It |
|---|---|---|
| `products` | Admin adds via dashboard | Appears on store for all visitors |
| `orders` | Customer completes checkout | From any device, any browser |
| `subscribers` | Customer signs up to newsletter | From any device, any browser |
| `messages` | Customer sends contact form | From any device, any browser |
| `users` | Customer creates account | From any device, any browser |

<br/>

## ✦ &nbsp; Payment Integration

Powered by **[PayHere](https://www.payhere.lk/)** — Sri Lanka's leading payment gateway — in LKR.

| Method | Supported |
|---|---|
| Visa & Mastercard | ✅ |
| American Express | ✅ |
| Internet Banking | ✅ |
| Cash Deposit | ✅ |
| Currency | 🇱🇰 LKR |

> **Test Mode Active** — Card `4111 1111 1111 1111` · Any future expiry · OTP `123456`

<br/>

## ✦ &nbsp; Project Structure

```
Alan-Clothing/
│
├── index.html        Entry point — auto redirects to store
├── website.html      Customer-facing storefront
├── website.css       All styles — pure CSS, 44KB
├── website.js        Store logic + Firebase integration
└── admin.html        Admin dashboard — self-contained
```

<br/>

## ✦ &nbsp; Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 Semantic |
| Styling | Vanilla CSS — custom properties, grid, flexbox |
| Logic | Vanilla JavaScript ES6+ |
| Database | Firebase Firestore |
| Fonts | Playfair Display & DM Sans |
| Icons | Boxicons 2.1.4 |
| Payments | PayHere SDK |
| Hosting | GitHub Pages |

<br/>

## ✦ &nbsp; Admin Access

Open [`/admin.html`](https://aaidh.github.io/Alan-Clothing/admin.html) and sign in with the default credentials.

```
Username   →   admin
Password   →   alan2024
```

> The dashboard loads all live data from Firebase on login. Open it from any browser on any device and your orders, messages and subscribers are all there.

<br/>

## ✦ &nbsp; Running Locally

No build steps. No installs. Just clone and open.

```bash
git clone https://github.com/aaidh/Alan-Clothing.git
```

Open `website.html` in your browser, or use the VS Code **Live Server** extension for the best experience.

<br/>

## ✦ &nbsp; Design Notes

The aesthetic is built around a dark luxury palette — `#0a0a0a` black with gold `#c8a96e` accents, editorial typography in **Playfair Display** and **DM Sans**, and scroll-reveal animations on every section. The goal is a shopping experience that feels as premium as the clothing it sells.

<br/>

<div align="center">

<br/>

*© 2024 ALAN Fashion House. All rights reserved.*

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com)

</div>
