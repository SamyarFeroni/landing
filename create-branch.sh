#!/bin/bash


git fetch origin -q
branches=$(git branch -r | grep -oE '[0-9]+-[^/]+' | cut -d'-' -f1)
max_num=$(echo "$branches" | sort -nr | head -n1)
if [[ -z "$max_num" ]]; then
  max_num=0
fi
next_num=$((max_num + 1))
read -p "Enter branch description (e.g., imporovement, bugfix, feature, hotfix): " input
branch_name=$(echo "$input" | tr ' ' '-')
new_branch="${next_num}-${branch_name}"
git checkout -b "$new_branch"
echo "✅ Branch created: $new_branch"





