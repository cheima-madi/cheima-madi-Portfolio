# Deploying Your Portfolio to GitHub 🚀

I've prepared everything so your portfolio can be hosted for **free** on GitHub Pages. Follow these simple steps to go live:

### 1. Initialize Git
Open your terminal in the `Mimi-Portfolio` folder and run:
```powershell
git init
git add .
git commit -m "Final professional portfolio ready for deployment"
```

### 2. Create Your GitHub Repository
1. Go to [GitHub.com](https://github.com/new).
2. Name your repository exactly: `cheima-madi-Portfolio`.
3. Set it to **Public**.
4. Click **Create repository**.

### 3. Connect and Push
Copy the commands from your new GitHub repo page (the "push an existing repository" section). It will look like this:
```powershell
git remote add origin https://github.com/cheima-madi/cheima-madi-Portfolio.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. *That's it!* The automated workflow I created will start building and deploying your site automatically.

### 5. Final Touch: Contact Form
I've set up **Web3Forms** for your contact form. To receive emails, you just need a "Key":
1. Go to [web3forms.com](https://web3forms.com/) and enter your email to get a free **Access Key**.
2. Open `client/src/components/ContactForm.tsx` and replace `"YOUR_WEB3FORMS_ACCESS_KEY"` with your key.

**Your Public Link will be:**
[https://cheima-madi.github.io/cheima-madi-Portfolio/](https://cheima-madi.github.io/cheima-madi-Portfolio/)
