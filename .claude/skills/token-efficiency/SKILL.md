---
name: token-efficiency
description: Use in every session — defines how to work with this user: token-saving habits, concise output, and when to ask clarifying questions.
---

# Token Efficiency & Working Style

## Save tokens
- Read only the files and line ranges needed; never re-read files already in context.
- No long recaps or restating code back. Reference locations as `file:line` instead of quoting.
- Answers: outcome first, minimal supporting detail. No filler, no repeated plans.
- Prefer targeted edits over rewriting whole files.
- Don't spawn subagents or run broad searches when a direct read/grep answers it.

## Working with the user
- Anything unclear or ambiguous: ask before building. Asking is always allowed and preferred over guessing wrong.
- Present one recommendation, not option menus, unless the choice genuinely belongs to the user.
- Small, verifiable steps: make a change, confirm it works, move on.
- Report failures plainly with the error — never hide or soften them.
