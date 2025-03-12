#!/bin/bash

# Load the .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
else
  echo ".env file not found!"
fi

# Check if the token is set
if [ -z "$GITHUB_PAT" ]; then
  echo "GITHUB_PAT is not set in the environment!"
  exit 1
fi

# Define the URL of the resume file in the GitHub repository
REPO_OWNER="avahajr"
REPO_NAME="avahajr"
FILE_PATH="Ava_Hajratwala_resume"
URL="https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/contents/$FILE_PATH"

# Fetch the resume using the GitHub API
curl -H "Authorization: token $GITHUB_PAT" -H "Accept: application/vnd.github.v3.raw" -o public/Ava_Hajratwala_resume.pdf "$URL.pdf"
#curl -H "Authorization: token $GITHUB_PAT" -H "Accept: application/vnd.github.v3.raw" -o public/Ava_Hajratwala_resume.png "$URL.png"


# Check if the file was downloaded successfully
if [ $? -eq 0 ]; then
  echo "Resume downloaded successfully as public/Ava_Hajratwala_resume.pdf"
else
  echo "Failed to download the resume"
  exit 1
fi