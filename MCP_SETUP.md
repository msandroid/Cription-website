# Shadcn UI MCP Server Setup

This project now includes the [shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server) which provides AI assistants with comprehensive access to shadcn/ui components.

## 🚀 Quick Start

### 1. Basic Usage (React - Default)
```bash
npm run mcp-server
```

### 2. Other Frameworks
```bash
# Svelte
npm run mcp-server:svelte

# Vue
npm run mcp-server:vue

# React Native
npm run mcp-server:react-native
```

### 3. With GitHub Token (Recommended)
For higher rate limits (5000 requests/hour vs 60 requests/hour):

```bash
# Set your GitHub token
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here

# Then run the server
npm run mcp-server
```

## 🔧 Configuration

The MCP server is configured in `mcp-server.js` with the following options:

- **Framework**: React (default), Svelte, Vue, or React Native
- **GitHub Token**: Optional, for higher API rate limits
- **Auto-restart**: Handles process termination gracefully

## 📚 What You Get

The MCP server provides access to:

- **🎯 Component Source Code** - Latest shadcn/ui v4 TypeScript source
- **🎨 Component Demos** - Example implementations and usage patterns
- **🏗️ Blocks Support** - Complete block implementations (dashboards, calendars, forms)
- **📋 Metadata Access** - Dependencies, descriptions, and configuration details
- **🔍 Directory Browsing** - Explore repository structures

## 🎨 Supported Frameworks

| Framework | Repository | Description |
|-----------|------------|-------------|
| **React** (default) | [shadcn/ui](https://ui.shadcn.com/) | React components from shadcn/ui v4 |
| **Svelte** | [shadcn-svelte](https://www.shadcn-svelte.com/) | Svelte components from shadcn-svelte |
| **Vue** | [shadcn-vue](https://www.shadcn-vue.com/) | Vue components from shadcn-vue |
| **React Native** | [react-native-reusables](https://github.com/founded-labs/react-native-reusables) | React Native components |

## 🔗 Integration

To integrate with your AI assistant:

1. **VS Code**: See [integration docs](https://github.com/Jpisnice/shadcn-ui-mcp-server/blob/master/docs/integration/vscode.md)
2. **Cursor**: See [integration docs](https://github.com/Jpisnice/shadcn-ui-mcp-server/blob/master/docs/integration/cursor.md)
3. **Claude Desktop**: See [integration docs](https://github.com/Jpisnice/shadcn-ui-mcp-server/blob/master/docs/integration/claude-desktop.md)

## 📖 Documentation

- [Full Documentation](https://github.com/Jpisnice/shadcn-ui-mcp-server)
- [Getting Started Guide](https://github.com/Jpisnice/shadcn-ui-mcp-server/blob/master/docs/getting-started)
- [API Reference](https://github.com/Jpisnice/shadcn-ui-mcp-server/blob/master/docs/api)

## 🎯 Use Cases

- **AI-Powered Development** - Let AI assistants build UIs with shadcn/ui
- **Component Discovery** - Explore available components and their usage
- **Multi-Framework Learning** - Compare React, Svelte, Vue, and React Native implementations
- **Rapid Prototyping** - Get complete block implementations for dashboards, forms, etc.
- **Code Generation** - Generate component code with proper dependencies

---

**Made with ❤️ by the shadcn-ui-mcp-server team**
