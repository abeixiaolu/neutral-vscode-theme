#!/bin/bash

# 简单的发布测试脚本

echo "Building extension..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful"
else
    echo "Build failed"
    exit 1
fi

echo "Checking if vsce is installed..."
if ! command -v vsce &> /dev/null
then
    echo "vsce could not be found, installing..."
    npm install -g vsce
fi

echo "Checking if ovsx is installed..."
if ! command -v ovsx &> /dev/null
then
    echo "ovsx could not be found, installing..."
    npm install -g ovsx
fi

echo "Test completed. You can now manually run the publish commands with your tokens."
echo "VSCE: vsce publish --no-dependencies -p YOUR_VSCE_PAT"
echo "OVSX: ovsx publish --no-dependencies -p YOUR_OVSX_PAT --packagePath \".\" -o abei"