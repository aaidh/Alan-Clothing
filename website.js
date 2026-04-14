'use strict';

/* ============================================================
   PAYHERE CONFIGURATION
   ─────────────────────────────────────────────────────────────
   HOW TO GO LIVE:
   1. Sign up free at https://www.payhere.lk
   2. Get your Merchant ID from the PayHere dashboard
   3. Set sandbox: false and replace merchant_id
   4. For production: move hash generation to a backend server
   ============================================================ */
const PAYHERE_CONFIG = {
    sandbox:         true,
    merchant_id:     '1219964',        // ← Replace with your PayHere Merchant ID
    merchant_secret: 'YOUR_SECRET',    // ← Replace with your Merchant Secret (use backend in production)
    return_url:      window.location.href,
    cancel_url:      window.location.href,
    notify_url:      '',               // ← Set to your webhook URL for server-side confirmation
};

/* ============================================================
   MD5 HASH — Required by PayHere
   ============================================================ */
function md5(str) {
    function safeAdd(x, y) { var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF); }
    function bitRotateLeft(num, cnt) { return(num<<cnt)|(num>>>(32-cnt)); }
    function md5cmn(q,a,b,x,s,t){ return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b); }
    function md5ff(a,b,c,d,x,s,t){ return md5cmn((b&c)|((~b)&d),a,b,x,s,t); }
    function md5gg(a,b,c,d,x,s,t){ return md5cmn((b&d)|(c&(~d)),a,b,x,s,t); }
    function md5hh(a,b,c,d,x,s,t){ return md5cmn(b^c^d,a,b,x,s,t); }
    function md5ii(a,b,c,d,x,s,t){ return md5cmn(c^(b|(~d)),a,b,x,s,t); }
    function md5blks(s) { var i,blks=[];for(i=0;i<s.length+64;i+=64)blks[i>>6]=0;for(i=0;i<s.length;i++)blks[i>>6]|=(s.charCodeAt(i)&0xFF)<<((i%4)*8);blks[s.length>>6]|=0x80<<((s.length%4)*8);blks[(((s.length+64)>>>9)<<4)+14]=s.length*8;return blks; }
    var i,b=[],x=md5blks(str),a=1732584193,bb=-271733879,c=-1732584194,d=271733878;
    for(i=0;i<x.length;i+=16){var oA=a,oB=bb,oC=c,oD=d;a=md5ff(a,bb,c,d,x[i+0],7,-680876936);d=md5ff(d,a,bb,c,x[i+1],12,-389564586);c=md5ff(c,d,a,bb,x[i+2],17,606105819);bb=md5ff(bb,c,d,a,x[i+3],22,-1044525330);a=md5ff(a,bb,c,d,x[i+4],7,-176418897);d=md5ff(d,a,bb,c,x[i+5],12,1200080426);c=md5ff(c,d,a,bb,x[i+6],17,-1473231341);bb=md5ff(bb,c,d,a,x[i+7],22,-45705983);a=md5ff(a,bb,c,d,x[i+8],7,1770035416);d=md5ff(d,a,bb,c,x[i+9],12,-1958414417);c=md5ff(c,d,a,bb,x[i+10],17,-42063);bb=md5ff(bb,c,d,a,x[i+11],22,-1990404162);a=md5ff(a,bb,c,d,x[i+12],7,1804603682);d=md5ff(d,a,bb,c,x[i+13],12,-40341101);c=md5ff(c,d,a,bb,x[i+14],17,-1502002290);bb=md5ff(bb,c,d,a,x[i+15],22,1236535329);a=md5gg(a,bb,c,d,x[i+1],5,-165796510);d=md5gg(d,a,bb,c,x[i+6],9,-1069501632);c=md5gg(c,d,a,bb,x[i+11],14,643717713);bb=md5gg(bb,c,d,a,x[i+0],20,-373897302);a=md5gg(a,bb,c,d,x[i+5],5,-701558691);d=md5gg(d,a,bb,c,x[i+10],9,38016083);c=md5gg(c,d,a,bb,x[i+15],14,-660478335);bb=md5gg(bb,c,d,a,x[i+4],20,-405537848);a=md5gg(a,bb,c,d,x[i+9],5,568446438);d=md5gg(d,a,bb,c,x[i+14],9,-1019803690);c=md5gg(c,d,a,bb,x[i+3],14,-187363961);bb=md5gg(bb,c,d,a,x[i+8],20,1163531501);a=md5gg(a,bb,c,d,x[i+13],5,-1444681467);d=md5gg(d,a,bb,c,x[i+2],9,-51403784);c=md5gg(c,d,a,bb,x[i+7],14,1735328473);bb=md5gg(bb,c,d,a,x[i+12],20,-1926607734);a=md5hh(a,bb,c,d,x[i+5],4,-378558);d=md5hh(d,a,bb,c,x[i+8],11,-2022574463);c=md5hh(c,d,a,bb,x[i+11],16,1839030562);bb=md5hh(bb,c,d,a,x[i+14],23,-35309556);a=md5hh(a,bb,c,d,x[i+1],4,-1530992060);d=md5hh(d,a,bb,c,x[i+4],11,1272893353);c=md5hh(c,d,a,bb,x[i+7],16,-155497632);bb=md5hh(bb,c,d,a,x[i+10],23,-1094730640);a=md5hh(a,bb,c,d,x[i+13],4,681279174);d=md5hh(d,a,bb,c,x[i+0],11,-358537222);c=md5hh(c,d,a,bb,x[i+3],16,-722521979);bb=md5hh(bb,c,d,a,x[i+6],23,76029189);a=md5hh(a,bb,c,d,x[i+9],4,-640364487);d=md5hh(d,a,bb,c,x[i+12],11,-421815835);c=md5hh(c,d,a,bb,x[i+15],16,530742520);bb=md5hh(bb,c,d,a,x[i+2],23,-995338651);a=md5ii(a,bb,c,d,x[i+0],6,-198630844);d=md5ii(d,a,bb,c,x[i+7],10,1126891415);c=md5ii(c,d,a,bb,x[i+14],15,-1416354905);bb=md5ii(bb,c,d,a,x[i+5],21,-57434055);a=md5ii(a,bb,c,d,x[i+12],6,1700485571);d=md5ii(d,a,bb,c,x[i+3],10,-1894986606);c=md5ii(c,d,a,bb,x[i+10],15,-1051523);bb=md5ii(bb,c,d,a,x[i+1],21,-2054922799);a=md5ii(a,bb,c,d,x[i+8],6,1873313359);d=md5ii(d,a,bb,c,x[i+15],10,-30611744);c=md5ii(c,d,a,bb,x[i+6],15,-1560198380);bb=md5ii(bb,c,d,a,x[i+13],21,1309151649);a=md5ii(a,bb,c,d,x[i+4],6,-145523070);d=md5ii(d,a,bb,c,x[i+11],10,-1120210379);c=md5ii(c,d,a,bb,x[i+2],15,718787259);bb=md5ii(bb,c,d,a,x[i+9],21,-343485551);a=safeAdd(a,oA);bb=safeAdd(bb,oB);c=safeAdd(c,oC);d=safeAdd(d,oD);}
    function rhex(n){ var h='0123456789abcdef',r='';for(var j=0;j<4;j++)r+=h[(n>>(j*8+4))&0x0F]+h[(n>>(j*8))&0x0F];return r; }
    return rhex(a)+rhex(bb)+rhex(c)+rhex(d);
}

function generatePayhereHash(merchantId, orderId, amount, currency, merchantSecret) {
    const hashedSecret = md5(merchantSecret).toUpperCase();
    return md5(merchantId + orderId + amount + currency + hashedSecret).toUpperCase();
}

/* ============================================================
   CURRENCY HELPER
   ============================================================ */
function formatLKR(amount) {
    return 'LKR\u00a0' + Math.round(amount).toLocaleString('en-US');
}

/* ============================================================
   COUPON SYSTEM
   ============================================================ */
const COUPONS = {
    'WELCOME10': { discount: 0.10, type: 'percent', desc: '10% Welcome Discount' },
    'ALAN15':    { discount: 0.15, type: 'percent', desc: '15% Special Offer'    },
    'SAVE500':   { discount: 500,  type: 'fixed',   desc: 'LKR 500 Off'          },
};
let _appliedCoupon = null;

/* ============================================================
   PRODUCT CATALOG — Affordable Premium LKR Prices
   ============================================================ */
const PRODUCTS = [
    {id:1,name:'The Woolmark Blazer',category:'men',price:18500,originalPrice:null,image:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop&auto=format',rating:4.8,reviews:124,badge:'Bestseller',sizes:['XS','S','M','L','XL','XXL'],colors:['#1a1a2e','#2c1810','#1a2c1a'],colorNames:['Midnight Navy','Rich Chocolate','Forest Green'],description:'Crafted from premium Woolmark-certified wool, our signature blazer features a tailored silhouette with hand-sewn lapels and a fully lined interior.'},
    {id:2,name:'Heritage Slim Trouser',category:'men',price:8900,originalPrice:11500,image:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop&auto=format',rating:4.6,reviews:89,badge:'Sale',sizes:['28','30','32','34','36','38'],colors:['#111111','#3d3d3d','#2c1810'],colorNames:['Onyx','Charcoal','Chocolate'],description:'Slim-cut trousers in a luxurious wool-blend fabric. Features a clean, tailored silhouette with subtle texture for a refined yet versatile look.'},
    {id:3,name:'Italian Oxford Shirt',category:'men',price:5900,originalPrice:null,image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop&auto=format',rating:4.9,reviews:203,badge:'Bestseller',sizes:['XS','S','M','L','XL','XXL'],colors:['#ffffff','#c8a96e','#b0c4de'],colorNames:['White','Oat Gold','Sky Blue'],description:'Woven from 100% Italian cotton in a smooth oxford weave. Relaxed yet polished — ideal for day-to-evening dressing.'},
    {id:4,name:'Cashmere Overcoat',category:'men',price:34500,originalPrice:null,image:'https://images.unsplash.com/photo-1548883354-7622d8ee7b82?w=600&h=750&fit=crop&auto=format',rating:5.0,reviews:67,badge:'New',sizes:['XS','S','M','L','XL'],colors:['#1a1a1a','#3a3028','#1a1a2e'],colorNames:['Jet Black','Camel','Deep Navy'],description:'A beautifully draped overcoat in pure Scottish cashmere. The weightless warmth of cashmere meets precision tailoring in this essential outerwear piece.'},
    {id:5,name:'Merino Rollneck',category:'men',price:7500,originalPrice:null,image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop&auto=format',rating:4.7,reviews:156,badge:null,sizes:['XS','S','M','L','XL','XXL'],colors:['#f0ebe3','#111111','#1a2c1a'],colorNames:['Ecru','Ebony','Forest'],description:'Super-fine merino wool in a classic rollneck silhouette. Breathable, non-itchy and effortlessly refined.'},
    {id:6,name:'Signature Chino',category:'men',price:6900,originalPrice:null,image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop&auto=format',rating:4.5,reviews:178,badge:null,sizes:['28','30','32','34','36'],colors:['#c8b89a','#3d3d3d','#1a2c1a'],colorNames:['Sand','Slate','Olive'],description:'Our best-loved trouser, cut in premium stretch cotton for effortless comfort.'},
    {id:7,name:'Tailored Power Blazer',category:'women',price:16500,originalPrice:null,image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&h=750&fit=crop&auto=format',rating:4.9,reviews:92,badge:'New',sizes:['XS','S','M','L','XL'],colors:['#111111','#f0ebe3','#1a1a2e'],colorNames:['Noir','Ivory','Navy'],description:'A statement blazer in structured crepe fabric with a padded shoulder and nipped waist for an empowered silhouette.'},
    {id:8,name:'Fluid Silk Midi Dress',category:'women',price:12900,originalPrice:16500,image:'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=750&fit=crop&auto=format',rating:4.8,reviews:113,badge:'Sale',sizes:['XS','S','M','L','XL'],colors:['#c8a96e','#2c1810','#1a1a2e'],colorNames:['Champagne','Cinnamon','Midnight'],description:'Luxuriously draped pure silk in a bias-cut midi silhouette. The fluid fabric moves beautifully, catching the light with understated glamour.'},
    {id:9,name:'Wide-Leg Wool Trouser',category:'women',price:8500,originalPrice:null,image:'https://images.unsplash.com/photo-1529751227737-a4398c54d175?w=600&h=750&fit=crop&auto=format',rating:4.6,reviews:74,badge:null,sizes:['XS','S','M','L','XL'],colors:['#1a1a1a','#3a3028','#f0ebe3'],colorNames:['Ebony','Camel','Chalk'],description:'Elevated wide-leg trousers in a premium wool blend with a high-rise waistband and voluminous leg.'},
    {id:10,name:'Classic Trench Coat',category:'women',price:28000,originalPrice:null,image:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=750&fit=crop&auto=format',rating:5.0,reviews:201,badge:'Bestseller',sizes:['XS','S','M','L','XL'],colors:['#c8b89a','#1a1a1a','#2c1810'],colorNames:['Camel','Noir','Cognac'],description:'The definitive outerwear investment. Water-resistant cotton gabardine with a belted waist and our signature ALAN buckle.'},
    {id:11,name:'Alan Leather Tote',category:'accessories',price:19900,originalPrice:null,image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop&auto=format',rating:4.9,reviews:55,badge:'New',sizes:['One Size'],colors:['#111111','#2c1810','#c8b89a'],colorNames:['Noir','Cognac','Tan'],description:'Structured in full-grain Italian leather. Unlined interior, detachable zip pouch, and a vintage brass clasp.'},
    {id:12,name:'Suede Chelsea Boot',category:'accessories',price:14900,originalPrice:19500,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop&auto=format',rating:4.7,reviews:88,badge:'Sale',sizes:['UK 6','UK 7','UK 8','UK 9','UK 10','UK 11'],colors:['#3a3028','#111111','#2c1810'],colorNames:['Sand Suede','Black Suede','Tan Leather'],description:'The iconic Chelsea boot, refined by ALAN. Crafted in premium suede with a crepe sole and elastic gusset for an effortless fit.'}
];

/* ============================================================
   CUSTOM & HIDDEN PRODUCTS
   ============================================================ */
function getCustomProducts() { return JSON.parse(localStorage.getItem('alan_custom_products') || '[]'); }
function getHiddenProducts() { return JSON.parse(localStorage.getItem('alan_hidden_products') || '[]'); }
function getAllProducts() {
    const hidden = getHiddenProducts();
    return [...PRODUCTS.filter(p => !hidden.includes(p.id)), ...getCustomProducts()];
}

/* ============================================================
   AUTH MANAGER
   ============================================================ */
const Auth = {
    USERS_KEY:'alan_users', USER_KEY:'alan_user',
    getUsers()   { return JSON.parse(localStorage.getItem(this.USERS_KEY)||'[]'); },
    saveUsers(u) { localStorage.setItem(this.USERS_KEY,JSON.stringify(u)); },
    getUser()    { return JSON.parse(localStorage.getItem(this.USER_KEY)); },
    isLoggedIn() { return !!this.getUser(); },
    signUp(name,email,password) {
        const users = this.getUsers();
        if (users.find(u=>u.email.toLowerCase()===email.toLowerCase())) return {ok:false,error:'An account with this email already exists.'};
        const user = {name,email:email.toLowerCase(),password,createdAt:Date.now(),coupon:'WELCOME10'};
        users.push(user); this.saveUsers(users);
        localStorage.setItem(this.USER_KEY,JSON.stringify({name,email:email.toLowerCase()}));
        UI.updateAuthUI(); return {ok:true};
    },
    signIn(email,password) {
        const user = this.getUsers().find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.password===password);
        if (!user) return {ok:false,error:'Invalid email or password.'};
        localStorage.setItem(this.USER_KEY,JSON.stringify({name:user.name,email:user.email}));
        UI.updateAuthUI(); return {ok:true};
    },
    signOut() { localStorage.removeItem(this.USER_KEY); UI.updateAuthUI(); UI.closeAll(); UI.showToast('Signed out successfully','success'); }
};

/* ============================================================
   CART MANAGER
   ============================================================ */
const Cart = {
    KEY:'alan_cart',
    get()      { return JSON.parse(localStorage.getItem(this.KEY)||'[]'); },
    save(c)    { localStorage.setItem(this.KEY,JSON.stringify(c)); },
    clear()    { localStorage.removeItem(this.KEY); UI.updateCartBadge(); },
    add(productId,size,color,colorName) {
        const product = getAllProducts().find(p=>p.id===productId); if(!product)return;
        const cart=this.get(), idx=cart.findIndex(i=>i.productId===productId&&i.size===size&&i.color===color);
        if(idx>-1) cart[idx].qty=Math.min(cart[idx].qty+1,10);
        else cart.push({cartId:Date.now()+Math.random(),productId,size,color,colorName,qty:1,name:product.name,price:product.price,image:product.image});
        this.save(cart); UI.updateCartBadge(); UI.renderCart();
    },
    remove(cartId)     { this.save(this.get().filter(i=>i.cartId!==cartId)); UI.updateCartBadge(); UI.renderCart(); },
    updateQty(cartId,delta) { const c=this.get(),i=c.find(i=>i.cartId===cartId); if(i){i.qty=Math.max(1,Math.min(i.qty+delta,10));this.save(c);UI.renderCart();} },
    getTotal()  { return this.get().reduce((s,i)=>s+i.price*i.qty,0); },
    getCount()  { return this.get().reduce((s,i)=>s+i.qty,0); }
};

/* ============================================================
   WISHLIST MANAGER
   ============================================================ */
const Wishlist = {
    KEY:'alan_wishlist',
    get()      { return JSON.parse(localStorage.getItem(this.KEY)||'[]'); },
    toggle(id) { const l=this.get(),idx=l.indexOf(id); if(idx>-1)l.splice(idx,1);else l.push(id); localStorage.setItem(this.KEY,JSON.stringify(l)); UI.updateWishlistBadge(); return idx===-1; },
    has(id)    { return this.get().includes(id); },
    count()    { return this.get().length; }
};

/* ============================================================
   UI MANAGER
   ============================================================ */
const UI = {
    _searchOpen:false, _userMenuOpen:false,
    openModal(id)  { document.getElementById(id).classList.add('show'); document.getElementById('overlay').classList.add('show'); document.body.style.overflow='hidden'; },
    closeModal(id) { document.getElementById(id).classList.remove('show'); if(!document.querySelectorAll('.modal.show').length&&!document.getElementById('cart-sidebar').classList.contains('open')){document.getElementById('overlay').classList.remove('show');document.body.style.overflow='';} },
    switchModal(a,b){ this.closeModal(a); setTimeout(()=>this.openModal(b),200); },
    closeAll()   { document.querySelectorAll('.modal.show').forEach(m=>m.classList.remove('show')); this.closeCart(); document.getElementById('overlay').classList.remove('show'); document.body.style.overflow=''; this._userMenuOpen=false; document.getElementById('user-dropdown').classList.add('hidden'); },
    openCart()   { document.getElementById('cart-sidebar').classList.add('open'); document.getElementById('overlay').classList.add('show'); document.body.style.overflow='hidden'; this.renderCart(); },
    closeCart()  { document.getElementById('cart-sidebar').classList.remove('open'); if(!document.querySelectorAll('.modal.show').length){document.getElementById('overlay').classList.remove('show');document.body.style.overflow='';} },

    toggleSearch() {
        this._searchOpen=!this._searchOpen;
        const bar=document.getElementById('search-bar');
        bar.classList.remove('hidden'); bar.classList.toggle('show',this._searchOpen);
        if(!this._searchOpen) document.getElementById('search-results').classList.add('hidden');
        else setTimeout(()=>document.getElementById('search-input').focus(),50);
    },
    handleSearch(val) {
        const results=document.getElementById('search-results');
        if(!val.trim()){results.classList.add('hidden');return;}
        const matches=getAllProducts().filter(p=>p.name.toLowerCase().includes(val.toLowerCase())||p.category.includes(val.toLowerCase())).slice(0,5);
        if(!matches.length){results.classList.add('hidden');return;}
        results.classList.remove('hidden');
        results.innerHTML=matches.map(p=>`<div class="search-result-item" onclick="openQuickView(${p.id});UI.toggleSearch()"><div class="search-result-img" style="background-image:url('${p.image}')"></div><div><div class="search-result-name">${p.name}</div><div class="search-result-price">${formatLKR(p.price)}</div></div></div>`).join('');
    },
    toggleUserMenu() { const user=Auth.getUser(); if(!user){this.openModal('signin-modal');return;} this._userMenuOpen=!this._userMenuOpen; document.getElementById('user-dropdown').classList.toggle('hidden',!this._userMenuOpen); },
    toggleWishlistPanel() { const c=Wishlist.count(); this.showToast(c?`${c} item${c>1?'s':''} in your wishlist`:'Your wishlist is empty',c?'success':'default'); },
    togglePassword(id) { const inp=document.getElementById(id); const h=inp.type==='password'; inp.type=h?'text':'password'; const b=inp.nextElementSibling; if(b){const i=b.querySelector('i');if(i)i.className=h?'bx bx-show':'bx bx-hide';} },
    toggleMobileMenu() { document.getElementById('nav-menu').classList.toggle('open'); },
    closeMobileMenu()  { document.getElementById('nav-menu').classList.remove('open'); },
    updateAuthUI() {
        const user=Auth.getUser(), btn=document.getElementById('user-nav-btn'), gr=document.getElementById('user-greeting');
        if(user){btn.style.color='var(--gold)';if(gr)gr.textContent=`Hello, ${user.name.split(' ')[0]}`;}
        else{btn.style.color='';if(gr)gr.textContent='';}
    },
    updateCartBadge() { const c=Cart.getCount(),b=document.getElementById('cart-badge'); b.textContent=c; b.classList.toggle('hidden',c===0); },
    updateWishlistBadge() { const c=Wishlist.count(),b=document.getElementById('wishlist-badge'); b.textContent=c; b.classList.toggle('hidden',c===0); },

    renderCart() {
        const cart=Cart.get(), container=document.getElementById('cart-items'), totalEl=document.getElementById('cart-total'), countLabel=document.getElementById('cart-count-label'), btn=document.getElementById('checkout-btn'), count=Cart.getCount();
        countLabel.textContent=count?`(${count})`:'';
        if(!cart.length){container.innerHTML=`<div class="cart-empty"><i class='bx bx-shopping-bag'></i><h4>Your bag is empty</h4><p>Add some pieces to get started</p></div>`;totalEl.textContent=formatLKR(0);if(btn)btn.disabled=true;return;}
        if(btn)btn.disabled=false;
        container.innerHTML=cart.map(item=>`<div class="cart-item"><div class="cart-item-img" style="background-image:url('${item.image}')"></div><div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-meta">Size: ${item.size}${item.colorName?` · ${item.colorName}`:''}</div><div class="cart-item-controls"><div class="qty-controls"><button class="qty-btn" onclick="Cart.updateQty(${item.cartId},-1)" aria-label="Decrease">−</button><span class="qty-num">${item.qty}</span><button class="qty-btn" onclick="Cart.updateQty(${item.cartId},1)" aria-label="Increase">+</button></div><span class="cart-item-price">${formatLKR(item.price*item.qty)}</span></div></div><button class="cart-item-remove" onclick="Cart.remove(${item.cartId})" aria-label="Remove"><i class='bx bx-trash'></i></button></div>`).join('');
        totalEl.textContent=formatLKR(Cart.getTotal());
    },

    openCheckout() {
        if(!Cart.get().length) return;
        if(!Auth.isLoggedIn()){this.showToast('Please sign in to checkout','default');this.closeCart();setTimeout(()=>this.openModal('signin-modal'),300);return;}
        this.closeCart();
        _appliedCoupon=null;
        const ci=document.getElementById('coupon-input'),cm=document.getElementById('coupon-msg'),dr=document.getElementById('co-discount-row');
        if(ci)ci.value=''; if(cm){cm.textContent='';cm.style.color='';} if(dr)dr.style.display='none';
        this.renderCheckoutSummary();
        document.getElementById('checkout-success').classList.add('hidden');
        document.getElementById('checkout-form-wrap').style.display='';
        const user=Auth.getUser();
        if(user){const nm=user.name.split(' ');document.getElementById('ship-fname').value=nm[0]||'';document.getElementById('ship-lname').value=nm.slice(1).join(' ')||'';document.getElementById('ship-email').value=user.email||'';}
        this.openModal('checkout-modal');
    },

    renderCheckoutSummary() {
        const cart=Cart.get();
        document.getElementById('checkout-order-items').innerHTML=cart.map(i=>`<div class="co-item"><div class="co-item-img" style="background-image:url('${i.image}')"></div><div class="co-item-info"><div class="co-item-name">${i.name}</div><div class="co-item-meta">Size: ${i.size} · Qty: ${i.qty}</div></div><div class="co-item-price">${formatLKR(i.price*i.qty)}</div></div>`).join('');
        this._recalcTotals();
    },

    _recalcTotals() {
        const sub=Cart.getTotal(), express=document.querySelector('input[name="shipping"][value="express"]')?.checked, shipping=express?3900:0;
        let disc=0;
        if(_appliedCoupon){const c=_appliedCoupon.coupon;disc=c.type==='percent'?Math.round(sub*c.discount):Math.min(c.discount,sub);}
        document.getElementById('co-subtotal').textContent=formatLKR(sub);
        document.getElementById('co-shipping').textContent=shipping?formatLKR(shipping):'Free';
        document.getElementById('co-total').textContent=formatLKR(Math.max(0,sub-disc+shipping));
        const dr=document.getElementById('co-discount-row');
        if(disc>0&&dr){dr.style.display='';document.getElementById('co-discount').textContent='−'+formatLKR(disc);document.getElementById('co-coupon-label').textContent=`(${_appliedCoupon.code})`;}
        else if(dr)dr.style.display='none';
    },

    updateShippingCost() { this._recalcTotals(); },

    subscribeNewsletter(e) {
        e.preventDefault();
        const email=document.getElementById('newsletter-email').value.trim(); if(!email)return;
        const subs=JSON.parse(localStorage.getItem('alan_subscribers')||'[]');
        if(!subs.find(s=>s.email===email.toLowerCase())){subs.push({email:email.toLowerCase(),date:new Date().toISOString()});localStorage.setItem('alan_subscribers',JSON.stringify(subs));}
        this.showToast('🎉 Subscribed! Use code ALAN15 for 15% off.','success',5000);
        document.getElementById('newsletter-form').reset();
    },

    submitContactForm(e) {
        e.preventDefault();
        const name    = document.getElementById('contact-name')?.value.trim()    || '';
        const email   = document.getElementById('contact-email')?.value.trim()   || '';
        const subject = document.getElementById('contact-subject')?.value.trim() || '';
        const message = document.getElementById('contact-message')?.value.trim() || '';
        // Save message to localStorage
        const msgs = JSON.parse(localStorage.getItem('alan_messages') || '[]');
        msgs.push({ id: Date.now(), name, email, subject, message, date: new Date().toISOString(), read: false });
        localStorage.setItem('alan_messages', JSON.stringify(msgs));
        this.showToast('Message sent! We\'ll reply within 24 hours.','success');
        document.getElementById('contact-form').reset();
    },

    showToast(message,type='default',duration=3500) {
        const t=document.getElementById('toast'), icon=type==='success'?'bx-check-circle':type==='error'?'bx-x-circle':'bx-info-circle';
        t.innerHTML=`<i class='bx ${icon}'></i><span>${message}</span>`;
        t.className=`toast ${type}`; void t.offsetWidth; t.classList.add('show');
        clearTimeout(t._timeout); t._timeout=setTimeout(()=>t.classList.remove('show'),duration);
    }
};

/* ============================================================
   CHECKOUT MANAGER — PayHere Integration
   ============================================================ */
const Checkout = {
    _pendingOrder: null,

    applyCoupon() {
        const input=document.getElementById('coupon-input'), msg=document.getElementById('coupon-msg');
        const code=(input?.value||'').trim().toUpperCase();
        if(!code){msg.textContent='Please enter a coupon code.';msg.style.color='var(--error)';return;}
        const coupon=COUPONS[code];
        if(!coupon){msg.textContent='✗ Invalid coupon code.';msg.style.color='var(--error)';_appliedCoupon=null;return;}
        _appliedCoupon={code,coupon};
        const dt=coupon.type==='percent'?`${coupon.discount*100}% off`:`LKR ${coupon.discount.toLocaleString()} off`;
        msg.textContent=`✓ ${coupon.desc} applied — ${dt}`;
        msg.style.color='var(--success)';
        UI._recalcTotals();
    },

    validate() {
        let ok=true;
        const required=[
            ['ship-fname','ship-fname-err','First name is required'],
            ['ship-lname','ship-lname-err','Last name is required'],
            ['ship-email','ship-email-err','Email is required'],
            ['ship-address','ship-address-err','Shipping address is required'],
        ];
        required.forEach(([f,e,m])=>{const el=document.getElementById(f),err=document.getElementById(e);if(!el||!err)return;if(!el.value.trim()){err.textContent=m;ok=false;}else err.textContent='';});
        return ok;
    },

    placeOrder() {
        if(!this.validate()) return;

        const btn=document.getElementById('place-order-btn');
        btn.disabled=true;
        btn.innerHTML='<i class="bx bx-loader-circle bx-spin"></i><span>Connecting to PayHere...</span>';

        const express   = document.querySelector('input[name="shipping"][value="express"]')?.checked;
        const shipping  = express ? 3900 : 0;
        const subtotal  = Cart.getTotal();
        let   discount  = 0;
        if(_appliedCoupon){const c=_appliedCoupon.coupon;discount=c.type==='percent'?Math.round(subtotal*c.discount):Math.min(c.discount,subtotal);}
        const total = Math.max(0, subtotal - discount + shipping);
        const orderId = 'ALAN-' + Date.now();
        const user = Auth.getUser();

        // Build order record (pending payment confirmation)
        this._pendingOrder = {
            id:           orderId,
            date:         new Date().toISOString(),
            user:         user,
            items:        Cart.get(),
            subtotal,
            discount,
            coupon:       _appliedCoupon?.code || null,
            shippingMethod: express ? 'Express (2-3 days)' : 'Standard (5-7 days)',
            shippingCost:   shipping,
            total,
            shippingAddress: {
                firstName: document.getElementById('ship-fname').value,
                lastName:  document.getElementById('ship-lname').value,
                email:     document.getElementById('ship-email').value,
                address:   document.getElementById('ship-address').value,
                city:      document.getElementById('ship-city').value,
                zip:       document.getElementById('ship-zip').value,
            },
            status: 'pending'
        };

        // PayHere payment object
        const amountFormatted = total.toFixed(2);
        const hash = generatePayhereHash(
            PAYHERE_CONFIG.merchant_id,
            orderId,
            amountFormatted,
            'LKR',
            PAYHERE_CONFIG.merchant_secret
        );

        const payment = {
            sandbox:     PAYHERE_CONFIG.sandbox,
            merchant_id: PAYHERE_CONFIG.merchant_id,
            return_url:  PAYHERE_CONFIG.return_url,
            cancel_url:  PAYHERE_CONFIG.cancel_url,
            notify_url:  PAYHERE_CONFIG.notify_url,
            order_id:    orderId,
            items:       Cart.get().map(i=>i.name).join(', ').slice(0,200),
            amount:      amountFormatted,
            currency:    'LKR',
            hash:        hash,
            first_name:  document.getElementById('ship-fname').value,
            last_name:   document.getElementById('ship-lname').value,
            email:       document.getElementById('ship-email').value,
            phone:       '+94773987617',
            address:     document.getElementById('ship-address').value,
            city:        document.getElementById('ship-city').value || 'Colombo',
            country:     'Sri Lanka',
        };

        // Start PayHere payment
        try {
            if (typeof payhere !== 'undefined') {
                payhere.startPayment(payment);
            } else {
                // PayHere SDK not loaded (e.g., offline) — fall back to demo mode
                this._simulatePayment(orderId);
            }
        } catch(err) {
            console.warn('PayHere error:', err);
            this._simulatePayment(orderId);
        }

        btn.disabled=false;
        btn.innerHTML='<i class="bx bx-credit-card"></i><span>Pay with PayHere</span>';
    },

    _completeOrder(orderId) {
        if (!this._pendingOrder) return;
        const order = {...this._pendingOrder, status: 'paid', payhere_order_id: orderId};
        const allOrders = JSON.parse(localStorage.getItem('alan_orders')||'[]');
        allOrders.push(order);
        localStorage.setItem('alan_orders', JSON.stringify(allOrders));

        document.getElementById('order-number').textContent = order.id;
        document.getElementById('checkout-form-wrap').style.display = 'none';
        document.getElementById('checkout-success').classList.remove('hidden');
        _appliedCoupon = null;
        this._pendingOrder = null;
        Cart.clear();
        UI.renderCart();
        UI.updateCartBadge();
    },

    _simulatePayment(orderId) {
        // Fallback: simulate payment after 2s (for local file:// testing)
        UI.showToast('Simulating payment (PayHere not connected yet)...', 'default', 2500);
        setTimeout(() => this._completeOrder(orderId), 2500);
    }
};

/* PayHere Event Handlers — must be global */
function initPayhere() {
    if (typeof payhere === 'undefined') return;
    payhere.onCompleted = function(orderId) {
        Checkout._completeOrder(orderId);
        UI.showToast('Payment successful! 🎉', 'success', 5000);
    };
    payhere.onDismissed = function() {
        UI.showToast('Payment was cancelled.', 'default');
    };
    payhere.onError = function(error) {
        console.error('PayHere error:', error);
        UI.showToast('Payment error — please try again.', 'error');
    };
}

/* ============================================================
   PRODUCTS DISPLAY
   ============================================================ */
function renderProducts(filter='all') {
    const grid=document.getElementById('products-grid');
    const items=filter==='all'?getAllProducts():getAllProducts().filter(p=>p.category===filter);
    grid.innerHTML=items.map((p,i)=>`
        <div class="product-card reveal" style="animation-delay:${i*0.05}s" data-category="${p.category}">
            <div class="product-img-wrap">
                <div class="product-img" style="background-image:url('${p.image}')"></div>
                ${p.badge?`<span class="product-badge ${p.badge==='New'?'new':p.badge==='Sale'?'sale':''}">${p.badge}</span>`:''}
                <div class="product-actions">
                    <button class="product-action-btn ${Wishlist.has(p.id)?'wishlisted':''}" onclick="toggleWishlist(event,${p.id})" aria-label="Wishlist"><i class='bx ${Wishlist.has(p.id)?'bxs-heart':'bx-heart'}'></i></button>
                    <button class="product-action-btn" onclick="openQuickView(${p.id})" aria-label="Quick view"><i class='bx bx-expand-alt'></i></button>
                </div>
                <div class="product-quick-view" onclick="openQuickView(${p.id})">Quick View</div>
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-price-row">
                    <span class="product-price">${formatLKR(p.price)}</span>
                    ${p.originalPrice?`<span class="product-price-orig">${formatLKR(p.originalPrice)}</span>`:''}
                </div>
                <div class="product-rating"><span class="product-stars">${getStars(p.rating)}</span><span>(${p.reviews})</span></div>
                <button class="add-to-cart-btn" onclick="quickAddToCart(event,${p.id})"><i class='bx bx-shopping-bag'></i> Add to Bag</button>
            </div>
        </div>`).join('');
    setTimeout(observeReveal,50);
}

function getStars(r){const f=Math.floor(r),h=r%1>=0.5;return'★'.repeat(f)+(h?'½':'')+'☆'.repeat(5-f-(h?1:0));}
function filterProducts(filter){document.querySelectorAll('.filter-tab').forEach(t=>t.classList.toggle('active',t.dataset.filter===filter));renderProducts(filter);}
function quickAddToCart(e,id){e.stopPropagation();const p=getAllProducts().find(pr=>pr.id===id);if(!p)return;Cart.add(id,p.sizes[0],p.colors[0],p.colorNames[0]);UI.showToast(`${p.name} added to your bag`,'success');}
function toggleWishlist(e,id){e.stopPropagation();const added=Wishlist.toggle(id),p=getAllProducts().find(pr=>pr.id===id);UI.showToast(added?`${p.name} added to wishlist`:'Removed from wishlist',added?'success':'default');renderProducts(document.querySelector('.filter-tab.active')?.dataset.filter||'all');}

/* ============================================================
   QUICK VIEW
   ============================================================ */
function openQuickView(productId) {
    const p=getAllProducts().find(pr=>pr.id===productId); if(!p)return;
    document.getElementById('quickview-content').innerHTML=`
        <div class="qv-grid">
            <div class="qv-img" style="background-image:url('${p.image}')"></div>
            <div class="qv-info">
                <p class="qv-eyebrow">${p.category.charAt(0).toUpperCase()+p.category.slice(1)}'s Collection</p>
                <h2 class="qv-name">${p.name}</h2>
                <div class="qv-price">${formatLKR(p.price)}${p.originalPrice?`<span style="font-size:1rem;color:var(--text3);text-decoration:line-through;margin-left:10px">${formatLKR(p.originalPrice)}</span>`:''}</div>
                <div class="qv-rating"><span class="stars">${getStars(p.rating)}</span><span>${p.rating} (${p.reviews} reviews)</span></div>
                <hr class="qv-divider"><p class="qv-desc">${p.description}</p><hr class="qv-divider">
                <div><div class="size-label">Select Size</div><div class="sizes-wrap">${p.sizes.map((s,i)=>`<button class="size-btn ${i===0?'active':''}" onclick="selectQVSize(this,'${s}')">${s}</button>`).join('')}</div></div>
                <div><div class="color-label">Colour: <span id="qv-color-name">${p.colorNames[0]}</span></div><div class="colors-wrap">${p.colors.map((c,i)=>`<div class="color-swatch ${i===0?'active':''}" style="background:${c}" title="${p.colorNames[i]}" onclick="selectQVColor(this,'${c}','${p.colorNames[i]}')"></div>`).join('')}</div></div>
                <div class="qv-actions">
                    <button class="btn-primary btn-full" onclick="addFromQV(${p.id})"><i class='bx bx-shopping-bag'></i><span>Add to Bag</span></button>
                    <button class="btn-outline btn-full" onclick="toggleWishlist(event,${p.id})"><i class='bx ${Wishlist.has(p.id)?'bxs-heart':'bx-heart'}'></i><span>${Wishlist.has(p.id)?'Saved to Wishlist':'Save to Wishlist'}</span></button>
                </div>
            </div>
        </div>`;
    UI.openModal('quickview-modal');
}

let _qvSize=null,_qvColor=null,_qvColorName=null;
function selectQVSize(btn,size){document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');_qvSize=size;}
function selectQVColor(el,color,name){document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));el.classList.add('active');_qvColor=color;_qvColorName=name;document.getElementById('qv-color-name').textContent=name;}
function addFromQV(id){const p=getAllProducts().find(pr=>pr.id===id);if(!p)return;Cart.add(id,_qvSize||p.sizes[0],_qvColor||p.colors[0],_qvColorName||p.colorNames[0]);UI.closeModal('quickview-modal');UI.showToast(`${p.name} added to your bag`,'success');UI.openCart();}

/* ============================================================
   SCROLL & ANIMATIONS
   ============================================================ */
function smoothScroll(e,id){e.preventDefault();const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-80,behavior:'smooth'});}
function observeReveal(){const obs=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');obs.unobserve(en.target);}});},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));}
function initScrollBehaviours(){const nb=document.getElementById('navbar'),bt=document.getElementById('back-to-top');window.addEventListener('scroll',()=>{nb.classList.toggle('scrolled',window.scrollY>60);bt.classList.toggle('hidden',window.scrollY<400);},{passive:true});}

/* ============================================================
   AUTH FORMS
   ============================================================ */
function initAuthForms() {
    document.getElementById('signin-form').addEventListener('submit',e=>{
        e.preventDefault();
        const email=document.getElementById('signin-email').value.trim(), pw=document.getElementById('signin-password').value;
        document.getElementById('signin-email-err').textContent=''; document.getElementById('signin-pw-err').textContent='';
        if(!email){document.getElementById('signin-email-err').textContent='Email is required';return;}
        if(!pw){document.getElementById('signin-pw-err').textContent='Password is required';return;}
        const r=Auth.signIn(email,pw);
        if(!r.ok){document.getElementById('signin-pw-err').textContent=r.error;return;}
        UI.closeModal('signin-modal'); document.getElementById('signin-form').reset();
        UI.showToast(`Welcome back, ${Auth.getUser().name.split(' ')[0]}! 👋`,'success');
    });
    document.getElementById('signup-form').addEventListener('submit',e=>{
        e.preventDefault();
        const name=document.getElementById('signup-name').value.trim(),email=document.getElementById('signup-email').value.trim(),pw=document.getElementById('signup-password').value,confirm=document.getElementById('signup-confirm').value;
        ['signup-name-err','signup-email-err','signup-pw-err','signup-confirm-err'].forEach(id=>{document.getElementById(id).textContent='';});
        let ok=true;
        if(!name){document.getElementById('signup-name-err').textContent='Name is required';ok=false;}
        if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){document.getElementById('signup-email-err').textContent='Enter a valid email';ok=false;}
        if(pw.length<8){document.getElementById('signup-pw-err').textContent='Min. 8 characters';ok=false;}
        if(pw!==confirm){document.getElementById('signup-confirm-err').textContent='Passwords do not match';ok=false;}
        if(!ok)return;
        const r=Auth.signUp(name,email,pw);
        if(!r.ok){document.getElementById('signup-email-err').textContent=r.error;return;}
        UI.closeModal('signup-modal'); document.getElementById('signup-form').reset();
        UI.showToast(`Welcome to ALAN, ${name.split(' ')[0]}! 🎉`,'success',3000);
        setTimeout(()=>UI.showToast('🎁 Your welcome code: WELCOME10 — 10% off your first order!','success',7000),3200);
    });
    document.querySelectorAll('input[name="shipping"]').forEach(r=>r.addEventListener('change',()=>UI.updateShippingCost()));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
    renderProducts('all'); UI.updateCartBadge(); UI.updateWishlistBadge(); UI.updateAuthUI();
    initScrollBehaviours(); initAuthForms(); observeReveal(); initPayhere();
    document.addEventListener('click',e=>{const dd=document.getElementById('user-dropdown'),btn=document.getElementById('user-nav-btn');if(!dd.contains(e.target)&&!btn.contains(e.target)){dd.classList.add('hidden');UI._userMenuOpen=false;}});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')UI.closeAll();});
});
