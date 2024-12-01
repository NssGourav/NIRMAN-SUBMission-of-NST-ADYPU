# NIRMAN-SUBMission-of-NST-ADYPU

## About
This repository contains the official submissions for NIRMAN, a technical project showcase initiative by NST ADYPU. It features innovative projects from various teams, demonstrating technical excellence and creative problem-solving.


### Technologies Used
- HTML5 for structure
- CSS3 for styling
- JavaScript for interactivity
- Bootstrap for responsive design
- GitHub Pages for hosting


## Technical Details

### File Structure
Each team folder contains:
```
team-name/
├── index.html      # Team's main page
├── assets/         # Team-specific assets
├── docs/          # Project documentation
└── demo/          # Live demonstration
```
## Troubleshooting

### Common Issues
1. **404 Errors**
   - Check URL case sensitivity
   - Verify file paths
   - Ensure index.html exists

2. **Loading Issues**
   - Clear browser cache
   - Check internet connection
   - Verify file permissions

## Maintenance

### Regular Updates
- Weekly content updates
- Monthly technical maintenance
- Regular security checks

### Performance Optimization
- Image compression
- Code minification
- Caching implementation
# Pull Request Guide for NIRMAN-SUBMission-of-NST-ADYPU

## How to Submit Changes

### Prerequisites
- Git installed on your system
- GitHub account
- Basic knowledge of Git commands

### Step-by-Step Guide

1. **Fork the Repository**
   - Visit https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU
   - Click the "Fork" button in the top-right corner
   - This creates a copy of the repository in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/NIRMAN-SUBMission-of-NST-ADYPU.git
   cd NIRMAN-SUBMission-of-NST-ADYPU
   ```

3. **Create a New Branch**
   ```bash
   # For fixing 404 errors
   git checkout -b fix/404-error-teamname
   
   # For other changes
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Fix the issues in your team's folder
   - Test all changes locally
   - Ensure no new errors are introduced

5. **Commit Your Changes**
   ```bash
   # Add your changes
   git add .
   
   # Commit with a descriptive message
   git commit -m "Fix: Resolved 404 error for [team-name] folder"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin fix/404-error-teamname
   ```

7. **Create Pull Request**
   - Go to https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU
   - Click "Pull requests" tab
   - Click "New Pull Request"
   - Click "compare across forks"
   - Select your fork and branch
   - Click "Create pull request"

### Pull Request Template

Use this template when creating your pull request:

```markdown
## Description
[Describe what changes you made and why]

## Type of Change
- [ ] Bug fix (404 error, broken links)
- [ ] New feature
- [ ] Documentation update
- [ ] Other (please specify)

## Testing Done
- [ ] Tested locally
- [ ] Verified all links work
- [ ] Checked for mobile responsiveness

## Screenshots
[If applicable, add screenshots of the fixed pages]

## Related Issues
[Reference any related issues using #issue-number]
```

### Best Practices

1. **Before Creating PR**
   - Test all changes locally
   - Update documentation if needed
   - Follow repository's code style
   - Keep commits focused and clean

2. **PR Description**
   - Be clear and specific
   - Include screenshots if UI changes
   - Reference related issues
   - List all major changes

3. **After Creating PR**
   - Respond to review comments promptly
   - Make requested changes if any
   - Keep the PR updated with main branch

### Common Issues and Solutions

1. **Merge Conflicts**
   ```bash
   # Update your fork
   git remote add upstream https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   
   # Update your feature branch
   git checkout your-feature-branch
   git merge main
   ```

2. **404 Errors**
   - Check file paths are correct
   - Verify case sensitivity
   - Ensure all required files exist
   - Test navigation locally

### Contact

If you need help with your pull request:
- Open an issue
- Contact repository maintainers
- Ask for help in pull request comments

## Contact Information
- Technical Support: support@nstsdc.org
