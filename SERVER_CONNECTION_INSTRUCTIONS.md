# Server Connection & Deployment Guide

## Server Information
- **Server IP:** `158.69.195.145`
- **Username:** `ubuntu`
- **Key File Path:** `H:\websites\OVH\bhubhunji_private_key`
- **Application Path:** `/var/www/html/realshare/`

---

## Simple Connection
To open a secure terminal to your server:
```powershell
ssh -o StrictHostKeyChecking=no -i "H:\websites\OVH\bhubhunji_private_key" ubuntu@158.69.195.145
```

---

## Automated Deployment Script (For Next Time)
Use the following steps to update the live website in one go. You can copy and paste this into your PowerShell terminal:

### 1. Build and Prepare
```powershell
# 1. Build the project
npm run build

# 2. Package the build folder
Compress-Archive -Path dist -DestinationPath dist.zip -Force
```

### 2. Upload and Deploy
```powershell
# 3. Upload the package
scp -o StrictHostKeyChecking=no -i "H:\websites\OVH\bhubhunji_private_key" dist.zip ubuntu@158.69.195.145:/home/ubuntu/

# 4. Extract and sync to web directory
ssh -o StrictHostKeyChecking=no -i "H:\websites\OVH\bhubhunji_private_key" ubuntu@158.69.195.145 "unzip -o -q dist.zip && sudo mkdir -p /var/www/html/realshare && sudo cp -r dist/* /var/www/html/realshare/ && rm -rf dist dist.zip"
```

---

## Deployment Logic (What happens behind the scenes)
1. **Frontend Build**: Vite compiles the `App.tsx` and components into optimized HTML/JS/CSS in the `dist` folder.
2. **Transfer**: The `dist.zip` is sent to the server home directory.
3. **Synchronization**: The remote command unzips the files and copies them into `/var/www/html/realshare/`, which is the directory served by the web server (Nginx/Apache).
4. **Cleanup**: Temporary build files and the zip archive are removed from the server once the update is complete.

---

## Troubleshooting
- **Permission Denied**: If you get a permission error, ensure the key file path is correct and your IP isn't being throttled.
- **Connection Closed**: The server may rate-limit connections. If this happens, wait 60 seconds before retrying.
- **Changes not showing**: Clear your browser cache or check if Nginx needs a reload (though for static files, a reload is usually not required).
