---
description: Deploy the portfolio website to proper domain folder in cPanel
---

# Deploying to cPanel (cybernout.com)

This guide is customized for your specific cPanel structure.

## Prerequisites

1.  **Build and Zip**: We have already created the `deploy.zip` file in your project folder:
    - `c:\Users\CyberNout\Documents\Cybernout\My-protfolio\deploy.zip`

## Deployment Steps

1.  **Log in to cPanel** and open **File Manager**.
2.  **Navigate to your Domain Folder**:
    - Based on your screenshot, **do not** go to `public_html`.
    - instead, double-click on the folder named **cybernout.com**.
    - This is the "root" folder for your specific domain.
3.  **Clear Old Files**:
    - Inside the `cybernout.com` folder, you might see a `cgi-bin` folder. You can leave that there.
    - If there are other files like `index.php` or `default.html`, you should delete them or move them to a backup folder so they don't conflict with your new site.
4.  **Upload the Zip File**:
    - Click the **Upload** button in the top toolbar.
    - Drag and drop the `deploy.zip` file from your computer into the upload area.
5.  **Extract the Files**:
    - Go back to the File Manager (inside `cybernout.com`).
    - Click **Reload** if you don't see the file yet.
    - Right-click on `deploy.zip` and select **Extract**.
    - Ensure the extraction path is `/cybernout.com` (it usually defaults to the current folder).
    - Click **Extract File(s)**.
6.  **Cleanup**:
    - You can now delete `deploy.zip` from the server.
    - You should now see `index.html` and an `assets` folder directly inside `cybernout.com`.
7.  **Verify**:
    - Open `https://cybernout.com` in your browser.
