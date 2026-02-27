# Client Site Checklist (Before Edit / Before Deploy)

Plain-language checklist to stop wrong-folder / wrong-repo mistakes.

---

## Figma Make Import (Before First Edit)

Use this section when a client site starts in Figma Make and is downloaded locally.

1. Confirm the source folder
- Open the downloaded folder and confirm it is the correct client
- Check the homepage content matches the client before importing

2. Create/use the correct client folder
- Import into `clients/<clientname>/`
- Avoid duplicate copies with similar names (for example `client`, `client-new`, `client-final`)

3. Confirm contact details before refinement
- Check business name, phone number, email address, and location
- If any must-have detail is missing, ask before editing

4. Run install + dev/build checks
- Run `npm install` (if needed)
- Run `npm run dev` and `npm run build`
- Fix setup/build issues before content refinements

5. Mark obvious placeholders
- Flag or mark any placeholder text/images before deploy
- Check forms, CTA buttons, and contact links are not left as dummy values

---

## Before Edit (2 minutes)

1. Confirm the folder
- Run `pwd`
- Make sure you are in the correct client repo folder

2. Confirm the GitHub repo
- Run `git remote -v`
- Make sure the repo name matches the client

3. Confirm the correct site opens locally
- Run the correct dev command for that client
- Check the page matches the client (not the plumber/FlowFix template)

4. Confirm the branch (if needed)
- Run `git branch --show-current`
- Make sure you are on the branch used for that client

5. Confirm which workflow path you are using
- Preset build in the root template app, or standalone client site in `clients/<clientname>/`
- If you see `FlowFix Plumbing` unexpectedly, stop and re-check the folder

---

## Before Deploy / Redeploy

1. Confirm what changed
- Run `git status`
- Check only the intended client files are changed

2. Run a build
- Run the client build command
- Make sure it passes

2.5. If this was a Figma Make import
- Re-check phone/email links and form endpoints after any cleanup
- Confirm no starter branding or generator credits are left in page metadata/footer

3. Push to the correct repo
- If unsure, run `git remote -v` again before `git push`

4. Open the correct Vercel project
- Double-check the project name before clicking `Redeploy`

---

## Final Demo Check (Before Sending)

1. Browser tab title is client-specific
2. Demo URL includes `demo` (if using a demo subdomain)
3. Phone number links work (`tel:`)
4. Email links work (`mailto:`)
5. Mobile sticky call button dials the correct number
6. Contact details match the brief
7. No obvious placeholder copy left on public pages
8. Logo displays correctly in nav/footer (if provided)
9. Desktop + mobile quick visual check
10. Live site opens after redeploy

---

## Important Reminder

If you see `FlowFix Plumbing`, you are usually in the root template app, not the client site you meant to open.
