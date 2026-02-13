#!/bin/bash
# ICA01 Emergency Rollback Script
# This script restores the last known good state of the workspace files.

BACKUP_DIR="/data/.openclaw/workspace/memory"
LATEST_BACKUP=$(ls -t $BACKUP_DIR/ICA01_CORE_BACKUP_*.md | head -n 1)

if [ -z "$LATEST_BACKUP" ]; then
    echo "Error: No backup found."
    exit 1
fi

echo "Restoring from: $LATEST_BACKUP"
cp "$LATEST_BACKUP" "/data/.openclaw/workspace/memory/ICA01_CORE_BACKUP.md"
# Add other file restorations here if needed

echo "Rollback complete. Restarting Gateway..."
openclaw gateway restart
