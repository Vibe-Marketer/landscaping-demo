# Landscaping Website Automation
<!-- DOE-VERSION: 2026.01.02 -->

## Goal
Research landscaping/lawn care companies and generate premium websites that convert visitors into customers.

## Trigger Phrases
- "create a landscaping website"
- "build lawn care website"
- "research landscaping company"
- "simply soil website"

## Quick Start
```bash
# Research phase
python execution/landscaping_research.py --company "Simply Soil Land & Lawn Care" --location "Leonardo, NJ" --phone "848-200-8079"

# Website generation
# See website/ folder for generated site
```

## Research Prompt (Landscaping-Adapted)

```
Research Target: Lawn Care / Landscaping - [BUSINESS_NAME] in [CITY], [STATE]
Phone: [PHONE]
Address: [FULL_ADDRESS]
Google Maps Profile: [GOOGLE_URL]
Website: [EXISTING_WEBSITE]

Core Investigation:
Find comprehensive information about this landscaping/lawn care business including:

1. Business Background & Credentials
   - Years in business
   - Owner/operator information
   - Professional certifications (pesticide applicator licenses, landscaping certifications)
   - Insurance and bonding status
   - Professional associations (NALP, state landscaping associations)

2. Services & Specializations
   - Core lawn care services (mowing, fertilization, aeration, overseeding)
   - Pest/mosquito/tick control offerings
   - Tree and shrub care programs
   - Landscape design and installation
   - Hardscaping services
   - Seasonal programs (spring cleanup, fall cleanup, winterization)
   - Organic/eco-friendly approaches
   - Commercial vs residential focus

3. Customer Reviews & Reputation
   - Google Reviews rating and count
   - Yelp, Angi, HomeAdvisor reviews
   - Facebook reviews and engagement
   - Specific customer testimonials and success stories
   - Common praise points (quality, reliability, pricing, communication)
   - Before/after project examples

4. Service Area & Capacity
   - Cities/towns served
   - Service radius
   - Team size and equipment
   - Seasonal vs year-round operation
   - Response time and scheduling flexibility

5. Competitive Differentiators
   - Unique service offerings
   - Pricing approach (competitive, premium, value-focused)
   - Satisfaction guarantees
   - Technology adoption (customer portals, online booking)
   - Environmental/organic practices

6. Digital Presence
   - Website quality and features
   - Social media activity (Instagram, Facebook)
   - Online booking capabilities
   - Customer communication tools
   - Portfolio/gallery presence

7. Recent Activity (Last 24 months)
   - New services added
   - Equipment upgrades
   - Team expansion
   - Community involvement
   - Awards or recognition

Website Creation Focus:
Identify 3-5 compelling story angles that would resonate with homeowners seeking lawn care services. Include specific proof points, statistics, or testimonials that demonstrate expertise and build trust.

Output Format:
Organize findings by impact level - start with most impressive/unique discoveries that would strengthen website messaging and conversion.

IMPORTANT: Only include information that is verified and directly related to [BUSINESS_NAME] in [CITY], [STATE]. Never fabricate data or include unverified claims.
```

## Website Creation Prompt (Landscaping-Adapted)

```
Role
You are a specialized website design assistant tasked with creating a premium lawn care/landscaping company website that converts visitors into customers. Your expertise lies in crafting compelling, homeowner-focused content and strategic user flows that balance local expertise with modern aesthetics to establish trust and drive action.

Task
Develop a multi-page website for a landscaping/lawn care company that:
- Exudes quality and professionalism to justify premium pricing
- Builds immediate credibility through social proof and local expertise
- Drives conversions with clear, intuitive calls-to-action (CTAs)
- Showcases services in a clean, visual layout
- Incorporates local SEO to enhance discoverability

Context
This website is the primary digital presence for a local lawn care company. The goal is a visually striking site that wows potential customers with lush imagery and clear value propositions. The site must stand out from competitors through unique, benefit-focused copy and professional design.

Business Information:
- Business Name: [BUSINESS_NAME]
- Category: Lawn Care / Landscaping
- Location: [CITY], [STATE]
- Phone Number: [PHONE]
- Full Address: [FULL_ADDRESS]
- Tagline: [TAGLINE]

Research Insights:
[INSERT RESEARCH FINDINGS HERE]

Website Structure:

HOMEPAGE
- Hero Section:
  * Compelling headline highlighting local expertise (e.g., "Leonardo's Premier Lawn Care Experts")
  * Subheadline addressing pain point (e.g., "Transform Your Lawn Into the Envy of the Neighborhood")
  * Professional lawn/landscape imagery
  * Prominent "Get Free Estimate" CTA button
  * Click-to-call phone number

- Trust Elements:
  * Star rating badge with review count
  * Years in business
  * "Locally Owned & Operated" badge
  * Satisfaction guarantee badge

- Services Overview:
  * Icon-based grid of core services
  * Short benefit-focused descriptions
  * Links to detailed service pages

- Before/After Gallery:
  * Visual proof of transformation
  * Slider or comparison format

- Testimonials:
  * 2-3 customer quotes with names/locations
  * Star ratings

- Service Area:
  * Map or list of communities served
  * "Proudly Serving [Area] Homeowners"

- Contact Bar:
  * Phone number (click-to-call)
  * "Get Free Estimate" form
  * Business hours

SERVICES PAGE
- Individual service sections:
  * Lawn Mowing & Maintenance
  * Fertilization Programs
  * Weed Control
  * Aeration & Overseeding
  * Mosquito & Tick Control
  * Tree & Shrub Care
  * Landscape Lighting
  * Seasonal Cleanups

- Each service includes:
  * Brief description of what's included
  * Benefits to homeowner
  * CTA to request service

- Process section:
  * Step 1: Free Consultation
  * Step 2: Customized Plan
  * Step 3: Professional Service
  * Step 4: Ongoing Care

ABOUT PAGE
- Company story
- Owner/team introduction
- Mission/values
- Community involvement
- Certifications and credentials
- Team photos

CONTACT PAGE
- Contact form
- Phone number
- Email
- Address with map
- Business hours
- Service area list

Global Elements:
- Header: Logo, navigation, phone number, CTA button
- Footer: Contact info, service links, social media, copyright
- Mobile: Fully responsive with tap-to-call priority

Design Direction:
- Fresh, natural color palette (greens, earth tones)
- Clean layouts with plenty of white space
- High-quality lawn/landscape photography
- Modern typography
- Professional but approachable feel

Conversion Elements:
- Primary CTA: "Get Free Estimate" on every page
- Secondary: Click-to-call phone number
- Lead capture form (name, email, phone, service interest, address)
- Sticky header with CTA on scroll

Technical Requirements:
- Fast-loading, responsive design
- SEO-optimized with local keywords
- Schema markup for local business
- Google Maps integration
```

## Output
- Researched company profile in `.tmp/research/`
- Generated website in `website/` folder
- Adapted prompts saved for future use
