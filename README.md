# NIRMAN Project Documentation

## Overview
NIRMAN is a project submission platform for NST-ADYPU. This repository serves as the database for the main website, containing team submissions and project information.

Repository Link: [NIRMAN-SUBMission-of-NST-ADYPU](https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU)

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Data Storage: JSON files
- Version Control: Git

## Project Structure
```
NIRMAN-SUBMission-of-NST-ADYPU/
├── teams/
│   ├── team1/
│   │   ├── data.json
│   │   └── assets/
│   └── team2/
│       ├── data.json
│       └── assets/
└── README.md
```

## Working with JSON Files

### JSON File Structure
Each team folder contains a `data.json` file with the following structure:
```json
{
  "teamName": "Team Name",
  "projectTitle": "Project Title",
  "members": [
    {
      "name": "Member Name",
      "role": "Role"
    }
  ],
  "description": "Project Description",
  "technologies": ["Tech1", "Tech2"],
  "assets": {
    "images": ["path/to/image1.jpg"],
    "videos": ["path/to/video1.mp4"]
  }
}
```

### Modifying JSON Files
1. Ensure proper JSON syntax
2. Use valid file paths for assets
3. Keep asset file names lowercase and without spaces
4. Validate JSON after modifications using a JSON validator

## Handling 404 Errors

### Common Causes of 404 Errors
1. Incorrect file paths in JSON
2. Missing asset files
3. Case sensitivity issues in file names
4. Invalid folder structure

### How to Fix 404 Errors
1. Check file paths in JSON files
2. Verify all referenced assets exist
3. Ensure correct case in file names
4. Validate folder structure matches the template

## Contributing Changes

### Setting Up Local Environment
```bash
# Clone the repository
git clone https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU.git
cd NIRMAN-SUBMission-of-NST-ADYPU

# Create a new branch
git checkout -b fix/team-name-404
```

### Making Changes
1. Fix the identified issues
2. Test changes locally
3. Commit changes with descriptive messages

### Submitting Pull Request
```bash
# Add changes
git add .

# Commit changes
git commit -m "Fix: Resolved 404 error for [team-name]"

# Push changes
git push origin fix/team-name-404
```

Then:
1. Go to the [repository page](https://github.com/nst-sdc/NIRMAN-SUBMission-of-NST-ADYPU)
2. Click "Pull requests"
3. Click "New pull request"
4. Select your branch
5. Add description of changes
6. Submit pull request

## Testing Changes
1. Preview changes locally using a web server
2. Verify all assets load correctly
3. Check all links work as expected
4. Test on different browsers

## Support
For issues or questions, please open an issue in the repository or contact the maintainers.

