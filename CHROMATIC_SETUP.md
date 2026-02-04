# Chromatic Setup Guide

## ✅ What's Been Configured

Your repository is now set up to automatically deploy Storybook to Chromatic on every push to `main` and every pull request.

### Changes Made:
1. ✅ Added `chromatic` script to `package.json`
2. ✅ Added Chromatic deployment job to `.github/workflows/ci.yml`
3. ✅ Configured to auto-accept changes on `main` branch

---

## 🔑 Required: Add Your Chromatic Project Token

To make this work, you need to add your Chromatic project token as a GitHub secret.

### Step 1: Get Your Chromatic Project Token

1. Go to https://www.chromatic.com/
2. Sign in to your account
3. Select your **VTNDS** project
4. Click **Manage** → **Configure**
5. Copy your **Project Token** (looks like: `chpt_xxxxxxxxxxxxxx`)

### Step 2: Add Token to GitHub Secrets

1. Go to your GitHub repository: https://github.com/pasco-pasco/VTNDS
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Set:
   - **Name:** `CHROMATIC_PROJECT_TOKEN`
   - **Value:** (paste your token from Step 1)
6. Click **Add secret**

---

## 🎯 How It Works

### On Every Push to `main`:
- GitHub Actions runs your tests
- Builds Storybook
- Publishes to Chromatic
- **Auto-accepts** visual changes (since it's the main branch)
- Updates your Chromatic URL: https://6981e8397b2f85b09a9b2409-juxdxzhjah.chromatic.com/

### On Every Pull Request:
- GitHub Actions runs your tests
- Builds Storybook
- Publishes to Chromatic for review
- Adds a **PR status check** showing if there are visual changes
- You can review and approve changes in Chromatic before merging

---

## 📋 PR Status Checks

Once configured, you'll see these checks on your pull requests:

- ✅ **UI Tests** - Visual regression tests
- ✅ **Storybook Publish** - Link to preview your Storybook
- ✅ **UI Review** (if enabled) - Visual changes requiring approval

---

## 🧪 Test the Setup

After adding the secret, test it by:

1. Making a small change to a component or story
2. Pushing to a new branch
3. Opening a pull request
4. Check the PR for Chromatic status checks

Or manually trigger a deployment:
```bash
pnpm chromatic
```

---

## 🔧 Troubleshooting

### "Error: Missing project token"
- Make sure you added `CHROMATIC_PROJECT_TOKEN` to GitHub secrets
- Check the token is correct (no extra spaces)

### "Error: Git not found"
- This is handled by `fetch-depth: 0` in the workflow

### Status checks not appearing on PRs
- Verify your project is linked to GitHub in Chromatic settings
- Check that the repository URL matches in both places

---

## 📚 Resources

- [Chromatic CI Documentation](https://www.chromatic.com/docs/ci/)
- [GitHub Actions Documentation](https://www.chromatic.com/docs/github-actions)
- [Chromatic Dashboard](https://www.chromatic.com/builds)

---

## ✅ Next Steps

1. Add `CHROMATIC_PROJECT_TOKEN` to GitHub secrets (see above)
2. Push these changes to `main`
3. Watch the GitHub Actions run
4. Your Storybook will automatically update on Chromatic!
