# CLAUDE.md - AI Assistant Guide for Infamis187 Profile Repository

## Repository Overview

This is a **GitHub Profile Repository** - a special type of repository that displays on the user's GitHub profile page at `https://github.com/Infamis187`. The repository name matches the username (`Infamis187/Infamis187`), which triggers GitHub to render the README.md content on the profile.

### Purpose
- Personal introduction and branding on GitHub
- Contact information and interests
- First impression for visitors to the GitHub profile

### Repository Type
- **Project Type**: Documentation/Profile
- **Language**: Markdown
- **Complexity**: Minimal (single file)
- **Dependencies**: None

## Repository Structure

```
Infamis187/
├── .git/           # Git repository metadata
├── README.md       # Profile bio (displayed on GitHub profile)
└── CLAUDE.md       # This file - AI assistant guidelines
```

### Key Files

#### README.md
- **Purpose**: User's GitHub profile biography
- **Location**: `/home/user/Infamis187/README.md`
- **Format**: GitHub-flavored Markdown
- **Visibility**: Public - displays on profile page
- **Content**: Personal introduction, interests, contact info, pronouns

## Development Environment

### Current Branch
- **Active Branch**: `claude/claude-md-mhzjvw7ypky5v5nv-01HwqGjwQQQno291HJhkE4HS`
- **Remote**: `http://local_proxy@127.0.0.1:54009/git/Infamis187/Infamis187`
- **Main Branch**: Not explicitly set (likely `main` or `master`)

### Git Configuration
```
User: Claude
Email: noreply@anthropic.com
```

### Setup Requirements
- **No build tools** required
- **No package managers** (npm, pip, etc.)
- **No runtime dependencies**
- **No testing framework**
- Simply edit Markdown and commit

## Development Workflows

### Making Changes to Profile

1. **Edit README.md**
   ```bash
   # Read the current content
   cat README.md

   # Make changes using editor or Edit tool
   # Ensure proper Markdown formatting
   ```

2. **Review Changes**
   ```bash
   git diff README.md
   ```

3. **Commit Changes**
   ```bash
   git add README.md
   git commit -m "Update profile: [brief description]"
   ```

4. **Push to Branch**
   ```bash
   git push -u origin claude/claude-md-mhzjvw7ypky5v5nv-01HwqGjwQQQno291HJhkE4HS
   ```

### Git Best Practices

#### Push Operations
- Always use: `git push -u origin <branch-name>`
- Branch MUST start with `claude/` and end with matching session ID
- Retry on network errors: up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
- If push fails with 403, verify branch name format

#### Fetch/Pull Operations
- Prefer specific branches: `git fetch origin <branch-name>`
- Use pull with branch: `git pull origin <branch-name>`
- Retry on network failures with exponential backoff

#### Commit Messages
- Format: `Update profile: [what changed]`
- Examples:
  - `Update profile: add new learning interests`
  - `Update profile: update contact information`
  - `Update profile: fix typos and formatting`

## Content Guidelines

### README.md Structure

The profile follows this pattern:
```markdown
- 👋 Introduction
- 👀 Interests
- 🌱 Currently learning
- 💞️ Collaboration interests
- 📫 Contact information
- 😄 Pronouns
- ⚡ Fun fact
```

### Emoji Usage
- **Encouraged**: Emojis are part of the established style
- **Current emojis**: 👋 👀 🌱 💞️ 📫 😄 ⚡
- When updating, maintain emoji consistency unless user requests changes

### Content Tone
- Casual and personal
- Authentic voice (including typos/informal language unless user wants cleanup)
- Fun and approachable

### Personal Information
- **Email**: infamisvandle@gmail.com
- **Pronouns**: in-fa-miss -van-da-llllll
- Always preserve personal details unless explicitly asked to change

## AI Assistant Guidelines

### When Making Changes

1. **Respect User Voice**
   - Maintain the informal, personal tone
   - Don't over-correct grammar/spelling unless requested
   - Preserve the user's authentic style

2. **Emoji Handling**
   - Keep existing emojis unless user wants changes
   - Add emojis only if they fit the established pattern
   - Don't remove emojis without permission

3. **Content Updates**
   - Ask for clarification on personal details
   - Verify before changing contact information
   - Confirm before removing or restructuring sections

4. **Privacy Considerations**
   - This is a PUBLIC profile repository
   - All content will be visible on GitHub
   - Warn user if they're about to add sensitive information

### Common Tasks

#### Update Interests
```markdown
- 👀 I'm interested in ...[new interests]
```

#### Update Learning Status
```markdown
- 🌱 I'm currently learning ...[new skills/technologies]
```

#### Add New Sections
- Follow the bullet point + emoji format
- Place logically within existing structure
- Maintain markdown consistency

### Git Operations for AI Assistants

#### Before Pushing
1. Verify branch name format: `claude/claude-md-mhzjvw7ypky5v5nv-01HwqGjwQQQno291HJhkE4HS`
2. Check commit message is descriptive
3. Ensure no sensitive data in changes
4. Verify Markdown renders correctly

#### Retry Logic for Network Errors
```bash
# If push fails due to network error
# Wait 2s, retry
# Wait 4s, retry
# Wait 8s, retry
# Wait 16s, retry
# Report failure if all attempts fail
```

## Markdown Best Practices

### Formatting
- Use proper list syntax with `-` or `*`
- Maintain consistent spacing
- Ensure emojis render correctly
- Test links if added

### GitHub-Specific Features
- This repository may use GitHub-flavored Markdown features
- Profile README supports most standard Markdown
- Can include images, links, badges, etc.

### Common Patterns
```markdown
# Headers
- Bullet lists
**Bold text**
*Italic text*
[Links](https://example.com)
![Images](https://example.com/image.png)
```

## Testing & Validation

### Preview Changes
- GitHub provides README preview in web interface
- Verify emoji rendering
- Check that all links work
- Ensure no Markdown syntax errors

### No Automated Tests
- This is a documentation-only repository
- No unit tests, integration tests, or CI/CD
- Manual review of Markdown is sufficient

## Common Scenarios

### Scenario 1: User Wants to Update Interests
1. Ask what new interests to add
2. Edit README.md with new content
3. Preserve emoji and formatting
4. Commit: "Update profile: update interests section"
5. Push to current branch

### Scenario 2: User Wants to Add New Section
1. Discuss where it should go
2. Choose appropriate emoji
3. Match existing format
4. Commit with descriptive message
5. Push changes

### Scenario 3: User Wants Professional Cleanup
1. Fix typos and grammar
2. Improve formatting/structure
3. Keep personality but make more polished
4. Get user approval before major changes
5. Commit and push

### Scenario 4: User Wants to Add Badges/Images
1. Confirm URLs and image sources
2. Test that they render properly
3. Add with proper Markdown syntax
4. Ensure they enhance rather than clutter
5. Commit and push

## Troubleshooting

### Push Fails with 403
- **Cause**: Branch name doesn't match required format
- **Fix**: Verify branch starts with `claude/` and ends with session ID

### Emoji Not Rendering
- **Cause**: Encoding issue or unsupported emoji
- **Fix**: Use standard Unicode emojis, test in GitHub preview

### Markdown Not Formatting
- **Cause**: Syntax error in Markdown
- **Fix**: Check for proper spacing, list syntax, link formatting

## Project History

### Initial State
- **Created**: Commit f01c39d "Create README.md"
- **Content**: Personal introduction with emoji bullets
- **Files**: Single README.md file

### Evolution
- Currently very minimal
- Can be expanded with badges, stats, pinned repos, etc.
- User may want to add GitHub stats, skills section, projects, etc.

## Future Enhancements (Suggestions)

Profile repositories can include:
- **GitHub Stats**: Activity metrics and language stats
- **Skills Section**: Technologies, languages, frameworks
- **Project Showcase**: Pinned repositories or featured work
- **Blog Posts**: Links to latest articles
- **Social Links**: Twitter, LinkedIn, personal website
- **Badges**: Certifications, achievements
- **Visitor Counter**: Track profile views
- **Dynamic Content**: Auto-updating elements via GitHub Actions

## Resources

### GitHub Profile README
- [GitHub Docs: Managing your profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- [GitHub Profile README Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)

### Markdown Resources
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet)

## Quick Reference

### File Locations
- Profile content: `/home/user/Infamis187/README.md`
- AI guidelines: `/home/user/Infamis187/CLAUDE.md`

### Key Commands
```bash
# View current status
git status

# View changes
git diff

# Stage and commit
git add README.md
git commit -m "Update profile: [description]"

# Push to branch
git push -u origin claude/claude-md-mhzjvw7ypky5v5nv-01HwqGjwQQQno291HJhkE4HS

# View recent commits
git log --oneline -5
```

### Contact Information
- **Email**: infamisvandle@gmail.com
- **GitHub**: @Infamis187

---

**Last Updated**: 2025-11-15
**Repository Version**: Initial (1 commit)
**Maintained by**: AI Assistant (Claude)
