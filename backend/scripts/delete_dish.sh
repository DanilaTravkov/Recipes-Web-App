#!/bin/bash

# Check if the id is provided as a command line argument
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <id>"
  exit 1
fi

# Get the id from the command line argument
id=$1

# Make the curl delete request
curl -X DELETE -H "Content-Type: application/json" "http://localhost:3000/v1/delete?id=$id"

