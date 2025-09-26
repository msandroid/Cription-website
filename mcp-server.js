#!/usr/bin/env node

/**
 * Shadcn UI MCP Server Configuration
 * This script runs the shadcn-ui-mcp-server with React framework (default)
 */

const { spawn } = require('child_process');

// Configuration
const config = {
  framework: 'react', // Default framework
  githubApiKey: process.env.GITHUB_PERSONAL_ACCESS_TOKEN, // Optional GitHub token for higher rate limits
};

// Build command arguments
const args = ['@jpisnice/shadcn-ui-mcp-server'];

// Add framework if specified
if (config.framework && config.framework !== 'react') {
  args.push('--framework', config.framework);
}

// Add GitHub API key if available
if (config.githubApiKey) {
  args.push('--github-api-key', config.githubApiKey);
}

console.log('🚀 Starting Shadcn UI MCP Server...');
console.log(`📦 Framework: ${config.framework}`);
console.log(`🔑 GitHub Token: ${config.githubApiKey ? 'Configured' : 'Not configured (using default rate limits)'}`);
console.log('');

// Start the MCP server
const server = spawn('npx', args, {
  stdio: 'inherit',
  shell: true
});

server.on('error', (error) => {
  console.error('❌ Failed to start MCP server:', error);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`MCP server exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down MCP server...');
  server.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down MCP server...');
  server.kill('SIGTERM');
});
