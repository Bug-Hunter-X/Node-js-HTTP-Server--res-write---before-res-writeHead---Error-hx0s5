# Node.js HTTP Server Error: res.write() before res.writeHead()

This repository demonstrates a common error in Node.js HTTP servers: calling `res.write()` before `res.writeHead()`.  This can lead to unexpected behavior, including empty responses or crashes. The solution shows the correct order of operations.

## Bug

The `bug.js` file contains a Node.js HTTP server that attempts to write to the response (`res.write()`) before setting the headers (`res.writeHead()`). This is incorrect and will result in errors.

## Solution

The `bugSolution.js` file provides the corrected code, ensuring that `res.writeHead()` is called before `res.write()`. This ensures the headers are set properly before any data is written to the response.