# Website Template System

This is a professional, reusable one-page website template for service-based businesses (construction, plumbing, electrical, landscaping, etc.)

---

## 🎯 What This Is

A **production-ready website template** that you can customize in 10-20 minutes for different clients.

**Perfect for:**
- Construction companies
- Plumbers
- Electricians
- Landscapers
- Roofers
- Any service-based business

---

## 📁 Template Files

### Documentation (Read These!)
- **TEMPLATE-GUIDE.md** - Complete customization guide (30 min read)
- **QUICK-CHECKLIST.md** - Fast 10-minute checklist (use this most often!)
- **CLIENT-CONFIG.md** - Client information template

### Website Files
- **src/app/components/** - All React components
- **public/images/** - Image assets
- **tailwind.config.ts** - Styling configuration

---

## 🚀 Quick Start (10 Minutes)

### 1. Copy Template
```bash
cd ~/Desktop
cp -r Website NewClient-Website
cd NewClient-Website
```

### 2. Global Search & Replace
Use `Cmd+Shift+F` in VS Code:
- `BS Builders` → Client name
- `0141 880 5656` → Client phone
- `bsbuildersltd@gmail.com` → Client email
- `#C8102E` → Client color

### 3. Customize Services
Edit `src/app/components/Services.tsx` - Update 6 service cards

### 4. Test Locally
```bash
npm run dev
```

### 5. Deploy
```bash
git init && git add . && git commit -m "Website for [Client]"
git remote add origin [repo-url]
git push -u origin main
```
Then deploy on Vercel.com

---

## 📋 Files You'll Edit Most Often

### Critical (Always Change)
1. **ContactForm.tsx** - Email, phone
2. **Footer.tsx** - Contact info
3. **Navbar.tsx** - Company name
4. **Hero.tsx** - Headlines
5. **Services.tsx** - Service offerings

### Important (Often Change)
6. **Portfolio.tsx** - Project showcase
7. **Process.tsx** - How it works steps

### Optional (Rarely Change)
8. **Testimonials.tsx** - Client reviews
9. **WhyChooseUs.tsx** - USPs
10. **TrustBar.tsx** - Certifications

---

## 🎨 Color Presets

Industry-specific colors ready to use:

```javascript
Construction:  #C8102E (red)
Plumbing:      #1E40AF (blue)
Electrical:    #F59E0B (orange)
Landscaping:   #059669 (green)
HVAC:          #0891B2 (cyan)
Roofing:       #713F12 (brown)
```

---

## 📸 Images

**Current:** Using Unsplash stock photos (work great as placeholders!)

**To use client photos:**
1. Add to `public/images/`
2. Update URLs in Hero.tsx, Services.tsx, Portfolio.tsx

**Image sizes:**
- Hero: 1920x1080px
- Services: 800x600px
- Portfolio: 1080x1080px

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Basic customization | 10-15 min |
| Full customization | 30-45 min |
| With custom images | +15-30 min |
| Total with deploy | 60-90 min |

---

## 💰 Pricing Guide

**Recommended:** £700 per website
- **Minimum:** £600 (if negotiating)
- **Maximum:** £1,000+ (with extras)

**Market rates for comparison:**
- Freelancers: £800-£3,000
- Agencies: £2,000-£6,000

---

## 📚 How to Use This System

### For Your First 3 Clients:

**Week 1:**
1. Perfect the BS Builders template
2. Find 3-5 prospects with bad websites
3. Customize template for each prospect

**Week 2:**
4. Send cold emails (see QUICK-CHECKLIST.md)
5. Follow up after 3-4 days
6. Close 1-2 deals at £700 each

**Week 3+:**
7. Improve template based on feedback
8. Raise prices to £800-£1,000
9. Build portfolio
10. Get referrals

### Workflow for Each New Client:

```
1. Find prospect →
2. Copy template →
3. Customize (10-20 min) →
4. Deploy demo →
5. Send cold email →
6. Get approval →
7. Invoice →
8. Handover →
9. ✅ Done!
```

---

## 🔧 Troubleshooting

**Images not loading?**
- Check Unsplash URLs
- Hard refresh: `Cmd+Shift+R`

**Dev server not starting?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Colors not changing?**
- Search ALL files for `#C8102E`
- Check inline styles too

---

## 📝 Workflow Example

**Client:** ABC Plumbing

```bash
# 1. Copy template
cp -r Website ABC-Plumbing-Website

# 2. Customize (10 min)
- Change company name, phone, email
- Update services for plumbing
- Change color to blue (#1E40AF)

# 3. Deploy
git init && git push → Deploy on Vercel

# 4. Send email
"Hi ABC Plumbing, built you a modern website..."

# 5. Close deal
Get approval → Invoice £700 → Handover

# 6. Next!
```

---

## 🎯 Success Metrics

**Your Goal:** 3-5 clients at £700 each = £2,100-£3,500 in your first month

**Time investment:**
- Template setup: 2-3 hours (one-time)
- Each client: 1-2 hours
- Total for 5 clients: 10-15 hours
- **Hourly rate:** £140-£350/hour 🎉

---

## 📞 Cold Email Template

```
Subject: Quick website update for [Company]

Hi [Name],

I came across [Company] and was impressed by [specific detail].

Your website could use a refresh to match the quality of your work,
so I built a modern version as a demonstration:

[Screenshot or demo link]

The new design is mobile-friendly, professional, and matches 2026 standards.

Price: £700 (agencies charge £1,500-£2,000 for similar work)

If you're interested, just reply to this email and I'll send you the details.

Best regards,
Gavin
```

---

## 🚀 Next Steps

1. **Read QUICK-CHECKLIST.md** (your main reference)
2. **Test customization** (practice with fake client)
3. **Find 3 prospects** (small businesses with bad websites)
4. **Customize & deploy 3 demos** (2-3 hours total)
5. **Send emails** (tomorrow morning, 9-10am)
6. **Follow up** (Tuesday if no response)
7. **Close your first deal!** 💰

---

## 📂 Folder Structure Recommendation

```
~/Desktop/
├── Website/                    ← Master template (this folder)
│   ├── TEMPLATE-GUIDE.md
│   ├── QUICK-CHECKLIST.md
│   └── README-TEMPLATE.md
│
└── Clients/
    ├── ABC-Plumbing/          ← Client projects
    ├── XYZ-Electrical/
    └── 123-Construction/
```

---

## ✅ Template Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ One-page scrolling design
- ✅ 6 customizable sections
- ✅ Contact form
- ✅ Portfolio gallery with filtering
- ✅ Service showcase
- ✅ Professional imagery (Unsplash)
- ✅ Fast loading
- ✅ SEO-friendly
- ✅ Easy to customize
- ✅ Ready to deploy

---

## 📞 Support

**Questions?** Check:
1. QUICK-CHECKLIST.md (fastest)
2. TEMPLATE-GUIDE.md (detailed)
3. Test locally: `npm run dev`

---

**Template Version:** 1.0
**Last Updated:** February 2026
**Built For:** Service-based businesses
**Pricing:** £700 baseline

**Good luck! 🚀**
