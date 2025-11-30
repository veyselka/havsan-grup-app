# Accessibility Testing Checklist

## WCAG 2.1 AA Compliance

### Perceivable

#### Text Alternatives
- [ ] All images have descriptive `alt` attributes
- [ ] Decorative images have `alt=""` or use CSS backgrounds
- [ ] Icons have accessible labels (aria-label or sr-only text)
- [ ] Form inputs have associated labels

#### Time-based Media
- [ ] Videos have captions/subtitles
- [ ] Audio content has transcripts

#### Adaptable
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Semantic HTML elements (nav, main, article, section)
- [ ] Content order makes sense without CSS
- [ ] Tables have proper headers

#### Distinguishable
- [ ] Text color contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text color contrast ratio ≥ 3:1 (large text 18pt+)
- [ ] UI component contrast ratio ≥ 3:1
- [ ] Text can be resized up to 200% without loss of content
- [ ] No text as images (except logos)

### Operable

#### Keyboard Accessible
- [ ] All interactive elements accessible via keyboard
- [ ] Logical tab order
- [ ] No keyboard traps
- [ ] Visible focus indicators
- [ ] Skip to main content link

#### Enough Time
- [ ] No time limits or time limits can be extended
- [ ] Animations can be paused/stopped
- [ ] Auto-updating content can be paused

#### Seizures and Physical Reactions
- [ ] No content flashes more than 3 times per second
- [ ] Animations respect `prefers-reduced-motion`

#### Navigable
- [ ] Page has a descriptive `<title>`
- [ ] Focus order is logical
- [ ] Link purpose clear from link text or context
- [ ] Multiple ways to find pages (menu, search, sitemap)
- [ ] Headings and labels are descriptive
- [ ] Current page/location indicated

#### Input Modalities
- [ ] Gestures have keyboard alternatives
- [ ] Click/tap targets are at least 44x44px
- [ ] Labels in name match accessible name

### Understandable

#### Readable
- [ ] Page language defined (`<html lang="tr">`)
- [ ] Language changes marked (`lang` attribute)
- [ ] Unusual words/jargon defined

#### Predictable
- [ ] Focus doesn't trigger unexpected changes
- [ ] Input doesn't trigger unexpected changes
- [ ] Navigation is consistent across pages
- [ ] Components have consistent identification

#### Input Assistance
- [ ] Error messages clearly identify errors
- [ ] Labels or instructions provided for inputs
- [ ] Error suggestions provided
- [ ] Error prevention for legal/financial/data submissions

### Robust

#### Compatible
- [ ] Valid HTML (no parsing errors)
- [ ] Proper ARIA attributes
- [ ] Status messages use ARIA live regions
- [ ] Name, role, value available for all UI components

## Testing Tools

### Automated Testing
- [ ] axe DevTools browser extension
- [ ] Lighthouse accessibility audit
- [ ] WAVE browser extension
- [ ] Pa11y CI integration

### Manual Testing
- [ ] Keyboard-only navigation test
- [ ] Screen reader test (NVDA/JAWS/VoiceOver)
- [ ] Zoom to 200% test
- [ ] Color contrast analyzer
- [ ] Mobile screen reader test (TalkBack/VoiceOver)

## Component-Specific Checks

### Forms
- [ ] All form controls have labels
- [ ] Required fields marked (visually and programmatically)
- [ ] Error messages associated with inputs
- [ ] Fieldsets and legends for radio/checkbox groups
- [ ] Autocomplete attributes for common fields

### Modals/Dialogs
- [ ] Focus trapped within modal
- [ ] ESC key closes modal
- [ ] Focus returns to trigger element on close
- [ ] `role="dialog"` and `aria-modal="true"`
- [ ] `aria-labelledby` or `aria-label`

### Navigation
- [ ] Landmark roles or semantic elements
- [ ] Skip navigation link
- [ ] Current page indicated (aria-current)
- [ ] Breadcrumbs if deep navigation

### Images
- [ ] Informative images have descriptive alt
- [ ] Complex images have long descriptions
- [ ] Image maps have alt text on areas
- [ ] SVGs have title/desc elements or aria-label

### Interactive Elements
- [ ] Buttons use `<button>` not `<div>` with click handlers
- [ ] Links use `<a>` with `href`
- [ ] Disabled state communicated (aria-disabled)
- [ ] Loading states announced (aria-busy or aria-live)

## Priority Issues

### High Priority (Fix Immediately)
- Missing alt text on informative images
- Insufficient color contrast
- Keyboard navigation broken
- Missing form labels
- Invalid HTML

### Medium Priority (Fix Soon)
- Non-descriptive link text
- Missing heading levels
- No focus indicators
- Missing ARIA attributes

### Low Priority (Enhance)
- Optimize for screen readers
- Add skip links
- Improve error messages
- Add autocomplete attributes

## Testing Schedule

- [ ] Automated tests run on every PR
- [ ] Manual keyboard test before each release
- [ ] Screen reader test quarterly
- [ ] Full WCAG audit annually
- [ ] User testing with assistive technology users
