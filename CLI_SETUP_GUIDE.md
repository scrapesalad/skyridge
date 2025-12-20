# Claude & ChatGPT CLI Setup Guide

## ✅ Installation Status

### Claude CLI
- **Status:** ✅ Installed and Working
- **Version:** 2.0.74 (Claude Code)
- **Command:** `claude`

### ChatGPT CLI
- **Status:** ⚠️ Installed but requires API token
- **Package:** `chatgpt-cli`
- **Command:** `chatgpt`

## 🔧 Setup Instructions

### Claude CLI Setup

1. **Authenticate with Claude:**
   ```bash
   claude login
   ```
   This will open a browser window for authentication.

2. **Verify Installation:**
   ```bash
   claude --version
   ```

3. **Basic Usage:**
   ```bash
   # Interactive mode (default)
   claude
   
   # With a prompt
   claude "Help me write a function"
   
   # Print mode (non-interactive)
   claude -p "What is TypeScript?"
   ```

4. **Useful Commands:**
   ```bash
   # Continue last conversation
   claude -c
   
   # Resume a specific session
   claude -r
   
   # Check for updates
   claude update
   
   # Check health
   claude doctor
   ```

### ChatGPT CLI Setup

The `chatgpt-cli` package requires an OpenAI API token.

1. **Get OpenAI API Key:**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key
   - Copy the key

2. **Set Environment Variable (Windows PowerShell):**
   ```powershell
   $env:TOKEN = "your-openai-api-key-here"
   ```

3. **Set Environment Variable (Windows CMD):**
   ```cmd
   set TOKEN=your-openai-api-key-here
   ```

4. **Set Environment Variable Permanently (Windows):**
   ```powershell
   [System.Environment]::SetEnvironmentVariable('TOKEN', 'your-openai-api-key-here', 'User')
   ```

5. **Verify Installation:**
   ```bash
   chatgpt --version
   ```

6. **Basic Usage:**
   ```bash
   chatgpt "Your question here"
   ```

## 🔄 Alternative ChatGPT CLI Options

If you prefer a different ChatGPT CLI, here are alternatives:

### Option 1: OpenAI CLI (Official)
```bash
npm install -g openai-cli
```

### Option 2: ChatGPT CLI by Kardolus (Binary)
Download from: https://github.com/kardolus/chatgpt-cli/releases
- For Windows: Download `chatgpt-windows-amd64.exe`
- Rename to `chatgpt.exe`
- Add to PATH

### Option 3: Python-based ChatGPT CLI
```bash
pip install chatgpt-cli-tool
```

## 📝 Quick Start Examples

### Claude CLI Examples

```bash
# Ask a question
claude "Explain Next.js routing"

# Code generation
claude "Create a React component for a contact form"

# Continue conversation
claude -c

# Non-interactive mode
claude -p "What is the capital of France?"
```

### ChatGPT CLI Examples

```bash
# After setting TOKEN environment variable
chatgpt "Explain React hooks"

# Interactive mode (if supported)
chatgpt
```

## 🔐 Security Notes

- **Never commit API keys to version control**
- Use environment variables for API keys
- Consider using `.env` files for local development
- Rotate API keys regularly

## 🆘 Troubleshooting

### Claude CLI Issues

1. **Authentication failed:**
   ```bash
   claude login
   ```

2. **Check for updates:**
   ```bash
   claude update
   ```

3. **Check health:**
   ```bash
   claude doctor
   ```

### ChatGPT CLI Issues

1. **Token not found:**
   - Ensure TOKEN environment variable is set
   - Restart terminal after setting environment variable

2. **Permission errors:**
   - Run terminal as administrator if needed
   - Check npm global installation path

## 📚 Additional Resources

- Claude CLI Docs: https://docs.claude.com/en/docs/claude-code/quickstart
- OpenAI API Docs: https://platform.openai.com/docs
- ChatGPT CLI GitHub: https://github.com/kardolus/chatgpt-cli

---

**Last Updated:** Installation completed successfully
**Claude CLI Version:** 2.0.74
**Node.js Version:** v24.12.0
**npm Version:** 11.6.2

