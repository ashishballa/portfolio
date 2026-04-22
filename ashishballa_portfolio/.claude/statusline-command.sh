#!/usr/bin/env bash
# Claude Code status line script
input=$(cat)

model=$(echo "$input" | jq -r '.model.display_name // "Claude"' 2>/dev/null)
cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // ""' 2>/dev/null)
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty' 2>/dev/null)
five_h=$(echo "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty' 2>/dev/null)
vim_mode=$(echo "$input" | jq -r '.vim.mode // empty' 2>/dev/null)

# Shorten cwd to basename for display
if [ -n "$cwd" ]; then
  dir=$(basename "$cwd")
else
  dir=$(basename "$(pwd)")
fi

parts=""

# Directory
parts="[${dir}]"

# Model
if [ -n "$model" ]; then
  parts="$parts $model"
fi

# Context usage
if [ -n "$used" ]; then
  used_int=$(printf '%.0f' "$used")
  parts="$parts | ctx:${used_int}%"
fi

# Rate limit (5-hour window)
if [ -n "$five_h" ]; then
  five_int=$(printf '%.0f' "$five_h")
  parts="$parts | 5h:${five_int}%"
fi

# Vim mode
if [ -n "$vim_mode" ]; then
  parts="$parts | $vim_mode"
fi

printf '%s' "$parts"
