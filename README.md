# User-Agent Spoofer Chrome Extension

A simple Chrome extension that displays your current browser user-agent and provides copy functionality for various popular browser user-agents, including both stable and latest versions.

## Features

- **Current User-Agent**: Displays and allows copying of your actual browser user-agent
- **Popular User-Agents**: Lists major browsers (Chrome, Safari, Edge, Firefox, Opera, Samsung Internet) with:
  - Stable versions including market share percentages
  - Latest versions (beta/candidate releases)
- **Copy Functionality**: One-click copying of any user-agent string
- **Quick Info**: Information button explaining user-agents and their purpose

## Installation

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (top right toggle)
3. Click "Load unpacked"
4. Select the folder containing these extension files (`manifest.json`, etc.)
5. Click the extension icon in the browser toolbar to open the popup

## Usage

Click the extension icon to open the popup:
- View your current user-agent string
- Browse popular user-agents with usage percentages
- Click any "Copy" button to copy the user-agent to clipboard
- Use copied user-agents for web development testing or debugging

## User-Agent Types

- **Stable**: Officially released versions (shown with market share %)
- **Latest**: Beta/candidate/early release versions

## Why User-Agents Matter

User-agent strings tell websites what browser you're using. Many sites serve different:
- Content layouts
- CSS/JS features
- Compatibility modes

This extension helps developers test their sites across different browsers without needing multiple actual browsers installed.

## Development

Built with vanilla JavaScript, HTML, and CSS using Manifest V3.

## License

MIT License - feel free to modify and distribute.
