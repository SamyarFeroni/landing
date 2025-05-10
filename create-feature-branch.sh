#!/bin/bash

# Prompt user for branch description
read -p "🔤 Enter branch title (e.g. 'add login page'): " input_title

# Sanitize title: lowercase and replace spaces with dashes
clean_title=$(echo "$input_title" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')

# Get list of remote branches matching number-title pattern
branches=$(git branch -r | grep 'origin/[0-9]\+-' | sed 's/origin\///' | cut -d'-' -f1 | sort -n)

# Find the highest existing number
max=0
for b in $branches; do
    if [[ $b =~ ^[0-9]+$ ]]; then
        if (( b > max )); then
            max=$b
        fi
    fi
done

# Generate next number
new_number=$((max + 1))

# Create new branch name
new_branch="${new_number}-${clean_title}"

# Create and switch to the new branch
git checkout -b "$new_branch"

        
# Push the new branch to origin
git push -u origin "$new_branch"

# Show success message
echo "✅ Branch '$new_branch' created and pushed to origin."
