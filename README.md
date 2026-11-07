# MMGS 2003 Set Old Students Association website

A static website: no build step, no server software. Upload the whole folder to any web host.

## What is in the folder

| File / folder | What it does |
|---|---|
| `index.html` | The page structure and the fixed text (about, programmes, action plan, contacts). |
| `styles.css` | All design: colours, fonts, layout. |
| `script.js` | Behaviour: menu, news and countdown, gallery, member directory, sign-up form. |
| `data.js` | **The file you edit most.** News, upcoming events, settings, gallery captions, member profiles. |
| `google-apps-script.gs` | Optional backend that saves sign-ups into a Google Sheet (see below). |
| `images/` | Crest, logos, hero image, 121 gallery photos (`gallery/`) and thumbnails (`thumbs/`). |

Keep the folder structure as it is. `index.html` must sit next to `styles.css`, `script.js`, `data.js` and the `images` folder.

## Publish it

Any of these work. Upload the **contents** of the folder so `index.html` is at the top level.

* **Netlify Drop** (easiest): go to app.netlify.com/drop and drag the folder in. Free. You can attach your own domain later.
* **GitHub Pages**: create a repository, upload the files, then Settings > Pages > Deploy from branch.
* **cPanel or any web host**: upload everything into `public_html` (or the domain's folder).

To test on your own computer, open `index.html` by double-clicking it. Everything works that way except the Google Sheet sign-up.

## Add news and upcoming events

Open `data.js` and find `MMGS_NEWS`. Each item is a block between `{` and `}`. Copy one and edit it.

* `type: "event"` shows under **Upcoming events**. `type: "news"` shows under **Latest news**.
* Give an event a real date to get a **live countdown** and **Add to calendar** buttons:
  `date: "2027-04-17", time: "18:00", endTime: "21:00"` (time is optional).
* Without a `date`, the site shows your `dateText` instead (for example `"December 2026"`).
* The first event with `featured: true` becomes the large **Next event** panel. If none is marked, the soonest dated event is used.
* Once an event's date has passed, it moves to **Latest news** by itself with the label "Event recap".
* `image` is a gallery photo number (for example `78`) or a path such as `"images/news/dinner.jpg"`.
* Keep the commas between blocks and the quotation marks around text. If the page goes blank after an edit, a comma or quote is usually missing.

The three Proposed/Ongoing events and the five news items in the file are drawn from your action plan and photo captions. Replace them as real dates are confirmed.

## Add photos to the gallery

1. Put a resized photo (about 1200 px wide) in `images/gallery/` named with the next number, for example `122.jpg`, and a small square copy (about 260 px) in `images/thumbs/122.jpg`.
2. Add a line to `MMGS_GALLERY` in `data.js`:
   `{"id":122,"t":"Caption here","p":"Iju-Odo","c":"events","w":1200,"h":800}`
   (`c` is `school`, `events` or `members`).

## Member sign-up form

Out of the box the form works but saves a visitor's card only in **that visitor's browser**, because a static website has nowhere to keep shared data. To make sign-ups reach you and appear for everyone, connect the free Google Sheet backend:

1. Create a new Google Sheet (sheets.new). Name it "MMGS 2003 Members".
2. Extensions > Apps Script. Delete the sample code and paste in everything from `google-apps-script.gs`. Save.
3. Deploy > New deployment > type **Web app**. Set *Execute as*: **Me**, and *Who has access*: **Anyone**. Deploy and approve the permission prompts.
4. Copy the **Web app URL** (ends in `/exec`).
5. In `data.js`, paste it: `signupEndpoint: "https://script.google.com/macros/s/.../exec",`
6. Re-upload `data.js`.

What happens then: each submission becomes a row in the Sheet (name, phone, email, profession, location, skills, willingness to serve, small photo). The public directory shows name, picture, profession, location and skills only. **Phone and email are never sent back to the website**; only you and anyone you share the Sheet with can see them.

To remove someone from the public directory, change `yes` to `no` in the last column of their row, or delete the row. If you change the script later, use Deploy > Manage deployments > Edit > New version.

## Change wording, colours and contacts

* Contacts, the action plan and programme text are in `index.html`. Search for the text and edit it.
* Colours are at the top of `styles.css` (`--green`, `--gold`, `--ivory`).
* Facebook and WhatsApp links are in `index.html` (search for `facebook.com` and `chat.whatsapp.com`).

## Good to know

* **Fonts** (Cormorant Garamond and Hanken Grotesk) load from Google Fonts. If a visitor is offline, the site falls back to Georgia and the system font.
* **Search engines**: the page title, description, keywords and basic organisation data are already in `index.html`. After you publish, add the site in Google Search Console and put its address on your Google Business profile.
* **Favicon and share image** are in `images/brand/`. Replace `og.jpg` if you want a different preview when the link is shared on WhatsApp or Facebook.
* The crest on the dark green background (`crest.png`) was cut out of your logo file. If you have the original transparent logo, replace that file with it for the cleanest edges.


## Version 3 update (menus, documents, new photos)

**Menus.** The header now has: About, Strategic Pillars, News, Gallery, Constitution, Members (Member profiles and Excos, Portfolios and assigned duties, Nominal roll, Missing members, Deceased members), Minutes (Minutes of previous meetings), Major Decisions (Summary of major decisions), Financial Report, and More (Action plan, Support, Contact). On phones the menu opens as a full-screen list with expandable groups.

**Pages.** Constitution, Portfolios, Nominal roll, Missing members, Deceased members, Minutes, Major Decisions and Financial Report open as their own pages inside `index.html` (addresses such as `index.html#constitution` and `index.html#minutes/general-2026` can be shared). Nothing else needs to be uploaded beyond the files in this folder.

**Where to edit (all in `data.js`)**
- `MMGS_OFFICES`: offices, holders and duties. `MMGS_ROLL`, `MMGS_MISSING`, `MMGS_LATE`: the three name lists.
- `MMGS_MINUTES` and `MMGS_DECISIONS`: add a new meeting by copying an entry and changing `id`, `date`, `title`, `sub` and `blocks`.
- `MMGS_CONSTITUTION` and `MMGS_WELFARE`: the constitution and welfare agreement text.
- `MMGS_GALLERY` and `MMGS_PROFILES`: photos and member cards, rebuilt from `MMGS PICTURES AND EVENTS.pptx` (125 photos). A profile with `x: "Treasurer"` (or Chairman, General Secretary, Financial Secretary) appears in the Excos strip.
- Financial Report: replace `images/brand/financial-report.jpg` and edit the figures in the `financial-report` section of `index.html`.
- Strategic Pillars: the six cards are in the `pillars` section of `index.html`.

**Dates.** The Reunion and Fundraising Dinner is now December 2026 everywhere (news card, action plan dates, fundraising and flagship items). Phone numbers from the members' location list are not published anywhere on the site.

## Version 3.1 (anthem and flashback memes)

- **Our anthem** (`index.html#anthem`) and **Flashback memes** (`index.html#flashback`) are in the "More" menu and on a Heritage band on the home page. Edit the words in `MMGS_ANTHEM` and the memes in `MMGS_FLASHBACK` (both in `data.js`). Meme pictures are in `images/flashback/`. Select a picture to enlarge it; use the arrow keys to move between pictures.
